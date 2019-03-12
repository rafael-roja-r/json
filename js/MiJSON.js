var jsonText = '{"estud":['+
	'{"Codigo":"00125","Nombre":"Jose Rafael ","nota":"9"},'+
	'{"Codigo":"00126","Nombre":"Anderson ","nota":"8"},'+
	'{"Codigo":"00127","Nombre":"Churcher lee ","nota":"7"},'+
	'{"Codigo":"00128","Nombre":"Erick nemecio ","nota":"8"},'+
	'{"Codigo":"00129","Nombre":"Sandro ","nota":"8"},'+
	'{"Codigo":"00130","Nombre":"Max keny ","nota":"9"},'+
	'{"Codigo":"00131","Nombre":"Jessica  ","nota":"10"},'+
	'{"Codigo":"00132","Nombre":"Andrea","nota":"8"},'+
	'{"Codigo":"00133","Nombre":"Erik","nota":"6"},'+
	'{"Codigo":"00134","Nombre":"Willian","nota":"10"}'+']}';
var  jsObj= JSON.parse(jsonText );

function leerJSON(json) {
	var out = "<br>";
	var i;
 for (i = 0; i < json.estud.length;i++){
 	out +="Codigo:"+json.estud[i].Codigo+"-"+"Nombre:"+ json.estud[i].Nombre+"-"+"nota:"+json.estud[i].nota+"<br>";
 }
 document.getElementById('estud').innerHTML = out;
}


function promedio(json) {
  var i;
  nota = 0;
 for (var i = 0; i < json.estud.length;i++){
nota += parseFloat(json.estud[i].nota);
 }
 document.getElementById('estud').innerHTML = nota / json.estud.length;
}

function Nota_Mayor(json){
 mayor = json.estud[0].nota;
 for (var i = 0; i < json.estud.length; i++) {
   if (json.estud[i].nota < mayor) {
     mayor = json.estud[i].nota;
   }
 }
 document.getElementById('estud').innerHTML = mayor;
}

function Nota_Menor(json){
 menor = json.estud[0].nota;
 for (var i = 0; i < json.estud.length; i++) {
   if (json.estud[i].nota > menor) {
     menor = json.estud[i].nota;
   }
 }
 document.getElementById('estud').innerHTML = menor;
}
