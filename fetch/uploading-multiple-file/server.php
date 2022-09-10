<?php
if(empty($_FILES)){
	header('HTTP/1.1 500 Internal Server Error');
	echo json_encode([
		'status' => false,
		'data' => [
			'message' => 'files is empty',
		]
	]);
	exit;
}

foreach($_FILES as $file){
	$names[] = $name = "./gallery/" . $file['name'];
	$tmp_name = $file['tmp_name'];
	move_uploaded_file($tmp_name,$name);
}

echo json_encode([
	'status' => true,
	'data' => [
		'gallery' => $names,
		'requestBody' => $_FILES,
	]
]);
