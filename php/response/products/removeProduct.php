<?php
    require_once '../../connection.php';

    $id = $_POST['id'];

    $sql = "SELECT id_photo FROM products WHERE id_product = $id";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    $idPhoto = $row['id_photo'];

    $sql = "DELETE FROM cart WHERE id_product = $id";
    if ($conn->query($sql)) {
        $sql = "DELETE FROM products WHERE id_product = $id";
        if ($conn->query($sql)) {
            $sql = "DELETE FROM photo WHERE id_photo = $idPhoto";
            if ($conn->query($sql)) {
                echo true;
            } else {
                echo json_encode([
                    "error" => "Something went wrong! Please, try again later."
                ]);
            }
        } else {
            echo json_encode([
                "error" => "Something went wrong! Please, try again later."
            ]);
        }
    } else {
        echo json_encode([
            "error" => "Something went wrong! Please, try again later."
        ]);
    }

    $conn->close();
?>