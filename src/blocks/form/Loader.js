class Loader {
  constructor($container, name) {
    this.progress = 0;
    this.$container = $container;
    this.emptyCallBack;
  }

  _getView(name, ext) {
   return `<div class='loading'>
      <div style='width: ${this.progress * 25}%' class='loading__progress-bar'></div>
    </div>
    <div class='loading__file-name'>${name}.${ext.toLowerCase()}</div>
    `
  }

  _getFileView(data) {
      const {key, name, size, extention} = data;
      return ` <div class='file-label__button file-label__button--colored'>
      <img src="${require('../../images/extention.svg')}" alt=""/></div><div class="file-label__text">
      </div>
      <div class='file-label__text'>
        <span class='file-label__title'>
          ${name}
        </span>
        <span class='file-label__requires'>
          ${extention}, ${size}
        </span>
        <div class='file-label__cross'>
          <img src="${require('../../images/cross.svg')}" alt=""/>
        </div>
      </div>`
  }


  load(file, callback) {
    this.interval = setInterval(() => {
      this.progress++;
      this.$container.html(this._getView(file.name, file.extention));
    }, 500);
    setTimeout(() => {
      this._stop(file);
      callback();
      }, 2000 )

  }

  _stop(file) {
    clearInterval(this.interval);
    this.$container.html(this._getFileView(file));
    const {emptyCallBack} = this;
    this.$container.find('.file-label__cross').on('click', function() {
      const $container = $(this).parents('.form__file-list');
      $($(this).parents('.file-label')[0]).remove();
      if($container.children().length === 0) {
        emptyCallBack();
      }

    });
  }

  setEmtyCallBack(callback) {
    this.emptyCallBack = callback;
  }

}

export default Loader;
