<?php
    require_once '../../connection.php';

    if ($_FILES['image']['type'] !== 'image/jpeg' && $_FILES['image']['type'] !== 'image/png') {
        echo json_encode([
            "error" => 'Please upload an image!'
        ]);
    } else if (move_uploaded_file($_FILES['image']['tmp_name'], '../../../web/src/assets/img/'.basename($_FILES['image']['name']))) {
        $name = $_POST['name'];
        $image = basename($_FILES['image']['name']);

        $sql = "INSERT INTO photo VALUES(NULL, '$image')";
        if ($conn->query($sql)) {
            $sql = "SELECT id_photo FROM photo ORDER BY id_photo DESC LIMIT 1";
            $result = $conn->query($sql);
            $row = $result->fetch_assoc();
            $idPhoto = $row['id_photo'];

            $sql = "INSERT INTO collections VALUES(NULL, '$name', $idPhoto);";
            if ($conn->query($sql)) {
                $sql = "SELECT id_collection FROM collections ORDER BY id_collection DESC LIMIT 1";
                $result = $conn->query($sql);
                $row = $result->fetch_assoc();
                echo $row['id_collection'];
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
    $conn->close();
?>