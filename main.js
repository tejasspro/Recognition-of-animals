function start(){
    navigator.mediaDevices.getUserMedia({audio: true});
    ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/Hk0MjkeCK/model.json", modelReady);
}

function modelReady() {
    classifier.classify(gotResults);    
}

function gotResults(error, results) {
   
    if (error) {
        console.log(error);
    }
    else{
        console.log(results);
        red = Math.floor(Math.random()*255) + 1;
        green = Math.floor(Math.random()*255) + 1;
        blue = Math.floor(Math.random()*255) + 1; 
        document.getElementById("dv").innerHTML = 'Detected - '+ results.length;
        document.getElementById("result_confidence").innerHTML = 'Detected Voice Is Of - ' + results[0].label;
        document.getElementById("dv").style.color = "rgb("+red+","+green+","+blue+")";
        document.getElementById("ds").style.color = "rgb("+red+","+green+","+blue+")";
        img = document.getElementById("kmi")
        if(results[0].label == "Barking"){
            img.src = "dog.gif"
        }
        else if(results[0].label == "Roaring"){
            img.src = "lion.gif"
        }
        else if(results[0].label == "Mewing"){
            img.src = "cat.gif"
        }
        else if(results[0].label == "Mooing"){
            img.src = "cow.gif"
        }
        else {
            img.src = "listen.gif";
        }
    }
}