import Loader from './Loader'

const $block = $('.form');
const $input = $block.find('.file-upload');
const getView = data => {
const {key, name, size, extention} = data;

  return `
    <div class='file-label' id='file-label-${key}' data-key='${key}'>

    </div>

    `
}

const switchInputState = ($input, state) => {
    const main = `
      <label id='#file-loader' class="file-label" for="upload-file">
      <div class="file-label__button">
        <img src="../../images/staple.svg" alt=""/></div><div class="file-label__text">
        <span class="file-label__title">Прикрепить файлы</span>
        <span class="file-label__requires">Jpg, png, gif, mp4 не более 15 Мб</span>
      </div>
      <input class="file-upload" type="file" id="upload-file" multiple="multiple" accept=".png, ,jpg, .mp4, .gif"/>
    </label>
    `

    const more = `
      <label id='#file-loader' class="file-label file-label--more" for="upload-file">
      <div class="file-label__button">
        <img src="${require('../../images/plus.svg')}" alt=""/></div><div class="file-label__text">
        <span class="file-label__title">Загрузить еще</span>
      </div>
      <input class="file-upload" type="file" id="upload-file" multiple="multiple" accept=".png, ,jpg, .mp4, .gif"/>
    </label>

    `
    const empty = `

    `
    const states = {
      main,
      empty,
      more
    }

    console.log(states[state], state, $input);
    $('#file-loader').html(states[state]);
}


const reverse = () => $block.find('.form__file-component').toggleClass('form__file-component--reversed');

const modifyData = (obj, key) => {
  const typeData = obj.type.split('/');
  const fileType = typeData[0];
  let size = obj.size/1000000;
  if(size < 1) {
    size *= 1024;
    size = `${size.toFixed(0)} Кб`;
  } else {
    size = `${size.toFixed(0)} Мб`;
  }
  const fileExtention = typeData[1].toUpperCase();
  const fileName = obj.name.slice(0, obj.name.indexOf(fileExtention) - fileExtention.length);
  return {...obj, name: fileName, extention: fileExtention, size, key}

}

export default () => {
  $input.on('change', function() {
    console.log('changed');
  const files = $(this).prop('files');
  console.log(files);
  const viewsList = [];
  let i = 0;
  const loadersList = [];
    for(let key in files) {
        if(key !== 'length' && key !== 'item') {
          const fileData = files[key];
          const newData = modifyData(fileData, key);
          viewsList.push();
          $block.find('.form__file-list').append(getView(newData));
          const loader = new Loader($(`#file-label-${key}`));
          switchInputState($(this), 'empty')
          loader.load(newData, (test) => {
            switchInputState($(this), 'more');
            console.log(test)
          });
        }
    }

    reverse();

    $('.file-label__cross').on('click', function() {
      $($(this).parents('.file-label')[0]).remove();
    });
  })

}
