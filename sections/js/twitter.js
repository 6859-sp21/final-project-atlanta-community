//$(".twitterclass").change(function () {
//	updateTwitterShown();
//});

function updateTwitterShown(){
	console.log("yeet");
	var twitterhandle = document.getElementById("twitterhandles").value;
	console.log(twitterhandle);
	
	console.log("noooooo");
	if (twitterhandle == "POTUS"){
		console.log("yeeeeeeeeeeee");
		document.getElementById("potus_twitter").hidden = false;
		document.getElementById("rhianna_twitter").hidden = true;
		document.getElementById("ellen_twitter").hidden = true;
		document.getElementById("atlantafalcons_twitter").hidden = true;
	}
	else if (twitterhandle == "rihanna"){
		document.getElementById("rhianna_twitter").hidden = false;
		document.getElementById("potus_twitter").hidden = true;
		document.getElementById("ellen_twitter").hidden = true;
		document.getElementById("atlantafalcons_twitter").hidden = true;
	}
	
	else if (twitterhandle == "TheEllenShow"){
		document.getElementById("ellen_twitter").hidden = false;
		document.getElementById("rhianna_twitter").hidden = true;
		document.getElementById("potus_twitter").hidden = true;
		document.getElementById("atlantafalcons_twitter").hidden = true;
	}
	
	else if (twitterhandle == "AtlantaFalcons"){
		document.getElementById("atlantafalcons_twitter").hidden = false;
		document.getElementById("rhianna_twitter").hidden = true;
		document.getElementById("potus_twitter").hidden = true;
		document.getElementById("ellen_twitter").hidden = true;
		
	}
	
	
}
