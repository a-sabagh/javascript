<?php

header('Content-Type: application/json');

sleep(5);

echo json_encode([
	'status' => true,
	'data' => [
		'message' => 'it work'
	]
]);
