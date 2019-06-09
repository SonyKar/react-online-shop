<?php
    require_once '../../connection.php';
    require_once '../../entity/product.php';

    $collection = $_GET['collection'];
    $id = $_GET['id'];

    $sql = "SELECT name_product, price, path_photo, `description` FROM products INNER JOIN photo ON photo.id_photo = products.id_photo WHERE id_product = $id AND id_collection = $collection";
    $result = $conn->query($sql);
    $conn->close();
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $product = new product();
        $product->setName($row['name_product']);
        $product->setPrice($row['price']);
        $product->setImage($row['path_photo']);
        $product->setDescription($row['description']);
        echo json_encode($product->transformToArray());
    } else {
        echo json_encode(["error" => "There are no such a product!"]);
    }
?>