function relogio (){
	var data = new Date();
	var hor = data.getHours();
	var min = data.getMinutes();
	var seg = data.getSeconds();

	var diaSem = data.getDay();
	var dia = data.getDate();
	var mes = data.getMonth();
	var ano = data.getFullYear();



	var sem = ["Domingo","Segunda-feira","Terça-feira","Quarta-feira","Quinta-feira","Sexta-feira","Sabado"];
	var meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];


	


	if(hor<10){
		hor= "0"+hor;
	}

	if(min<10){
		min= "0"+min;
	}

	if(seg<10){
		seg= "0"+seg
	}

	var horas = hor+":"+min+":"+seg;
	var diaSemana = sem[diaSem]+" , "+dia+" "+" de "+meses[mes]+" "+ano;
	document.getElementById("rel").value = horas+" "+diaSemana;

}


	var tempo = setInterval(relogio,1000);



	$(document).ready(function(){
		$("#cpf").mask("000.000.000-00");
		$("#rg").mask("00.000.000-0");
		$("#telefone").mask("(00)0000-0000");
		$("#celular").mask("(00)0000-00009");
		$("#dataNascimento").mask("00/00/0000");
	});


	$(function(){
		$('#nome,#email,#cpf,#rg,#telefone,#celular,#dataNascimento,#objetivo').focus(function(){
			$(this).addClass('focado');
		})

		$('#nome,#email,#cpf,#rg,#telefone,#celular,#dataNascimento,#objetivo').blur(function(){
			$(this).removeClass('focado');
		})
	})



