function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/rHndn-byH/model.json',modelLoaded);
}

function draw(){
image(video,0,0,300,300,);
classifier.classify(video,gotResult);
}

function modelLoaded(){
    console.log("modelLoaded");
}
function gotResult(error,result){
    if(error){
        console.log(error)
    }
    else{
        console.log(result)
        document.getElementById("result_object").innerHTML=result[0].label
        document.getElementById("result_accuracy").innerHTML=result[0].confidence.toFixed(2)
    }


}