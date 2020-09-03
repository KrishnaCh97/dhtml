function validateForm() {
  var x = document.forms["myForm"]["name"].value;
  if (x == "") {
    
    document.getElementById('namealert').innerHTML = "Enter a name";
    return false;
  }
  var p = document.forms["myForm"]["phone"].value;
  var n1 = parseInt(p);
  if(isNaN(n1)){
  	document.getElementById('phonealert').innerHTML = "Enter correct number";
  	return false;
  }
  if((!document.getElementById('SubInterest1').checked)&&(!document.getElementById('SubInterest2').checked)&&
  	(!document.getElementById('SubInterest2').checked)){
  	document.getElementById('checkalert').innerHTML = "Please select atleast one";
  return false;
  }
}