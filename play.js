
let soundObj = document.createElement("audio");

function playSound(e){
    if(e.code == "KeyA")
    {
        console.log("Key 'A' is pressed");
        soundObj = document.getElementById("aSound");
    }
    else if (e.code == "KeyS"){
        console.log("Key 'S' is pressed");
        soundObj = document.getElementById("sSound");
    }else if (e.code == "KeyD"){
        console.log("Key 'D' is pressed");
        soundObj = document.getElementById("dSound");
    }else if (e.code == "KeyF"){
        console.log("Key 'F' is pressed");
        soundObj = document.getElementById("fSound");

    }else if (e.code == "KeyG"){
        console.log("Key 'G' is pressed");
        soundObj = document.getElementById("gSound");
    }else if (e.code == "KeyH"){
        console.log("Key 'H' is pressed");
        soundObj = document.getElementById("hSound");
    }else if (e.code == "KeyJ"){
        console.log("Key 'J' is pressed");
        soundObj = document.getElementById("jSound");
    }else if(e.code == "KeyE"){
        console.log("Key 'E' is pressed");
        soundObj = document.getElementById("eSound");
    }else if(e.code == "KeyT"){
        console.log("Key 'T' is pressed");
        soundObj = document.getElementById("tSound");
    }else if(e.code == "KeyU"){
        console.log("Key 'U' is pressed");
        soundObj = document.getElementById("uSound");
    }else if(e.code == "KeyW"){
        console.log("Key 'W' is pressed");
        soundObj = document.getElementById("wSound");
    }else if(e.code == "KeyY"){
        console.log("Key 'Y' is pressed");
        soundObj = document.getElementById("ySound");
    }
    soundObj.load();
    soundObj.play();
}

document.addEventListener("keydown",function (e){
    playSound(e);
    console.log(e.key);
    let tmpkey = document.getElementById(e.key);
    tmpkey.style.background = "gray";
});

document.addEventListener("keyup", function (e){
    let element = document.getElementById(e.key);
    if(element.parentElement.className == "white-keys"){
        element.style.background = "white";
    }else{
        element.style.background = "black";
    }
});
