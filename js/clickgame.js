var table = document.getElementById('clicktable');
var startButton = document.getElementById('start-button');
var counter = 0;
var doneClicking = [];


function clickPrez(President){

	var clicked = President.target.id;
	var clickedLength = doneClicking.length;

	if(clickedLength == 0){		
		doneClicking.push(clicked);			
		document.getElementById("clickStatus").innerHTML = "Done";	
		counter++;
	}

	else if(clickedLength > 0){
		for(var i=0; i<=clickedLength; i++){
			if(doneClicking[i] == clicked){
				alert('You can click only once per picture');
				return false;
			}
		}
	}
		
		doneClicking.push(clicked);			
		document.getElementById("clickStatus").innerHTML = "Done";			
		counter++;			
}

startButton.addEventListener('click', startGame);

function startGame(){
	table.addEventListener('click', clickPrez);
	startButton.className = "poof";

	setTimeout(function(){
		table.removeEventListener('click', clickPrez);			
	}, 200000);

	totalClicksAlert();
}

function totalClicksAlert(){
	setTimeout(function(){
		alert('You clicked on ' + counter + " pictures.");
	}, 20000);
}