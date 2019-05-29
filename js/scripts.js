$('.directions-blocks').slick({
       dots: true,
       arrows: false,
       slidesToShow: 4,
       slidesToScroll: 1,
       responsive: [
       {
           breakpoint: 768,
           settings: {
               slidesToShow: 1,
               slidesToScroll: 1
           }
       }
       ]
   });

$( document ).ready(function(){
     $( ".top-nav_btn" ).click(function(){ 
    $( ".top-nav_menu" ).slideToggle(); 
  });
});

var elem = document.querySelector('.calc-range');
var init = new Powerange(elem, { min: 100000, max: 3000000, start: 100000, hideRange: true, step: 100000 });
var per, month, result, total, monthly;
var money = +$('.calc-range').val();

$('input[name="programms"]').on('change', function(event) {
  month = +$(this).attr('data-month');
  per = +$(this).attr('data-per');
  result = Math.round(per / 12 * month * money);
  total = result + money;
  monthly = parseInt(result / month);
  $('#total').text(total.toString().replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 '));
  $('.calc-monthly span').text(monthly.toString().replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 '));
  $('#month').text(month)

  $('.calc-range').on('change', function(event) {

    $('.calc-summ_invest_number span').text($(this).val().replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 '))
    var radio = $('input[name="programms"]:checked')
    money = +$(this).val();
    month = +radio.attr('data-month');
    per = +radio.attr('data-per');
    result = Math.round(per / 12 * month * money);
    total = result + money;
    monthly = parseInt(result / month);
    $('#total').text(total.toString().replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 '));
    $('.calc-monthly span').text(monthly.toString().replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 '));
    console.log(per);
    console.log(month);
  });
});