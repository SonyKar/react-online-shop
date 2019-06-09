<?php
    require_once "../../connection.php";
    require_once "../../entity/cartItem.php";

    $login = $_GET['login'];

    $sql = "SELECT cart.id_product, name_product, price, path_photo, size, qty FROM cart INNER JOIN products ON cart.id_product = products.id_product INNER JOIN photo ON products.id_photo = photo.id_photo INNER JOIN sizes ON sizes.id_size = cart.id_size WHERE `login` = '$login'";
    $result = $conn->query($sql);
    $conn->close();
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $cartItem = new cartItem();
            $cartItem->setName($row['name_product']);
            $cartItem->setPrice($row['price']);
            $cartItem->setImage($row['path_photo']);
            $cartItem->setSize($row['size']);
            $cartItem->setQty($row['qty']);
            $response[$row['id_product'].'_'.$row['size']] = $cartItem->transformToArray();
        }
        echo json_encode($response);
    }
?>