var num = prompt("Enter a number");
var n = parseInt(num);
console.log(n);
function numcheck() {
	
	if(n>=10){
		if(n<=100){
			document.getElementById('10-100').innerHTML = n +" is between 10 and 100";
			return true;
		}
		else
			document.getElementById('10-100').innerHTML = n + " is not between 10 and 100";
		alert("Enter a number between 10 and 100");
		return false
	}else
			document.getElementById('10-100').innerHTML = n + " is not between 10 and 100";
			alert("Enter a number between 10 and 100");
			return false;
}
function fibonacci(){
	if(numcheck()){
	var n1 = 0;
	var n2 = 1;
	console.log(n1);
	console.log(n2);
	var str = n1 +" " +n2;
	while(n1+n2 < n){
		var n3 = n1 + n2;
		n1 = n2;
		n2 = n3;
		str += " "+ n3;
		console.log(n3);
	}
	document.getElementById('fib').innerHTML = str;
	}

}