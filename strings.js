var tex = "Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. ... HTML describes the structure of a web page semantically and originally included cues for the appearance of the document. HTML elements are the building blocks of HTML pages."

var arr = tex.split(" ");
var fifth = arr[4];
var seventh = arr[6];
var tenth = arr[9];
document.getElementById('splits').innerHTML = fifth +" " +seventh +" "+ tenth;