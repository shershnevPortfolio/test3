import './index.sass';


import 'select2';
import 'select2/dist/css/select2.css';

export default () => {
  const configs = [
      {
        placeholder: 'Проект',
        closeOnSelect : false,
        minimumResultsForSearch: -1,
        data: [
          {id: 'RsDigital', text: 'Rs Digital'},
          {id: 'Rocketware', text: 'Rocketware'},
          {id: 'Mecto.ru', text: 'Mecto.ru'}
        ]

     },
     {
       placeholder: 'Статус',
       closeOnSelect : false,
       data: [
         {id: 'in-progress', text: 'В работе'},
         {id: 'done', text: 'Сделана'},
         {id: 'need-check', text: 'Нужна проверка'},
       ]

     },
     {
       placeholder: 'Приоритет',
       closeOnSelect : false,
       data: [
        {id: 'max', text: 'Максимум'},
        {id: 'high', text: 'Высокий'},
        {id: 'intermidiate', text: 'Средний'},
        {id: 'min', text: 'Минимальный'},
        {id: 'low', text: 'Низкий'},
      ]

      },
      {
        placeholder: 'Автор',
        closeOnSelect : false,
        data: [
          {id: 'in-progress', text: 'В работе'},
          {id: 'done', text: 'Сделана'},
          {id: 'need-check', text: 'Нужна проверка'},
        ]

      },
      {
        placeholder: 'Участие',
        closeOnSelect : false,
        data: [
          {id: 'in-progress', text: 'В работе'},
          {id: 'done', text: 'Сделана'},
          {id: 'need-check', text: 'Нужна проверка'},
        ]

      },

  ]
  const $block = $('.filter');
  const $seletsContainer = $block.find('.filter__selects');
  const $selets = $seletsContainer.find('select');

  $selets.each(function(index) {
      const config = configs[index];
      $(this).select2(config);
  })


  $selets.on('select2:open', e => {
    $('.select2-results__options').addClass('with-checkbox');
  })
  // select2-container





//
//  $selets.each( function(index) {
//     const selectedOption =  $(this).find('option:selected');
//     const css = {
//       color: selectedOption.data('text'),
//       background: selectedOption.data('color')
//     }
//     $(this).parent('.task__select').find('.select2-selection--single').css({background: css.background});
//     $(this).parent('.task__select').find('.select2-selection__rendered').css({color: css.color});
//     $(this).parent('.task__select').find('.select2-selection__arrow').append(СreateArrow(css.color));
//     $(this).parent('.task__select').find('.select2-results__option').css({color: 'red '});
//  });

}
