Webcam.set({
height:340,
width:370,
dest_height:340,
dest_width:370,
image_format:'png',
png_quality:100
});
Camera=document.getElementById("webcam-view");
Webcam.attach('#webcam-view');

function snapshot(){
Webcam.snap(function (data_uri){
document.getElementById("clicked-view").innerHTML="<img id='data' src='"+ data_uri +"'>";
});
}

console.log('ml5_version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/SZxNc4ZqF/model.json',modelLoaded);

function modelLoaded(){
console.log('modelLoaded');
}

function check(){
img=document.getElementById("data");
classifier.classify(img,gotResult);
}
function gotResult(error,results){
if(error){
console.log('error');
}
else{
console.log(results);
document.getElementById("object_nam").innerHTML=results[0].label;
document.getElementById("accuracy_nam").innerHTML=results[0].confidence.toFixed(3);
}
}