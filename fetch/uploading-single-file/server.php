<?php
$picture = @$_FILES['picture']['tmp_name'];
$result = move_uploaded_file($picture,'picture.jpg');

if(!$result){
	header('HTTP/1.1 500 Internal Error');
	echo json_encode([
		'status' => false,
		'data' => [
			'message' => 'Upload Failed!',
		]
	]);
}elseif($result){
	echo json_encode([
		'status' => true,
		'data' => [
			'message' => 'Upload Successfully'
		]
	]);
}
