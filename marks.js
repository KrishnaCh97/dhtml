var su1 = prompt('please enter sub1');
document.getElementById('sub1').innerHTML=su1;
var mar1 = prompt('please enter marks');
var ma1 = parseInt(mar1);
document.getElementById('mar1').innerHTML=ma1;

var su2 = prompt('please enter sub2');
document.getElementById('sub2').innerHTML=su2;
var mar2 = prompt('please enter marks');
var ma2 = parseInt(mar2);
document.getElementById('mar2').innerHTML=ma2;

var su3 = prompt('please enter sub3');
document.getElementById('sub3').innerHTML=su3;
var mar3 = prompt('please enter marks');
var ma3 = parseInt(mar3);
document.getElementById('mar3').innerHTML=ma3;

let myButton = document.querySelector('button');

function total(){
	var total = ma1+ma2+ma3;
	document.getElementById('total').innerHTML="Total:"+total;

var avg = (ma1+ma2+ma3)/3;

document.getElementById('avg').innerHTML="Average:"+avg;
}
myButton.onclick = total;
