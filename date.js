var d = new Date();
function dates() {
document.getElementById("date").innerHTML ="Today's date is :"+ d.getDate()+"/"+d.getMonth()+"/"+d.getFullYear();
}
function times(){
	document.getElementById("time").innerHTML ="Now, the time is :"+ d.getHours()+d.getMinutes()+d.getSeconds();
}