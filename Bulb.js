Status = "";
Bulb_image = "";

function preload(){
    Bulb_image = loadImage("Bulb.jpeg");
}
    
    function setup(){
    canvas = createCanvas (500,500);
    canvas.position(480,200);
    object_detector = ml5.objectDetector('cocossd',modellLoaded);
    document.getElementById("status5").innerHTML ="Status : Detecting Objects";
    }
    
    function modellLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_detector.detect(Bulb_image,gotresults);
    }
    
    function gotresults(error,results) {
        if(error) {
        console.log(error);
        }
        console.log(results);
        }

function draw() {
image(Bulb_image,0,0,500,500);
}