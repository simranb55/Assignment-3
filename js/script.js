console.log("lets see if this remains in your code")


//title hovering

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


//changing all the background colours when the speaker name is selected

$(document).ready(function() {
    // Speaker name and the background colour
    var speakerColors = {
        "maria-carolina-cambre": "#ffb9c1",
        "isabel-machado": "#dcbeeb", 
        "daniel-wildberger": "#9edaed", 
        "shima-rashnoodi": "#fec6a2" 
    };

    // For some reason I found that using a var make the background colour elements work
    var defaultBackgroundColor = "#fee7d2";  


    $(".speaker-name").click(function() {
        var target = $(this).data("target");
        var color = speakerColors[target] || "#ffffff";
        
        // Toggle the active class and background color
        //https://www.sitepoint.com/jquery-toggle-live-bind/ toggling tutorial


        if ($(this).hasClass("active-speaker")) {
            $("body").css("background-color", defaultBackgroundColor); 
            $(this).removeClass("active-speaker");
            $("#titles").toggle();  
        } else {
            $(".speaker-name").removeClass("active-speaker");
            $(this).addClass("active-speaker");
            $("body").css("background-color", color);
            $("#titles").hide();
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



//makes the speaker names fade out when hovering

$(document).ready(function() {
    $(".speaker-name").hover(

        function() {
            $(".speaker-name").not(this).fadeTo(300, 0);
        },
        function() {
            $(".speaker-name").fadeTo(300, 1);

        }
    );
});






//the background colour when hovering over the speaker names

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



//the mouse reveal mask effect
// a similar version of the tutorial https://www.youtube.com/watch?v=12ElqBxCZPI


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
    
 
        // based on feedback, this is the thing on the screen which would make users move their mouse towards it
        //https://api.jquery.com/appendTo/ appending elements 
        let box = $("<div>")
        .addClass("center-box scale")
        .css({
        position: "absolute",
        width: "50px",
        height: "50px",
        backgroundColor: "#000000",
        top: "300px",
        left: "50%",
        zIndex: 3,
        pointerEvents: "auto"
    })
        .appendTo(event);


        //this makes the object fade out
        box.on("mouseenter", function () {
            $(this).fadeTo(1000, 0, function () {
                $(this).remove();
            });
        });
        
        
        
    

        event.on("mousemove", function (e) {
            let rect = canvas[0].getBoundingClientRect();
            let x = e.clientX - rect.left,
                y = e.clientY - rect.top;
    
            //mouse size
            ctx.globalCompositeOperation = "destination-out";
            ctx.beginPath();
            ctx.arc(x, y, 100, 0, Math.PI * 2);
            ctx.fill();



        
        });
    }
    
});




