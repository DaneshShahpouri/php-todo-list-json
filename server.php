<?php
$jsonList = file_get_contents('json/data.json');

$mainList = json_decode($jsonList);

header('Content-type: application/json');

echo json_encode($mainList);