let sandLine = 0.62; 
  // where the sand starts: 0.62 = 62% of the way down the beach

$(".item").draggable({
    containment: ".beach",
    scroll: false,
    opacity: 0.7,
    cursor: "grabbing",
    stack: ".item",
    stop: function(){
        dropToSand($(this));
    }
});

$(".item").click(
    function(){
        $(this).animate({ top: "-=80px" }, 200).animate({ top: "+=80px" }, 200);
    }
);

function dropToSand(toy){
    let beachHeight = $(".beach").height();
    let toyBottom = toy.position().top + toy.height();
    let landingBottom = beachHeight * (sandLine + 0.12);   
    // where its bottom ends up on the sand

    if (toyBottom < landingBottom){
        toy.animate({ top: landingBottom - toy.height() }, 700, "easeOutBounce");
    }
}

$(".sun").click(
    function(){
        $(".item").fadeToggle();
        $(".crab").fadeToggle();
    }
);

$(".ball").click(
    function(){
        $(this).animate({ top: "-=80px" }, 200).animate({ top: "+=80px" }, 200);
    }
);

$(".castle").click(
    function(){
        $(this).toggleClass("spin");
    }
);

function walkRight(){
    $(".crab").animate({ left: $(".beach").width() - $(".crab").width() }, 15000, "linear", walkLeft);
}

function walkLeft(){
    $(".crab").animate({ left: 0 }, 15000, "linear", walkRight);
}

walkRight();