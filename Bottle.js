Status = "";
Bottle_image = "";

function preload(){
    Bottle_image = loadImage("Bottle.jpeg");
}
    
    function setup(){
    canvas = createCanvas (500,400);
    canvas.position(480,200);
    object_detector = ml5.objectDetector('cocossd',modellLoaded);
    document.getElementById("status3").innerHTML ="Status : Detecting Objects";
    }
    
    function modellLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_detector.detect(Bottle_image,gotresults);
    }
    
    function gotresults(error,results) {
        if(error) {
        console.log(error);
        }
        console.log(results);
        }

function draw() {
image(Bottle_image,0,0,500,400);
}