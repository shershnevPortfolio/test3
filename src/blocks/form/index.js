const $block = $('.form');
const $input = $block.find('.file-upload');
const getView = data => {
  return `
    <div class='file-label'>

      <div class='file-label__button file-label__button--colored'>
      <img src="${require('../../images/extention.svg')}" alt=""/></div><div class="file-label__text">
      </div>
      <div class='file-label__text'>
        <span class='file-label__title'>
          ${data.name}
        </span>
        <span class='file-label__requires'>
          ${data.extention}, ${data.size}
        </span>
        <div class='file-label__cross'>
          <img src="${require('../../images/cross.svg')}" alt=""/>
        </div>
      </div>
    </div>

    `
}

const toggleInputState = ($input) => {
    const defaultState = `
      <label class="file-label" for="upload-file">
      <div class="file-label__button">
        <img src="../../images/staple.svg" alt=""/></div><div class="file-label__text">
        <span class="file-label__title">Прикрепить файлы</span>
        <span class="file-label__requires">Jpg, png, gif, mp4 не более 15 Мб</span>
      </div>
      <input class="file-upload" type="file" id="upload-file" multiple="multiple" accept=".png, ,jpg, .mp4, .gif"/>
    </label>
    `

    const uploadMore = `
      <label class="file-label file-label--more" for="upload-file">
      <div class="file-label__button">
        <img src="${require('../../images/plus.svg')}" alt=""/></div><div class="file-label__text">
        <span class="file-label__title">Загрузить еще</span>
      </div>
      <input class="file-upload" type="file" id="upload-file" multiple="multiple" accept=".png, ,jpg, .mp4, .gif"/>
    </label>

    `
    $input.parent('.file-label').html(uploadMore);
}


const reverse = () => $block.find('.form__file-component').toggleClass('form__file-component--reversed');

const modifyData = (obj) => {
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
  return {...obj, name: fileName, extention: fileExtention, size}

}

export default () => {
  $input.on('change', function() {
  const files = $(this).prop('files');
  const viewsList = [];
  console.log('asdasdasdasd')
    for(let key in files) {
        if(key !== 'length' && key !== 'item') {
          const fileData = files[key];
          const newData = modifyData(fileData);
          viewsList.push(getView(newData));
        }
    }

    reverse();
    $block.find('.form__file-list').append(viewsList);
    toggleInputState($(this));
  })
}
