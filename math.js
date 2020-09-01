var nu1 = prompt('Enter a number');
var n1 = parseInt(nu1);
document.getElementById('num1').innerHTML=n1;


function power(){
 document.getElementById('res').innerHTML = Math.pow(n1,2);
}
function sqrt(){
	document.getElementById('res').innerHTML = Math.sqrt(n1);
}
function absl(){
	document.getElementById('res').innerHTML = Math.abs(n1);
}
function rand(){
	var random = Math.random()
	document.getElementById('next').innerHTML = "Random number:"+ random;
	document.getElementById('ceil').innerHTML = "It's ceil:"+ Math.ceil(random);
	document.getElementById('floor').innerHTML = "It's floor:"+ Math.floor(random);
	document.getElementById('round').innerHTML = "It's round:"+ Math.round(random);
	document.getElementById('trig').innerHTML = "Sine is:" + Math.sin(random);
}
