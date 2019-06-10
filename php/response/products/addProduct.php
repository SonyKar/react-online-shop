<?php
    require_once '../../connection.php';

    if ($_FILES['image']['type'] !== 'image/jpeg' && $_FILES['image']['type'] !== 'image/png') {
        echo json_encode([
            "error" => 'Please upload an image!'
        ]);
    } else if (move_uploaded_file($_FILES['image']['tmp_name'], '../../../web/src/assets/img/'.basename($_FILES['image']['name']))) {
        $name = $_POST['name'];
        $price = $_POST['price'];
        $desc = $_POST['desc'];
        $image = basename($_FILES['image']['name']);
        $collectionId = $_POST['collectionId'];

        $sql = "INSERT INTO photo VALUES(NULL, '$image')";
        if ($conn->query($sql)) {
            $sql = "SELECT id_photo FROM photo ORDER BY id_photo DESC LIMIT 1";
            $result = $conn->query($sql);
            $row = $result->fetch_assoc();
            $idPhoto = $row['id_photo'];

            $sql = "INSERT INTO products VALUES(NULL, '$name', $price, $idPhoto, '$desc', $collectionId);";
            if ($conn->query($sql)) {
                $sql = "SELECT id_product FROM products ORDER BY id_product DESC LIMIT 1";
                $result = $conn->query($sql);
                $row = $result->fetch_assoc();
                $conn->close();
                echo $row['id_product'];
            } else {
                echo json_encode([
                    "error" => 'Something went wrong! Please try again later.'
                ]);
            }
        } else {
            echo json_encode([
                "error" => 'Something went wrong! Please try again later.'
            ]);
        }
    } else {
        echo json_encode([
            "error" => 'Something went wrong! Please try again later.'
        ]);
    }
?>