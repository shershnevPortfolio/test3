class Loader {
  constructor($container) {
    this.progress = 0;
    this.$container = $container;
  }

  _getView() {
   return `<div class='loading'>
      <div style='width: ${this.progress * 25}%' class='loading__progress-bar'></div>
    </div>`
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


  load(file) {
    this.interval = setInterval(() => {
      if(this.progress * 4  > 100) {

        return;
      }
      setTimeout(() => {
        this._stop(file);
        }, 2000 )

      this.progress++;
      this.$container.html(this._getView());
    }, 500)
  }

  _stop(file) {
    clearInterval(this.interval);
    this.$container.html(this._getFileView(file));
  }
}

export default Loader;
