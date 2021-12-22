noseX = 0;
noseY = 0;
leftwristX = 0;
rightwristX = 0;
difference = 0;

function preload()
{

}

function setup()
{
video = createCapture(VIDEO);
video.size(500,500);
canvas = createCanvas(500,500);
canvas.position(550,150);
posenet = ml5.poseNet(video,modelloaded);
posenet.on('pose',gotposes);
}

function draw()
{
background("cyan");
fill("black");
stroke("white");
text(noseX,noseY,difference);
document.getElementById("square_size").innerHTML = "Width and hieght of the square is: " + difference + " px";
}

function modelloaded()
{
console.log("modelloaded");
}

function gotposes(results)
{
if(results.length>0)
{
console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
console.log("noseX = " + noseX);
console.log("noseY = " + noseY);
leftwristX = results[0].pose.leftWrist.x;
rightwristX = results[0].pose.rightWrist.x;
difference = floor(leftwristX-rightwristX);
console.log("Difference = " + difference)
}
}