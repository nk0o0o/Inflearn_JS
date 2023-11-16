function surveySwiper() {
   var surveySwiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      slidesPerView: 1,
      speed: 700,
      mousewheel: false, 
      allowTouchMove:false,     
      loop: false,
      navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
      },
      pagination: {
         el: '.pagination_progressbar',
         type: 'progressbar',
         clickable: false,
      },
     /*  on:{
         init: function(){
           
         },
         click: function(event){
           
         },
         slideChange: function(swiper){
            
         },
      } */
   });
   //progress Bar
   var pagingSwiper = new Swiper('.swiper-container', {
      direction: 'vertical',
      pagination: {   //페이징 사용자 설정
         el: ".pagination_fraction",   //페이징 태그 클래스 설정 
         type : 'fraction'
      }
   });
   
   //Main Swiper로 Fraction제어
   surveySwiper.controller.control = pagingSwiper;
}
