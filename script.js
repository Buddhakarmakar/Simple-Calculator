
screen=document.getElementById("screen").value;
function dis(e){
	document.getElementById("screen").value+=e;
}

function solve(){
	var x=document.getElementById("screen").value;
	try{
		var y=eval(x);
		document.getElementById("result").value=y;
	}
	catch(solve){
		document.getElementById("screen").value="error";
	}

}
function clear_all(){
	document.getElementById("screen").value="";
}
function back() {
    var value = document.getElementById("screen").value;
    document.getElementById("screen").value = value.substr(0, value.length - 1);
}


