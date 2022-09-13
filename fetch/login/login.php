<?php
header('Content-Type: application/json');

$username = $_POST['username'];
$password = $_POST['password'];

if("admin" == $username && "12345" == $password){
	echo json_encode([
		'status' => true,
		'data' => [
			'requestBody' => $_POST,
			'message' => 'Authorization is correct'
		]
	]);
}else{
	header("HTTP/1.1 401 Unauthorized");
	echo json_encode([
		'status' => false,
		'statusCode' => 401,
		'data' => [
			'requestBody' => $_POST,
			'message' => 'Unauthorized'
		]
	]);
}

