

document.getElementById("fotografia").onchange = function(e){
	if(e.target.files != null && e.target.files.length != 0){
		var arquivo = e.target.files[0];
		var formData = new FormData();
		formData.append("fotografia", arquivo);
		xmlHttp = new XMLHttpRequest();
		xmlHttp.onreadystatechange = function(){
			if(xmlHttp.readyState === 4 && xmlHttp.status === 200)
				alert(xmlHttp.responseText);
		}
		xmlHttp.open("POST", "receive.php", true);	
		xmlHttp.send(formData);
	}
});
