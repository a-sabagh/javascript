<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

echo json_encode([
	'status' => true,
	'data' => [
		'images' => glob('./images/*')
	]
]);

