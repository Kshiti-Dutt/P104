
Webcam.set({
    width:300,
    height:200,
    image_format:'png',
    png_quality:90
});

cam = document.getElementById("camera");

Webcam.attach('#camera');


function snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version', ml5.version);


classifier = ml5.imageClassifier("https://storage.googleapis.com/tm-model/kkJRGlo3T/model.json",model);


function model() {
    console.log('Model Loaded!');
}