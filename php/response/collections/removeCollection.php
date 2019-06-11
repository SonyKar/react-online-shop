<?php
    require_once '../../connection.php';

    $id = $_POST['id'];

    $sql = "SELECT id_photo FROM collections WHERE id_collection = $id";
    $result = $conn->query($sql);
    $row = $result->fetch_assoc();
    $idPhoto = $row['id_photo'];

    $sql = "SELECT id_product, id_photo FROM products WHERE id_collection = $id"; // Select of products of collection, which we delete
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $idProduct = $row['id_product'];
            $idPhotoProduct = $row['id_photo'];
            $sql = "DELETE FROM cart WHERE id_product = $idProduct"; // Delete selected products from user's cart
            if ($conn->query($sql)) {
                $sql = "DELETE FROM products WHERE id_product = $idProduct"; // Delete selected products
                if ($conn->query($sql)) {
                    $sql = "DELETE FROM photo WHERE id_photo = $idPhotoProduct"; // Delete selected products' photos
                    if ($conn->query($sql)) {
                        $sql = "DELETE FROM collections WHERE id_collection = $id"; // Delete selected collection
                        if ($conn->query($sql)) {
                            $sql = "DELETE FROM photo WHERE id_photo = $idPhoto"; // Delete photo of selected collection
                            if ($conn->query($sql)) {
                                echo 1;
                            } else {
                                echo json_encode([
                                    "error" => "Something went wrong, while deleting photo! Please, try again later."
                                ]);
                            }
                        } else {
                            echo json_encode([
                                "error" => "Something went wrong, while deleting collection! Please, try again later."
                            ]);
                        }
                    } else {
                        echo json_encode([
                            "error" => "Something went wrong, while deleting photo! Please, try again later."
                        ]);
                    }
                } else {
                    echo json_encode([
                        "error" => "Something went wrong, while deleting product! Please, try again later."
                    ]);
                }
            } else {
                echo json_encode([
                    "error" => "Something went wrong, while deleting products from cart! Please, try again later."
                ]);
            }
        }
    } else {
        $sql = "DELETE FROM collections WHERE id_collection = $id"; // Delete selected collection
        if ($conn->query($sql)) {
            $sql = "DELETE FROM photo WHERE id_photo = $idPhoto"; // Delete photo of selected collection
            if ($conn->query($sql)) {
                echo 1;
            } else {
                echo json_encode([
                    "error" => "Something went wrong, while deleting photo! Please, try again later."
                ]);
            }
        } else {
            echo json_encode([
                "error" => "Something went wrong, while deleting collection! Please, try again later."
            ]);
        }
    }

    $conn->close();
?>