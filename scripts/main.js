let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'https://elyobsemaj.github.io/test_site/images/centurion.jpg') {
      myImage.setAttribute ('src','https://elyobsemaj.github.io/test_site/images/centurion2.jpg');
    } else {
      myImage.setAttribute ('src','https://elyobsemaj.github.io/test_site/images/centurion.jpg');
    }
}


let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'AMEX is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'AMEX is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'AMEX is cool, ' + myName;
  }
}
