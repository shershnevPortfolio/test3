const $block = $('.form');
const $input = $block.find('.file-upload');
const getView = data => {
  return `
    <div class='file-label'>
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

export default () => {
  $input.on('change', function() {
  const files = $(this).prop('files');
  const viewsList = [];
  console.log(files)
    for(let key in files) {
        if(key !== 'length' && key !== 'item') {
          const fileData = files[key];
          viewsList.push(getView(fileData))
        }
    }
    $block.find('.form__file-list').append(viewsList)
    console.log(viewsList);
  })
}
