<?php
require_once '../inc/connection.php';

$name1 = $_REQUEST['name1'];
$name2 = $_REQUEST['name2'];

$sql = "INSERT INTO `list`(`name1`,`name2`) VALUES ('$name1','$name2') ";
$res =  mysqli_query( $con , $sql );

if ($res) {
    header('Location: ../prank.html');
} else {
    echo "Error: " . mysqli_error($con);
}

?>