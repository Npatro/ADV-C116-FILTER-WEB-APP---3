noseX=0;
noseY=0;
function preload (){
 mustache_filter=loadImage("https://i.postimg.cc/3W5t5ZTd/Beard-and-mustache-clipart-clip-art-library-removebg-preview.png");
}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function gotPoses(results){
    if(results.length > 0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;


        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function draw (){
    image(video, 0, 0, 300, 300);
    image(mustache_filter, noseX - 30, noseY - 15, 58, 55);
}

function take_snapshot (){
    save('myFilterImage.png');
}

