<?php

    $name = $_POST['name'];
    $mail = $_POST['email'];
    $message = $_POST['message'];

    if (mail('sa.caraganciu@gmail.com', 'Contacting Form on DoubleM', "Name: $name\nE-Mail: $mail\nMessage: $message")){
        echo 1;
    } else {
        echo json_encode([
            "error" => "Something went wrong! Please, try again later."
        ]);
    }

?>