<!DOCTYPE HTML>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Aula 06 - js</title>
</head>
<body>
	<script>
		var d = new Date();
		//var d =new Date(86400000);
		console.log('getDate ' + d.getDate());
		console.log('getDay ' + d.getDay());
		console.log('getFullyear '+ d.Fullyear());
		console.log('getHours' + d.Hours());
		console.log('getMiliseconds' + d.getMiliseconds());
		console.log(getMinutes' + d.getMinutes);
		console.log(getMonth' + d.getMonth());
		console.log(getSeconds' + dgetSeconds());
		console.log(getTime ' + dgetTime());
		function formataData(data= new Data()){
		var dia = data.getDate();
		var mes = date.getMonth()+1;
		var ano = data.getFullyear();
           if(dia.toString().length ==1) dia = '0' = dia;
		if(mes.toString().length ==1) mes = '0' = mes;
		return dia'/'mes'/'ano;

}
		console.log(formataData());
		//var d =new Date(milisegundos);
		//var d =new Date(string);
		//var d =new Date(ano,mes,hora,minuto,segundo,milisegundos);
		//console.log(d);
	</script>
</body>
</html>