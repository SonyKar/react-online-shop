<?php
    require_once '../../connection.php';
    require_once '../../entity/collection.php';

    $sql = "SELECT id_collection, name_collection, path_photo FROM collections INNER JOIN photo ON photo.id_photo = collections.id_photo";
    $result = $conn->query($sql);
    $conn->close();
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $collection = new collection();
            $collection->setName($row['name_collection']);
            $collection->setImage($row['path_photo']);
            $response[(string)$row['id_collection']] = $collection->transformToArray();
        }
        echo json_encode($response);
    } else {
        echo json_encode(["error"=>"There no any collections"]);
    }
?>