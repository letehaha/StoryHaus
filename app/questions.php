<?php
require_once('./src/mailer.php');

$to  = "letehaha@gmail.com";  

$subject = 'Остались некоторые вопросы ('.date("Y-m-d H:i:s").')';


    $message = '
				<!DOCTYPE html>
				<html> 
				    <head>
				        <meta http-equiv="content-type" content="text/html; charset=utf-8" />
				        <title>Остались некоторые вопросы</title>
				    </head> 
				    <body>
				        <h3>Some title</h3>
				        <strong>Номер телефона: </strong>'.$_POST['phone'].'<br>';


		$endMessage = '</body> 
				</html>';


$headers  = 'MIME-Version: 1.0' . "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

$headers .= "From: haus: \r\n";

$result = @mail($to, $subject, $message, $headers);

if($result){
    echo 'success';
}else{
    echo 'fail';
}