$(function(){
  window.setInterval(function(){
    $('.wrap').addClass('compact');
    window.setTimeout(function(){
      $('.wrap').removeClass('compact');
      $('.wrap').addClass('dot');
      window.setTimeout(function(){
        $('.wrap').removeClass('dot');
      },1000);
    },700);       
  },1500);
});