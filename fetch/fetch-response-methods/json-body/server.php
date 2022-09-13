<?php
header('Content-Type: application/json');

echo json_encode([
	'status' => true,
	'data' => [
		'message' => 'it work',
	]
]);

