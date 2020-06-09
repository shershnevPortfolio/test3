import './index.sass';


import 'select2';
import 'select2/dist/css/select2.css';

export default () => {
  const configs = [
      {
        placeholder: 'Проект',
        minimumResultsForSearch: -1,
        data: [
          {id: 'RsDigital', text: 'Rs Digital'},
          {id: 'Rocketware', text: 'Rocketware'},
          {id: 'Mecto.ru', text: 'Mecto.ru'}
        ]

     },
     {
       placeholder: 'Приоритет',
       data: [
        {id: 'max', text: 'Максимум'},
        {id: 'high', text: 'Высокий'},
        {id: 'intermidiate', text: 'Средний'},
        {id: 'min', text: 'Минимальный'},
        {id: 'low', text: 'Низкий'},
      ]

      },
          {
            placeholder: 'Статус',
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
      console.log(config)
      $(this).select2(config);
  })





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
