<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$data = $name . "\n" . $email . "\n" . $message . "\n";

$file = fopen("data.txt", "a");
fwrite($file, $data);
fclose($file);
?>