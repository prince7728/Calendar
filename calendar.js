
var dt = new Date();

dt.setDate(dt.getDate());
var day = dt.getDay();

var today = new Date().getDate();

var endDate = new Date(
	dt.getFullYear(),
	dt.getMonth() + 1,
	0
).getDate();

var prevDate = new Date(
	dt.getFullYear(),
	dt.getMonth(),
	0
).getDate();

var months = [
	"January", 
	"February", 
	"March", 
	"April", 
	"May", 
	"June", 
	"July", 
	"August", 
	"September", 
	"October", 
	"November", 
	"December"
]

document.getElementById("date_str").innerHTML = dt.toDateString();
document.getElementById("month").innerHTML = months[dt.getMonth()];

var cells = "";

for(var j = day;j > 0;j--){
	cells += "<div class='prev_date'>" + (prevDate - j) + "</div>";
}

for(var i = 1;i <= endDate;i++){
	if(i == today && dt.getMonth() == today.getMonth()){
		cells+= "<div class='today'>" + i + "</div>";
	}
	else{
		cells+= "<div>" + i + "</div>";	
	}
}

document.getElementsByClassName("days")[0].innerHTML = cells;


function RenderDate(){

dt.setDate(dt.getDate());
var day = dt.getDay();

let today = dt.getDate();

var endDate = new Date(
	dt.getFullYear(),
	dt.getMonth() + 1,
	0
).getDate();

var prevDate = new Date(
	dt.getFullYear(),
	dt.getMonth(),
	0
).getDate();

var months = [
	"January", 
	"February", 
	"March", 
	"April", 
	"May", 
	"June", 
	"July", 
	"August", 
	"September", 
	"October", 
	"November", 
	"December"
]

document.getElementById("date_str").innerHTML = dt.toDateString();
document.getElementById("month").innerHTML = months[dt.getMonth()];

var cells = "";

for(var j = day;j > 0;j--){
	cells += "<div class='prev_date'>" + (prevDate - j) + "</div>";
}

for(var i = 1;i <= endDate;i++){
	if(i == today ){
		cells+= "<div class='today'>" + i + "</div>";
	}
	else{
		cells+= "<div>" + i + "</div>";	
	}
}

document.getElementsByClassName("days")[0].innerHTML = cells;
}

function moveDate(move){
	if(move == 'prev'){
		dt.setMonth(dt.getMonth() - 1);
		RenderDate();
	}
	else{
		dt.setMonth(dt.getMonth() + 1);
		RenderDate();
	}
}