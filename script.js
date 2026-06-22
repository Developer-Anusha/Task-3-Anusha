// Dark Mode Toggle

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function(){

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.textContent = "☀ Light Mode";
    }
    else{
        themeBtn.textContent = "🌙 Dark Mode";
    }
});

// Welcome Message

function showMessage(){

    let name = document.getElementById("nameInput").value;

    if(name === ""){
        document.getElementById("message").innerHTML =
        "Please enter your name.";
    }
    else{
        document.getElementById("message").innerHTML =
        "Welcome, " + name + "!";
    }
}

// Counter App

let count = 0;

function increase(){
    count++;
    document.getElementById("count").innerHTML = count;
}

function decrease(){
    count--;
    document.getElementById("count").innerHTML = count;
}

function resetCounter(){
    count = 0;
    document.getElementById("count").innerHTML = count;
}