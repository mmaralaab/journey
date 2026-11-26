$(".hotspot").hover(
    function(){
        $(this).next('.info').css("display", "block");
    }, 
  
    function(){
        $(this).next('.info').css("display", "none");
    }
);