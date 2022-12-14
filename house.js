img = "";
status1 = "";

function preload()
{
    img = loadImage("house.jpg");
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects ";
}

function modelLoaded()
{
    console.log("model is loaded");
    status1 = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if (error)
    {
        console.log(error);
    }
    else 
    {
        console.log(results);
    }
}

function draw()
{
    image(img, 0, 0, 640, 420);
}