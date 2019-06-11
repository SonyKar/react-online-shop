<?php
    require_once "../../connection.php";

    $id = $_POST['id'];
    $idSize = $_POST['size'];
    $qty = $_POST['qty'];
    $login = $_GET['login'];

    switch($idSize) {
        case "XS":
            $idSize = 1;
            break;
        case "S":
            $idSize = 2;
            break;
        case "M":
            $idSize = 3;
            break;
        case "L":
            $idSize = 4;
            break;
        case "XL":
            $idSize = 5;
            break;
    }

    $sql = "SELECT * FROM cart WHERE `login` = '$login' AND id_product = $id AND id_size = '$idSize'";
    if ($result = $conn->query($sql)) {
        if ($result->num_rows > 0) {
            $sql = "UPDATE cart SET qty = qty + $qty WHERE `login` = '$login' AND id_product = $id AND id_size = '$idSize'";
            if ($conn->query($sql)) {
                echo true;
            } else {
                echo json_encode([
                    "error" => "Something went wrong, while trying to merge item with item in db"
                ]);
            }
        } else {
            $sql = "INSERT INTO cart VALUES('$login', $id, $idSize, $qty);";
            if ($conn->query($sql)) {
                echo true;
            } else {
                echo json_encode([
                    "error" => "Something went wrong, while trying to add item to db"
                ]);
            }
        }
    } else {
        echo json_encode([
            "error" => "Something went wrong, while trying to find cart items of $login"
        ]);
    }
    $conn->close();
?>