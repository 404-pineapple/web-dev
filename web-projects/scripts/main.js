// storing reference to the img in a variable name myImage

const myImage = document.querySelector("img");
// adding a event listner when ever the user click that image this code will execute

myImage.addEventListener("click",() =>{
    const mySrc = myImage.getAttribute("src");
    if(mySrc == "images/Tacca Chantrieri.jpg"){
        myImage.setAttribute("src","../images/orchid.jpg");
    }
    else{
        myImage.setAttribute("src","images/Tacca Chantrieri.jpg");
    }
});


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");


function setUserName(){
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name",myName);
    myHeading.textContent = `You are cool, ${myName}`;
}

if(!localStorage.getItem("name")){
    setUserName();
}
else{
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `you are cool, ${storedName}`;
}

myButton.addEventListener("click",() =>{
    setUserName();
});