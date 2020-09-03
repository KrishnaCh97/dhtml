
	var num = prompt("Enter a number");
var n = parseInt(num);
function numcheck() {

document.getElementById('num').innerHTML = n ;
console.log(n);
var message = document.getElementById('10-100');
try{
	if(n < 10) throw "Less than 10";
	if(n > 100) throw "Greater than 100";
}
catch(err){
	message.innerHTML = "Number is "+ err;
}
finally{
	num = "";
}
}
function fibonacci(){
	
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
$( "button" ).dblclick(function() {
  $( "#book" ).toggle();
  });
$(document).ready(function(){
  $("#div1").click(function(){
    $.get("get.txt", function(data, status){
      alert("Data: " + data + "\nStatus: " + status);
    });
  });
});
$(document).ready(function(){
  $("#div2").click(function(){
    $.post("post.txt",{
    name: "Donald Duck",
    city: "Duckburg"
  }, function(data, status){
      alert("Data: " + data + "\nStatus: " + status);
    });
  });
});