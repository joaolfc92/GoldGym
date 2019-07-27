<?php

	$envio = "joao_luiz92@hotmail.com";"joaobotanocoracao@gmail.com";
	$assunto = "NOVO CLIENTE";

	$nome = $_POST['nome'];
	$email = $_POST['email'];
	$cpf = $_POST['cpf'];
	$rg = $_POST['rg'];
	$telefone = $_POST['telefone'];
	$celular = $_POST['celular'];
	$dataNascimento = $_POST['dataNascimento'];
	$objetivo = $_POST['objetivo'];

	$corpo = "<strong>Mensagem de Contato : </strong><br><br>";
	$corpo.= "<strong>Nome : </strong> $nome";
	$corpo.= "<br> <strong>E-mail : </strong> $email";
	$corpo.= "<br><strong>CPF : </strong> $cpf";
	$corpo.= "<br><strong>RG : </strong> $rg";
	$corpo.= "<br><strong>Telefone : </strong> $telefone";
	$corpo.= "<br><strong>Celular : </strong> $celular";
	$corpo.= "<br><strong>Data de Nascimento : </strong> $dataNascimento";
	$corpo.= "<br><strong>Objetivo : </strong> $objetivo";

	

	$header= "Content-Type: text/html; charset= utf-8\n";
	$header.="From: $email Reply-to: $email\n";
	
	@mail($envio,$assunto,$corpo,$header);
	header("location:../../index.html");


?>