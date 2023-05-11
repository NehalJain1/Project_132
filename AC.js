Status = "";
AC_image = "";

function preload(){
    AC_image = loadImage("Ac_image.jpeg");
}
    
    function setup(){
    canvas = createCanvas (500,400);
    canvas.position(480,200);
    object_detector = ml5.objectDetector('cocossd',modellLoaded);
    document.getElementById("status2").innerHTML ="Status : Detecting Objects";
    }
    
    function modellLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_detector.detect(AC_image,gotresults);
    }
    
function gotresults(error,results) {
    if(error) {
    console.log(error);
    }
    console.log(results);
    }

function draw() {
image(AC_image,0,0,500,400);
}