


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


$('.banner_int').slick({

			  dots: true,
			  infinite: true,
			  speed: 300,
			  slidesToShow: 1,
			  adaptiveHeight:true,
			  autoplay: true,
			  autoplaySpeed: 200000,
			
			
});	


$(document).ready(function(){
	$('li').hover(function(){
		$(this).find('.menu1').find('.submenu').slideDown('slow',0);
		$(this).find('.menu1').find('.submenu1').slideDown('slow',0);
		$(this).find('.menu1').find('.submenu2').slideDown('slow',0);
	},function(){
		$(this).find('.menu1').find('.submenu').slideUp('slow',0);
		$(this).find('.menu1').find('.submenu1').slideUp('slow',0);
		$(this).find('.menu1').find('.submenu2').slideUp('slow',0);
	})
})
			








