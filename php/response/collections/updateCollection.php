<?php
    require_once '../../connection.php';

    if (isset($_FILES['image'])) {

        if ($_FILES['image']['type'] !== 'image/jpeg' && $_FILES['image']['type'] !== 'image/png') {
            echo json_encode([
                "error" => 'Please upload an image!'
            ]);
        } else if (move_uploaded_file($_FILES['image']['tmp_name'], '../../../web/src/assets/img/'.basename($_FILES['image']['name']))) {
            $name = $_POST['name'];
            $image = basename($_FILES['image']['name']);
            $id = $_POST['id'];
            
            $sql = "SELECT id_photo FROM collections WHERE id_collection = $id";
            $result = $conn->query($sql);
            $row = $result->fetch_assoc();
            $idPhotoOld = $row['id_photo'];
    
            $sql = "INSERT INTO photo VALUES(NULL, '$image')";
            if ($conn->query($sql)) {
                $sql = "SELECT id_photo FROM photo ORDER BY id_photo DESC LIMIT 1";
                $result = $conn->query($sql);
                $row = $result->fetch_assoc();
                $idPhoto = $row['id_photo'];
    
                $sql = "UPDATE collections SET name_collection = '$name', id_photo = $idPhoto WHERE id_collection = $id";
                if ($conn->query($sql)) {
                    $sql = "DELETE FROM photo WHERE id_photo = $idPhotoOld";
                    $conn->query($sql);
                    echo true;
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
    } else {
        $name = $_POST['name'];
        $id = $_POST['id'];
        
        $sql = "UPDATE collections SET name_collection = '$name' WHERE id_collection = $id";
        if ($conn->query($sql)) {
            echo true;
        } else {
            echo json_encode([
                "error" => 'Something went wrong! Please try again later.'
            ]);
        }
    }
    $conn->close();
?>