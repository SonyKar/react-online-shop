<?php
    require_once '../../connection.php';
    require_once '../../entity/product.php';

    $collection = $_GET['collection'];

    $sql = "SELECT id_product, name_product, price, path_photo, `description` FROM products INNER JOIN photo ON photo.id_photo = products.id_photo WHERE id_collection = $collection ORDER BY id_product DESC";
    $result = $conn->query($sql);
    $conn->close();
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
            $product = new product();
            $product->setName($row['name_product']);
            $product->setPrice($row['price']);
            $product->setImage($row['path_photo']);
            $product->setDescription($row['description']);
            $response[(string)$row['id_product']] = $product->transformToArray();
        }
        echo json_encode($response);
    } else {
        echo json_encode(["error" => "There are no any products yet"]);
    }
?>