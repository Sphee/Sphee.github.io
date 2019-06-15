$(document).ready(function () {
      animationlogo();
      setInterval(animationlogo, 6000)
  })
  c = -1;
  function animationlogo(){
      c = c+1;
      console.log('yeet')
      if(c>2){
          c=0;
      }
       $('.level3').each(function (i,e) {
          $(this).css("display", "none");
          $(this).removeClass("animate");
          if(i == c){
              $(this).css("display", "block");
          }   $(this).addClass("animate");
      });

  }
