    /*--------------------------------------------------------
    / 1. Fixed Header
    /--------------------------------------------------------*/
    let header=document.getElementById('header');
    
    window.addEventListener('scroll', function() {
      if(window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0) > 40){
      header.classList.add('fixedHeader');

      }
      else {
      header.classList.remove('fixedHeader');

      }
      scrollTopMenu();

});



