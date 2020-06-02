import 'core-js/es/promise';

import $ from 'jquery';

// Uncomment for use BOOTSTAP4
// window.Popper = require('popper.js').default;
// require('bootstrap');
// import 'bootstrap/scss/bootstrap.scss';

import './fonts';
import initLayout from './layout';
import initBlocks from './blocks';
import initPages from './pages';

$(() => {
  $('.select').on('change', function(){
    $(this).css({background: $(this).find('option:selected').data('color')});
  });
  initLayout();
  initBlocks();
  initPages();
});
