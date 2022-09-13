<?php
header('Content-Type: text/plain');

$request_text = file_get_contents('php://input');
echo "{$request_text} ,Hello from server";
