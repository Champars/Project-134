status = "";
o1 = [];

function preload() {

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(800, 400);
}

function draw() {
    image(video, 0, 0, 300, 300);
}

function start() {
    ccsd = ml5.objectDetector("cocossd", modelloaded);
    status = true;
    document.getElementById("status").innerHTML = "Detecting Objects";
}

function modelloaded() {
    console.log("model is loaded");
}