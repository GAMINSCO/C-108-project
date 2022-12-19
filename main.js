function start() {
    navigator.mediaDevices.getUserMedia( {audio:true} );
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/85i0xGWRy/model.json", modelReady);
}

function modelReady() {
    classifier.classify(gotResults);
}

dog = 0;
cat = 0;
cow = 0;
lion = 0;

function gotResults(error, result) {



    if (error) {
        console.error(error)
    } else {
        console.log(result)


        rgb_1 = Math.floor(Math.random() * 255) + 1;
        rgb_2 = Math.floor(Math.random() * 255) + 1;
        rgb_3 = Math.floor(Math.random() * 255) + 1;

        document.getElementById("label").style.color = "rgb(" + rgb_1 + "," + rgb_2 + "," + rgb_3 + ")"
        document.getElementById("label").innerHTML = "Sound - " + result[0].label + " "



        img = document.getElementById("img")

        if (result[0].label == "dog") {
            dog = dog + 1
            console.log("dog:", dog)
            img.src = "bark.gif"
            document.getElementById("dog").innerHTML = "<span id='dog'> Dog - " + dog +" </span>"
        } else if (result[0].label == "cat") {
            cat = cat + 1
            console.log("cat:", cat)
            img.src = "meow.gif"
            document.getElementById("cat").innerHTML = "<span id='cat'> Cat - " + cat +" </span>"
        } else if (result[0].label == "cow") {
            cow = cow + 1
            console.log("cow:", cow)
            img.src = "moo.gif"
            document.getElementById("cow").innerHTML = "<span id='cow'> Cow - " + cow +" </span>"
        } else if (result[0].label == "lion") {
            lion = lion + 1
            console.log("lion:", lion)
            img.src = "roar.gif"
            document.getElementById("lion").innerHTML = "<span id='lion'> Lion - " + lion +" </span>"
        } else {
            console.log("Background Noise")
            img.src = "listen.gif"
        }
    }
}