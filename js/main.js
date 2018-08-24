var sectionShown = [false, false, false, false, false, false];

var marker0 = "sprites/marker0.png";
var marker1 = "sprites/marker1.png";
var marker2 = "sprites/marker2.png";
var marker3 = "sprites/marker3.png";

var hasItems = [];
hasItems["morph"] = false;
hasItems["bombs"] = false;
hasItems["varia"] = false;
hasItems["grabity"] = false;
hasItems["grapple"] = false;
hasItems["springball"] = false;
hasItems["screwattack"] = false;
hasItems["spacejump"] = false;
hasItems["speedbooster"] = false;
hasItems["hijump"] = false;
hasItems["charge"] = false;
hasItems["ice"] = false;
hasItems["wave"] = false;
hasItems["spazer"] = false;
hasItems["plasma"] = false;

var markers = [];

function Location(id, x, y, name){
	this.id = id;
	this.x = x;
	this.y = y;
	this.reachable = false;
	this.markerType = 1;
	this.displayName = name;
}

function itemToggle(id){
	var x = document.getElementById(id);
	if (!hasItems[id]){
		x.style.opacity = 1.0;
	} else {
		x.style.opacity = 0.5;
	}
	hasItems[id] = !hasItems[id];
	drawMarkers();
}

function checkLogic(){
	markers[0].reachable = hasItems["morph"];
	markers[1].reachable = (hasItems["bombs"] && hasItems["morph"]);
	markers[2].reachable = ((hasItems["bombs"] && hasItems["morph"]) || hasItems["speedbooster"] || hasItems["screwattack"]);
	markers[3].reachable = ((hasItems["bombs"] && hasItems["morph"]) || hasItems["screwattack"]);
	
}

function drawMarkers(){
	checkLogic();
	
	for (i = 0; i < markers.length; i++){
		var id = document.getElementById(markers[i].id);

		id.style.left = markers[i].x + 'px';
		id.style.top = markers[i].y + 'px';
		
		if (markers[i].reachable){
			id.style.outline = "#ffffff solid 0px";
		} else {
			id.style.outline = "#cce541 solid 3px";
		}
		switch(markers[i].markerType){
			case 1:
				id.src = marker1;
				break;
			case 2:
				id.src = marker2;
				break;
			case 3:
				id.src = marker3;
				break;
		}
	}
}

function markerToggle(x){
	if (markers[x].markerType < 3){
		markers[x].markerType++;
	} else if (markers[x].markerType == 3){
		markers[x].markerType = 1;
	}
	var id = document.getElementById(markers[x].id);
	switch(markers[x].markerType){
		case 1:
			id.src = marker1;
			break;
		case 2:
			id.src = marker2;
			break;
		case 3:
			id.src = marker3;
			break;
	}
}

function hideAll() {

	for (i = 0; i < 6; i++){
		sectionShown[i] = false;		
	}
	fullmap.style.display = "none";
	crateriamap.style.display = "none";
	brinstarmap.style.display = "none";
	maridiamap.style.display = "none";
	unorfairmap.style.display = "none";
	lnorfairmap.style.display = "none";
	
	drawMarkers();
}

function showSection(m) {
	if (!sectionShown[m]){
		hideAll();
		sectionShown[m] = true;
		switch(m){
			case 0: 
				fullmap.style.display = "block";
				break;
			case 1:
				crateriamap.style.display = "block";
				break;
			case 2:
				brinstarmap.style.display = "block";
				break;
			case 3:
				maridiamap.style.display = "block";
				break;
			case 4:
				unorfairmap.style.display = "block";
				break;
			case 5:
				lnorfairmap.style.display = "block";
				break;
		}
	}
}

function changeBG(){
	document.body.style.backgroundColor = document.getElementById("bgcolor").value;
}

function showTooltip(x){
	var id = document.getElementById("tt");

	id.style.top = (markers[x].y + 20) + "px";
	id.style.left = (markers[x].x + 20) + "px";
	id.style.display = "block";
	id.innerHTML = markers[x].displayName;
}

function hideTooltip(){
	document.getElementById("tt").style.display = "none";
}