<?php
    require_once '../connection.php';

    $mail = $_POST['email'];

    $sql = "INSERT INTO subscription VALUES('$mail');";
    $conn->query($sql);
    echo 1;
    $conn->close();
?>