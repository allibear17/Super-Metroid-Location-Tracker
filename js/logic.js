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
	var hasFourE = hasItems["etanks"];
	var hasSupers = hasItems["supers"];
	
	var hasBombPB = hasBombs || hasPB;
	var reachGB = ( hasBombPB || hasSpeed || hasScrew || ( hasPB && hasSupers ));
	var reachWS = ( hasPB && hasSupers && ( hasSpeed || hasSpace || hasGrapple ));
	var reachBot = hasPB && hasSupers && hasGravity;
	var reachUN = ( reachGB || ( hasPB && hasSupers ));
	var reachBBL = ( reachUN && hasVaria && hasSupers && ( hasHijump || hasSpeed || hasSpace ));
	var reachLN = ( reachBBL && hasPB && hasGravity && hasSpace );
	
	//Crateria + Wrecked Ship
	markers[0].reachable = hasBombPB;
	markers[1].reachable = hasBombPB;
	markers[2].reachable = ( hasPB && ( hasSpeed || hasSpace ));
	markers[3].reachable = (( hasSpeed || hasSpace ) && ( hasBombPB || hasScrew ));
	markers[4].reachable = (( hasSpeed || hasSpace ) && ( hasBombPB));
	markers[5].reachable = hasBombPB || hasScrew || hasSpeed;
	markers[6].reachable = hasPB && hasSupers;
	markers[7].reachable = hasPB && hasSupers;
	markers[8].reachable = hasBombPB || hasScrew;
	markers[9].reachable = hasPB && hasSpeed;
	markers[10].reachable = reachWS;
	markers[11].reachable = reachWS;
	markers[12].reachable = reachWS;
	markers[13].reachable = reachWS;
	markers[14].reachable = reachWS;
	markers[15].reachable = reachWS;
	markers[16].reachable = ( reachWS && ( hasGrapple || hasSpace ));
	markers[17].reachable = reachWS && hasSpeed;
	markers[18].reachable = reachWS;
	markers[19].reachable = reachWS;
	
	//Brinstar
	markers[20].reachable = ( reachGB && ( hasMorph || hasSpeed ));
	markers[21].reachable = reachGB && hasBombPB;
	markers[22].reachable = ( reachGB && ( hasMorph || hasSpeed ));
	markers[23].reachable = ( reachGB && hasBombPB && ( hasMorph || hasSpeed ));;
	markers[24].reachable = reachGB && hasPB;
	markers[25].reachable = reachGB && hasPB && hasSupers;
	markers[26].reachable = reachGB && hasPB;
	markers[27].reachable = reachGB;
	markers[28].reachable = reachGB && hasPB && hasSupers;
	markers[29].reachable = reachGB && hasMorph;
	markers[30].reachable = reachGB && hasPB && hasWave;
	markers[31].reachable = reachGB;
	markers[32].reachable = reachGB && hasMorph;
	markers[33].reachable = reachGB && hasPB && hasSpeed;
	markers[34].reachable = reachGB && hasMorph;
	markers[35].reachable = hasPB;
	markers[36].reachable = true;
	markers[37].reachable = hasMorph;
	markers[38].reachable = hasIce || hasHijump || hasSpace || hasSpeed;
	markers[39].reachable = ( hasPB && ( hasSpeed || ( hasSpace && hasScrew )));
	markers[40].reachable = hasMorph;
	markers[41].reachable = reachGB && hasSupers;
	markers[42].reachable = hasSupers&& hasPB;
	markers[43].reachable = hasPB && hasSupers;
	markers[44].reachable = ( reachGB && ( hasSpace || hasGrapple ));
	markers[45].reachable = reachGB;
	markers[46].reachable = reachGB && hasSupers;
	markers[47].reachable = reachGB && hasSupers && hasPB;
	markers[48].reachable = reachGB && hasSupers;
	
	//Maridia
	markers[49].reachable = reachBot && hasSpeed;
	markers[50].reachable = reachBot;
	markers[51].reachable = reachBot;
	markers[52].reachable = reachBot;
	markers[53].reachable = reachBot;
	markers[54].reachable = reachBot && hasSpeed;
	markers[55].reachable = reachBot;
	markers[56].reachable = reachBot;
	markers[57].reachable = reachBot;
	markers[58].reachable = reachBot;
	markers[59].reachable = reachBot;
	markers[60].reachable = reachBot;
	markers[61].reachable = reachBot && hasSpring;
	
	// Upper Norfair
	markers[62].reachable = reachUN && hasSpeed && hasMorph;
	markers[63].reachable = reachUN && hasSpeed && hasPB;
	markers[64].reachable = reachUN;
	markers[65].reachable = reachUN && hasBombPB;
	markers[66].reachable = reachUN && hasBombPB;
	markers[67].reachable = reachBBL;
	markers[68].reachable = ( reachBBL && ( hasSpace || hasGrapple ));
	markers[69].reachable = reachBBL;
	markers[70].reachable = ( reachBBL && ( hasSpace || hasGrapple ));
	markers[71].reachable = ( reachBBL && ( hasSpace || hasGrapple ));
	markers[72].reachable = reachBBL;
	markers[73].reachable = reachBBL;
	markers[74].reachable = reachBBL;
	markers[75].reachable = reachBBL;
	markers[76].reachable = reachBBL;
	markers[77].reachable = reachBBL;
	markers[78].reachable = reachBBL;
	markers[79].reachable = ( reachBBL && ( hasSpace || hasSpeed ));
	markers[80].reachable = ( reachBBL && ( hasSpace || hasSpeed ));
	
	//Lower Nofair
	markers[81].reachable = reachLN;
	markers[82].reachable = reachLN;
	markers[83].reachable = reachLN;
	markers[84].reachable = reachLN;
	markers[85].reachable = reachLN;
	markers[86].reachable = reachLN;
	markers[87].reachable = reachLN;
	markers[88].reachable = reachLN;
	markers[89].reachable = reachLN;
}