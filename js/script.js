console.log("lets see if this remains in your code")

$(document).click(function(){

    $(".speaker-toggle").click(function () {
        let targetId = $(this).data("target");
        
        $("#events").fadeIn();
        $(".event").hide();
        
    });
});

$(".line1").hover(function(){

    //hovering
    $(".line2").css("color","#eacee1")
    $(".line3").css("color","#c5e0e3")
    $(".line4").css("color","#fed3b5")
    $("#speaker-name1").addClass("hover-highlight");
    
    
},

function(){
    //not hovering

    $(".line2").css("color","")
    $(".line3").css("color","")
    $(".line4").css("color","")
    $("#speaker-name1").removeClass("hover-highlight");
    
})


$(".line2").hover(function(){

    //hovering
    $(".line1").css("color","#ffccc8")
    $(".line3").css("color","#c5e0e3")
    $(".line4").css("color","#fed3b5")
    $("#speaker-name2").addClass("hover-highlight2");
},

function(){
    //not hovering

    $(".line1").css("color","")
    $(".line3").css("color","")
    $(".line4").css("color","")
    $("#speaker-name2").removeClass("hover-highlight2");
    
})



$(".line3").hover(function(){

    //hovering
    $(".line2").css("color","#eacee1")
    $(".line1").css("color","#ffccc8")
    $(".line4").css("color","#fed3b5")
    $("#speaker-name3").addClass("hover-highlight3");
},

function(){
    //not hovering

    $(".line2").css("color","")
    $(".line1").css("color","")
    $(".line4").css("color","")
    $("#speaker-name3").removeClass("hover-highlight3");
    
})


$(".line4").hover(function(){

    //hovering
    $(".line2").css("color","#eacee1")
    $(".line3").css("color","#c5e0e3")
    $(".line1").css("color","#ffccc8")
    $("#speaker-name4").addClass("hover-highlight4");
},

function(){
    //not hovering

    $(".line2").css("color","")
    $(".line3").css("color","")
    $(".line1").css("color","")
    $("#speaker-name4").removeClass("hover-highlight4");
    
})






$(document).ready(function() {
    var speakerColors = {
        "maria-carolina-cambre": "#ffb9c1",
        "isabel-machado": "#dcbeeb", 
        "daniel-wildberger": "#9edaed", 
        "shima-rashnoodi": "#fec6a2" 
    };

    var defaultBackgroundColor = "#fee7d2";
    var currentSpeaker = null;  

    $(".speaker-name").click(function() {
        var target = $(this).data("target"); 
        var color = speakerColors[target] || "#ffffff";
        
        if (currentSpeaker === target) {
            $("#titles").toggle();  
            $("body").css("background-color", defaultBackgroundColor); 
            $(this).removeClass("active-speaker");
            currentSpeaker = null;  
        } else {
            $(".speaker-name").removeClass("active-speaker");
            
            $(this).addClass("active-speaker");
            
            $("body").css("background-color", color);
            
            $("#titles").hide();
            
            currentSpeaker = target;
        }
    });
});





/*

$(".speaker-name").hover(function(){

    //when hovering
    $("#.speakername").css("color","#white")
    $("#click").css("background-color","#a8caff")
    
    
},
function(){
    //not hovering
    
})
*/



//a=makes the names fade out when hovering

$(document).ready(function () {
    $(".speaker-name").on("mouseenter", function () {
        $(".speaker-name").not(this).stop(true, true).fadeTo(300, 0);
    });

    $(".speaker-name").on("mouseleave", function () {
        $(".speaker-name").stop(true, true).fadeTo(300, 1);
    });
});









//speaker 1
$("#speaker-name1").hover(function(){

    $("#speaker-name1").css("background-color","#ffa5a5")

},

function(){

    $("#speaker-name1").css("background-color","")
  
})

//speaker 2
$("#speaker-name2").hover(function(){

    $("#speaker-name2").css("background-color","#c2a4d5")

},

function(){

    $("#speaker-name2").css("background-color","")
  
})
//speaker 3
$("#speaker-name3").hover(function(){

    $("#speaker-name3").css("background-color","#74d2ef")

},

function(){

    $("#speaker-name3").css("background-color","")
  
})

//speaker 4
$("#speaker-name4").hover(function(){

    $("#speaker-name4").css("background-color","#fca56e")

},

function(){

    $("#speaker-name4").css("background-color","")
  
})




$(document).ready(function () {
    var speakerColors = {
        "maria-carolina-cambre": "#ffb9c1",
        "isabel-machado": "#dcbeeb", 
        "daniel-wildberger": "#9edaed", 
        "shima-rashnoodi": "#fec6a2" 
    };

    $(".speaker-name").on("click", function () {
        let target = $(this).data("target");
        let event = $("#" + target);
        let isActive = event.is(":visible");

        $(".speaker-name").removeClass("active-speaker");
        $(this).addClass("active-speaker");

        $(".event").hide().find(".scribble-mask").remove();

        if (!isActive) {
            $("#speakers").show();
            event.show();
            applyScribbleEffect(event, speakerColors[target]);
        }
    });


    function applyScribbleEffect(event, color) {
        let width = event.outerWidth(),
            height = event.outerHeight();
    
        let canvas = $("<canvas>")
            .attr({ width: width, height: height })
            .addClass("scribble-mask")
            .css({
                position: "absolute",
                top: 0,
                left: 0,
                pointerEvents: "none",
                zIndex: 2
            })
            .appendTo(event);
    
        let ctx = canvas[0].getContext("2d");
        ctx.fillStyle = color || "#ffa5a5";
        ctx.fillRect(0, 0, width, height);
    
 
        event.on("mousemove", function (e) {
            let rect = canvas[0].getBoundingClientRect();
            let x = e.clientX - rect.left,
                y = e.clientY - rect.top;
    
            ctx.globalCompositeOperation = "destination-out";
            ctx.beginPath();
            ctx.arc(x, y, 100, 0, Math.PI * 2);
            ctx.fill();
        });
    }
    
});





$("#info-title1").hover(function() {
    // hovering
    $("#bio-text").fadeIn();
}, function() {
    // not hovering
    $("#bio-text").fadeOut();
});

$("#info-title2").hover(function() {
    // hovering
    $("#lecture-text").fadeIn();
}, function() {
    // not hovering
    $("#lecture-text").fadeOut();
});



$("#info-title1-2").hover(function() {
    // hovering
    $("#bio-text2").fadeIn();
}, function() {
    // not hovering
    $("#bio-text2").fadeOut();
});

$("#info-title2-2").hover(function() {
    // hovering
    $("#lecture-text2").fadeIn();
}, function() {
    // not hovering
    $("#lecture-text2").fadeOut();
});




$("#info-title1-3").hover(function() {
    // hovering
    $("#bio-text3").fadeIn();
}, function() {
    // not hovering
    $("#bio-text3").fadeOut();
});

$("#info-title2-3").hover(function() {
    // hovering
    $("#lecture-text3").fadeIn();
}, function() {
    // not hovering
    $("#lecture-text3").fadeOut();
});



$("#info-title1-4").hover(function() {
    // hovering
    $("#bio-text4").fadeIn();
}, function() {
    // not hovering
    $("#bio-text4").fadeOut();
});

$("#info-title2-4").hover(function() {
    // hovering
    $("#lecture-text4").fadeIn();
}, function() {
    // not hovering
    $("#lecture-text4").fadeOut();
});