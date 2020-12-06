function playSound(e, obj){
    if(e.code == "KeyA")
    {
        console.log("Key 'A' is pressed");
        obj = document.getElementById("aSound");
    }
    else if (e.code == "KeyS"){
        console.log("Key 'S' is pressed");
        obj =    document.getElementById("sSound");
    }else if (e.code == "KeyD"){
        console.log("Key 'D' is pressed");
        obj = document.getElementById("dSound");
    }else if (e.code == "KeyF"){
        console.log("Key 'F' is pressed");
        obj = document.getElementById("fSound");

    }else if (e.code == "KeyG"){
        console.log("Key 'G' is pressed");
        obj = document.getElementById("gSound");
    }else if (e.code == "KeyH"){
        console.log("Key 'H' is pressed");
        obj = document.getElementById("hSound");
    }else if (e.code == "KeyJ"){
        console.log("Key 'J' is pressed");
        obj = document.getElementById("jSound");
    }else if(e.code == "KeyE"){
        console.log("Key 'E' is pressed");
        obj = document.getElementById("eSound");
    }else if(e.code == "KeyT"){
        console.log("Key 'T' is pressed");
        obj = document.getElementById("tSound");
    }else if(e.code == "KeyU"){
        console.log("Key 'U' is pressed");
        obj = document.getElementById("uSound");
    }else if(e.code == "KeyW"){
        console.log("Key 'W' is pressed");
        obj = document.getElementById("wSound");
    }else if(e.code == "KeyY"){
        console.log("Key 'Y' is pressed");
        obj = document.getElementById("ySound");
    }
    obj.play();
}

document.addEventListener("keydown",function (e){
    let soundObj = document.createElement("audio");
    playSound(e, soundObj);
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
