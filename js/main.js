var sectionShown = [false, false, false, false, false, false];

var marker0 = "sprites/marker0.png";
var marker1 = "sprites/marker1.png";
var marker2 = "sprites/marker2.png";
var marker3 = "sprites/marker3.png";

var hasItems = [];
hasItems["morph"] = false;
hasItems["bombs"] = false;
hasItems["varia"] = false;
hasItems["gravity"] = false;
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
hasItems["pbomb"] = false;

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
	var hasMorph = hasItems["morph"]; 
	var hasBombs = ( hasItems["bombs"] && hasItems["morph"]);
	var hasVaria = hasItems["varia"];
	var hasGravity = hasItems["gravity"];
	var hasGrapple = hasItems["grapple"];
	var hasSpring = ( hasItems["springball"] && hasItems["morph"]);
	var hasScrew = hasItems["screwattack"];
	var hasSpace = hasItems["spacejump"];
	var hasSpeed = hasItems["speedbooster"];
	var hasHijump = hasItems["hijump"];
	var hasCharge = hasItems["charge"];
	var hasIce = hasItems["ice"];
	var hasWave = hasItems["wave"];
	var hasSpazer = hasItems["spazer"];
	var hasPlasma = hasItems["plasma"];
	var hasPB = ( hasItems["pbomb"] && hasItems["morph"]);

	var hasBombPB = ( hasBombs || hasPB );
	var reachGB = ( hasBombPB || hasSpeed || hasScrew || hasPB);
	var reachBot = ( hasPB && ( hasGravity || ( hasHijump && hasIce && hasGrapple )));
	var reachUN = ( reachGB || ( hasPB ));
	var reachBBL = ( reachUN && hasVaria && ( hasHijump || hasBombs || hasSpeed ));
	var reachLN = ( reachUN && hasVaria && hasPB && ( hasHijump || hasGravity || hasBombs ));
	
	//Crateria + Wrecked Ship
	markers[0].reachable = hasMorph;
	markers[1].reachable = hasBombPB;
	markers[2].reachable = ( hasPB && (hasBombs || hasSpeed || hasSpace ));
	markers[3].reachable = ( hasBombPB || hasScrew );
	markers[4].reachable = ( hasBombPB );
	markers[5].reachable = ( hasBombPB || hasScrew || hasSpeed );
	markers[6].reachable = hasPB;
	markers[7].reachable = hasPB;
	markers[8].reachable = ( hasBombPB || hasScrew );
	markers[9].reachable = ( hasPB && hasSpeed );
	markers[10].reachable = hasPB;
	markers[11].reachable = hasPB;
	markers[12].reachable = hasPB;
	markers[13].reachable = hasPB;
	markers[14].reachable = hasPB;
	markers[15].reachable = hasPB;
	markers[16].reachable = ( hasPB && ( hasBombs || hasSpeed || hasGravity || hasSpace));
	markers[17].reachable = ( hasPB && hasSpeed );
	markers[18].reachable = hasPB;
	markers[19].reachable = hasPB;
	
	//Brinstar
	markers[20].reachable = ( hasBombPB || hasSpeed || ( hasScrew && hasMorph ));
	markers[21].reachable = reachGB;
	markers[22].reachable = ( reachGB && ( hasMorph || hasSpeed ));
	markers[23].reachable = hasBombPB;
	markers[24].reachable = hasPB;
	markers[25].reachable = hasPB;
	markers[26].reachable = hasPB;
	markers[27].reachable = reachGB;
	markers[28].reachable = ( reachGB && hasBombPB );
	markers[29].reachable = ( reachGB && hasBombPB );
	markers[30].reachable = ( reachGB && hasPB );
	markers[31].reachable = reachGB;
	markers[32].reachable = ( reachGB && hasMorph );
	markers[33].reachable = ( hasPB && hasSpeed );
	markers[34].reachable = ( reachGB && hasMorph );
	markers[35].reachable = hasPB;
	markers[36].reachable = true;
	markers[37].reachable = hasMorph;
	markers[38].reachable = true;
	markers[39].reachable = hasPB;
	markers[40].reachable = hasMorph;
	markers[41].reachable = hasMorph;
	markers[42].reachable = hasPB;
	markers[43].reachable = hasPB;
	markers[44].reachable = ( hasPB && ( hasSpace || hasGrapple ));
	markers[45].reachable = reachGB;
	markers[46].reachable = reachGB;
	markers[47].reachable = ( reachGB && ( hasPB || ( hasSpring && hasBombs )));
	markers[48].reachable = reachGB;
	
	//Maridia
	markers[49].reachable = ( hasPB && hasGravity && hasSpeed );
	markers[50].reachable = ( hasPB && ( hasGravity || ( hasHijump && hasIce)));
	markers[51].reachable = ( hasPB && ( hasGravity || ( hasHijump && hasIce)));
	markers[52].reachable = reachBot;
	markers[53].reachable = reachBot;
	markers[54].reachable = reachBot;
	markers[55].reachable = reachBot;
	markers[56].reachable = reachBot;
	markers[57].reachable = reachBot;
	markers[58].reachable = reachBot;
	markers[59].reachable = ( reachBot || ( hasGravity && hasSpace ));
	markers[60].reachable = reachBot;
	markers[61].reachable = reachBot;
	
	// Upper Norfair
	markers[62].reachable = reachUN;
	markers[63].reachable = ( reachUN && hasPB );
	markers[64].reachable = reachUN;
	markers[65].reachable = ( reachUN && hasBombPB );
	markers[66].reachable = ( reachUN && hasBombPB );
	markers[67].reachable = ( reachUN && hasVaria && ( hasBombs || hasHijump || hasSpace ));
	markers[68].reachable = reachBBL;
	markers[69].reachable = reachBBL;
	markers[70].reachable = ( reachBBL && ( hasSpace || hasIce || hasHijump || hasBombs));
	markers[71].reachable = markers[70].reachable;
	markers[72].reachable = reachBBL;
	markers[73].reachable = reachBBL;
	markers[74].reachable = reachBBL;
	markers[75].reachable = reachBBL;
	markers[76].reachable = reachBBL;
	markers[77].reachable = reachBBL;
	markers[78].reachable = reachBBL;
	markers[79].reachable = reachBBL;
	markers[80].reachable = reachBBL;
	
	//Lower Nofair
	markers[81].reachable = ( reachLN && hasSpace );
	markers[82].reachable = reachLN;
	markers[83].reachable = reachLN;
	markers[84].reachable = reachLN;
	markers[85].reachable = reachLN;
	markers[86].reachable = reachLN;
	markers[87].reachable = reachLN;
	markers[88].reachable = reachLN;
	markers[89].reachable = reachLN;
}

function drawMarkers(){
	checkLogic();
	
	for (i = 0; i < markers.length; i++){
		var id = document.getElementById(markers[i].id);

		id.style.left = markers[i].x + 'px';
		id.style.top = markers[i].y + 'px';
		
		if (markers[i].reachable){
			id.style.outline = "#cce541 solid 0px";
		} else {
			id.style.outline = "#FFFFFF solid 2px";
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