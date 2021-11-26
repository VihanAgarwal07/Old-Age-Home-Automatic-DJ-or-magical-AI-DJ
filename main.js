leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
leftWristScore=0;
rightWristScore=0;

var music1="";
var music2="";
function preload(){
    music1=loadSound("music.mp3");
    music2=loadSound("music2.mp3")
}
function setup(){
    canvas=createCanvas(700,500);
    canvas.center();
    video=createCapture(VIDEO);
     video.hide();

     poseNet=ml5.poseNet(video,modelLoaded);
     poseNet.on("pose",gotPoses);
}
function modelLoaded(){
    console.log("Model is Ready");
}
function gotPoses(event){
console.log(event);
if(event.length>0){
    leftWristX=event[0].pose.leftWrist.x;
    leftWristY=event[0].pose.leftWrist.y;
    
    rightWristX=event[0].pose.rightWrist.x;
    rightWristY=event[0].pose.rightWrist.y;

    rightWristScore=event[0].pose.keypoints[10].score;
    leftWristScore=event[0].pose.keypoints[9].score;
    
    
}
}
function draw(){
    image(video,0,0,700,500);
    fill("#ff0000");
    stroke("#ff0000")
    if(rightWristScore>0.2){
       
        circle(rightWristX,rightWristY,40);
        music2.stop();
        if(music1.isPlaying()==false){
            music1.play();
            
        }
    
        
    }
    if(rightWristScore>0.2){
       
        circle(leftWristX,leftWristY,40);
        music1.stop();
        if(music2.isPlaying()==false){
            music2.play();
        }
    }
    }
