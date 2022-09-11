<?php
header('Content-Type: application/json');

echo json_encode([
	'status' => true,
	'data' => [
		'requestBody' => file_get_contents('php://input'),
   	],
]);
