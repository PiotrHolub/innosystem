function changePage(page) {
    $('.carousel').carousel(page)
  }
  
  $(document).ready(function(){
      $('.carousel').carousel({
        interval: 2000
      })
  
      $('.carousel').on('slide.bs.carousel', function (event) {
        var page = event.to
        $('.dots').children().removeClass("dotActive")
        $('.dots').children().eq(page).addClass("dotActive");
      })
    });

    