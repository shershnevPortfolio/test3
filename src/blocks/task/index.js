import './index.sass';
import 'select2';
import 'select2/dist/css/select2.css';

export default () => {
  const $block = $('.task');
  const $seletsContainer = $block.find('.task__select');
  const $selets = $seletsContainer.find('.select');
  const СreateArrow = color => {
   return  `<svg width="11" height="7" viewBox="0 0 11 7" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0.858844 1.57019L0.716869 1.42858L0.858844 1.28698L1.28854 0.858395L1.42978 0.717525L1.57102 0.858395L5.58341 4.86036L9.59581 0.858395L9.73705 0.717525L9.87828 0.858395L10.308 1.28698L10.45 1.42858L10.308 1.57019L5.72465 6.14161L5.58341 6.28248L5.44218 6.14161L0.858844 1.57019Z" fill="${color}" stroke="#212121" stroke-width="0.4"/>
  </svg>
  `;

  }
  // const $options = $selets.children();

  $selets.select2({
    minimumResultsForSearch: -1,

 });

//
 $selets.each( function(index) {
    const selectedOption =  $(this).find('option:selected');
    console.log($(this).parent('.task__select').find('.select2-selection--single'));
    const css = {
      color: selectedOption.data('text'),
      background: selectedOption.data('color')
    }
    $(this).parent('.task__select').find('.select2-selection--single').css({background: css.background});
    $(this).parent('.task__select').find('.select2-selection__rendered').css({color: css.color});
    $(this).parent('.task__select').find('.select2-selection__arrow').append(СreateArrow(css.color));
    console.log($(this).parent('.task__select'), 'option');
    $(this).parent('.task__select').find('.select2-results__option').css({color: 'red '});
    // $seletsContainer.find('.select2-selection--single').css({background: $(this).find('option:selected').data('color'), color: $(this).find('option:selected').data('text')});
 });

 

// $('.select').on('change', e => {
//     console.log(e.target);
// })

}
