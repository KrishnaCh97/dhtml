let myButton = document.querySelector('button');
let myPara = document.querySelector('p');
function setUserName(){
	let myName = prompt('Please enter your name!');
	localStorage.setItem('name',myName);
	myPara.textContent = 'You are awesome,' + myName;
}
myButton.onclick = setUserName();