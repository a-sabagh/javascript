<?php

header('Content-Type: application/json');

$users_collection = [
	'guest' => [
		'id' => 0,
		'username' => 'guest',
		'password' => '12345',
	],
	'admin' => [
		'id' => 1,
		'username' => 'admin',
		'password' => '56789',
	],
	'reza' => [
		'id' => 2,
		'username' => 'reza',
		'password' => 'abcd123',
	],
	'abolfazl' => [
		'id' => 3,
		'username' => 'abolfazl',
		'password' => 'admin12345',
	],
];

$username = $_GET['username'] ?: 'guest';
$user_collection = @$users_collection[$username] ?: null;

if(!$user_collection){
	header('HTTP/1.1 500 User Not Found');
	echo json_encode([
		'status' => false,
		'data' => [
			'message' => 'username is not exists in user collections'
		]
	]);
}else{
	echo json_encode([
		'status' => true,
		'data' => [
			'user' => $user_collection,
		]
	]);
}

exit;
