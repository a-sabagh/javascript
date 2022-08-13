<?php
$resume = $_FILES['resume']['tmp_name'];
$profile = $_FILES['profile']['tmp_name'];
move_uploaded_file($resume,'resume.txt');
move_uploaded_file($profile,'pelikan.jpg');
echo json_encode(array_merge($_FILES,$_POST));
