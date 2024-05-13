const passBox = document.getElementById("password");
const passLength = 12;
const copyIcon = document.getElementById("copyIcon");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "~!@#$%^&*()_+{}?<>.,[]";

const allChars = upperCase + lowerCase + number + symbol;

function createNewPassword(){
    let newPassword = "";

    newPassword += upperCase[Math.floor(Math.random() * upperCase.length)];
    newPassword += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    newPassword += number[Math.floor(Math.random() * number.length)];
    newPassword += symbol[Math.floor(Math.random() * symbol.length)];

    while(passLength > newPassword.length){
        newPassword += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passBox.value = newPassword;
    
    copyIcon.style.display = "block";
    document.querySelector("h1").innerHTML = "Click Icon to Copy Password";
}

function copyPassword(){
    passBox.select();
    navigator.clipboard.writeText(passBox.value)
    .then(() =>{
        document.querySelector("h1").innerHTML = "Password Copied!";
    })
    .catch(error =>{
        document.querySelector("h1").innerHTML = "Error Occured! Try again.";
    });
}

