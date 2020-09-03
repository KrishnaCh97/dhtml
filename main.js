let myButton = document.querySelector('button');
let myPara = document.querySelector('p');
function setUserName(){
	let myName = prompt('Please enter your name!');
	var patt = /[a-zA-z]/g;
	var name = myName.match(patt);
	localStorage.setItem('name',myName);
	myPara.textContent = 'You are awesome,' + name;
}
myButton.onclick = setUserName;