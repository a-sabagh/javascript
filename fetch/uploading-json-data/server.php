<?php
header('Content-Type: application/json');

echo json_encode([
	'status' => true,
	'data' => [
		'requestBody' => json_decode(file_get_contents('php://input'))
	]
]);
