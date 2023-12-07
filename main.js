function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/LsqqP1cb1/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error,results)
{
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random()*255)+1;
        random_number_g = Math.floor(Math.random()*255)+1;
        random_number_b = Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML = "I can hear - "+results[0].label;
        document.getElementById("result_confidence").innerHTML = "Accuracy - "+(results[0].confidence*100).toFixed(2)+"%"

        img = document.getElementById("picture");
        if (results[0].label == "Chicken") {
            img.src = 'chicken.png';
        } else if (results[0].label == "Dog") {
            img.src = 'dog.png';
        } else if (results[0].label == "Snake") {
            img.src = 'snake.png';
        } else if (results[0].label == "Elephant") {
            img.src = 'elephant.png';
        } else {
            console.log("background!")
        }
    }
}