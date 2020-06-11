const $block = $('.form');
const $input = $block.find('.file-upload');
const getView = data => {
  return `
    <div class='file-label'>
      <div class='file-label__button'></div>
      <div class='file-label__text'>
        <span class='file-label__title'>
          ${data.name}
        </span>
        <span class='file-label__requires'>
          ${data.type}
        </span>
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
        <img src="../../images/plus.svg" alt=""/></div><div class="file-label__text">
        <span class="file-label__title">Загрузить еще</span>
      </div>
      <input class="file-upload" type="file" id="upload-file" multiple="multiple" accept=".png, ,jpg, .mp4, .gif"/>
    </label>

    `

    $input.parent('.file-label').html(uploadMore);
}


const reverse = () => $block.find('.form__file-component').toggleClass('form__file-component--reversed');

export default () => {
  $input.on('change', function() {
  const files = $(this).prop('files');
  const viewsList = [];
    for(let key in files) {
        if(key !== 'length' && key !== 'item') {
          const fileData = files[key];
          viewsList.push(getView(fileData))
        }
    }

    reverse();
    $block.find('.form__file-list').append(viewsList);
    toggleInputState($(this));
  })
}
