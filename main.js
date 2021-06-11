function setup()
{
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(550,470);
    canvas.position(560,100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is Initialised ');
}

function gotPoses(results)
{
    if(results>0){
        console.log(results);
    }
}

function draw()
{
    background('#5D5C5C');
}