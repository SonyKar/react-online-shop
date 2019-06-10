<?php
    require_once "../../connection.php";
    
    $data = json_decode(file_get_contents("php://input"), true);

    $login = $_GET['login'];
    $id = $data['id'];
    $idSize = $data['size'];
    $qty = $data['qty'];

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

    $sql = "UPDATE cart SET qty = $qty WHERE id_product = $id AND id_size = $idSize AND `login` = 'admin'";
    if ($result = $conn->query($sql)) {
        echo true;
    }
    else {
        echo json_encode(["error" => "Something went wrong. Try again later!"]);
    }
    $conn->close();
?>