<?php

header('Content-Type: application/json');

$posts_collection = [
	0 => [],
	1 => [
		[
			'id' => 0,
			'title' => 'hello world',
			'content' => 'Elit dolore quo. i am linus trovalds and it is my room'
		],
		[
			'id' => 1,
			'title' => 'promise in javascript',
			'content' => 'Dolor molestias molestias assumenda impedit beatae dolore. Magnam',
		],
		[
			'id' => 2,
			'title' => 'async operator',
			'content' => 'Elit dolores explicabo temporibus saepe impedit exercitationem'
		]
	],
	2 => [
		[
			'id' => 4,
			'title' => 'await operator in es6',
			'content' => 'Sit veritatis consequatur sed debitis blanditiis Eveniet totam minus.'
		],	
		[
			'id' => 5,
			'title' => 'fetch request es6',
			'content' => 'Dolor harum placeat sit esse'
		]
	],
	3 => [
		[
			'id' => 6,
			'title' => 'async/sync process',
			'content' => 'Sit error quo unde id dolor blanditiis ut. Voluptas amet tempora'
		]	
	],
];

$user_id = $_GET['user_id'] ?: 0;
$post_collection = @$posts_collection[$user_id] ?: null;

if(!$post_collection){
	header('HTTP/1.1 500 Posts is Empty');
	echo json_encode([
		'status' => false,
		'data' => [
			'message' => 'user id is not found in database'
		]
	]);
}else{
	echo json_encode([
		'status' => true,
		'data' => [
			'posts' => $post_collection,
		]
	]);
}

exit;

