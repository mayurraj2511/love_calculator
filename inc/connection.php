<?php
$con = mysqli_connect('localhost','root','','lovecalculator');

if (!$con) {
    echo "Connection failed: " . mysqli_connect_error();
    die();
}

?>