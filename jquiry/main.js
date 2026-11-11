$(".dark-btn").click(
    function(){
        $(".container").toggleClass("dark");
        $(".box").toggleClass("dark");
    }
);

$(".spin-btn").click(
    function(){
        $(".box").toggleClass("spin");
    }
);

$(".reveal-btn").click(
    function(){
       // $(".sun").addClass("reveal");
       //$(".chair").css("display","block")
       $(".sun").show();
       $(".reveal-btn").hide();
    }
);

$( function() {
    $( ".sun" ).draggable();
  } );

$(".draggable").draggable({
    containment: ".container",
    scroll: false,
    snap: true,
    grid: [40,40],
    stack: ".draggable"
});