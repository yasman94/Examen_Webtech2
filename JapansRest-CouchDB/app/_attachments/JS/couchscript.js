function createDoc(){
	
	var gerecht = $("#gerecht").val();
	var hoeveelheid = $("#hoeveelheid").val();
	var tafelnr = $("#tafelnr").val();
	var opmerkingen = $("#opmerkingen").val();
	var tijd = $("#tijd").val();
	var doc = {};

	doc.gerecht = gerecht;
	doc.hoeveelheid = parseInt(hoeveelheid);
	doc.tafelnr = parseInt(tafelnr);
	doc.opmerkingen = opmerkingen;
	doc.tijd = Date.parse(tijd);
	var json = JSON.stringify(doc);
	console.log(json);
	
	
	$.ajax({
		type:			'PUT',
		url:			'../../' + gerecht + hoeveelheid + tafelnr + opmerkingen + tijd,
		data:			json,
		contentType: 	'application/json',
		async:			true,
		success:		function(data){
			console.log(data);
			buildOutput();
		},
		error:			function(XMLHttpRequest, textStatus, errorThrown){
			console.log(errorThrown); 
		}
	});
}

function buildOutput(){
	
	$.ajax({
		type:			'GET',
		url:			'../../_all_docs?include_docs=true',
        async:  		true,
        success:		function(data){
        	
        	var arr = JSON.parse(data).rows;
        	var htmlString = '<table>';
        	for(var i=0; i<arr.length; i++){
        		
        		if(arr[i].id.indexOf('_design') == -1){
        			var doc = arr[i].doc;
        			htmlString += '<tr><td>' + doc.gerecht + '</td><td>' + doc.hoeveelheid + '</td><td>' + doc.tafelnr + '</td><td>' + doc.opmerkingen + '</td><td>' + doc.tijd + '</td></tr>';
        		}
        	}
        	htmlString += '</table>';
        	console.log(htmlString);
        	$('#output').html(htmlString);
        },
		error: 			function(XMLHttpRequest, textStatus, errorThrown){ 
			console.log(errorThrown); 
		}
	});
}