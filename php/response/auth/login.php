<?php
    require_once '../../connection.php';

    $login = $_POST['login'];
    $password = $_POST['password'];
    $sql = "SELECT name_role FROM user INNER JOIN `role` ON user.id_role = `role`.id_role WHERE `login` = '$login' AND `password` = '$password'";
    if ($result = $conn->query($sql)) {
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            echo json_encode([
                "role" => $row['name_role']
            ]);
        } else {
            echo json_encode([
                "error" => "Incorrect login or password"
            ]);
        }
    } else {
        echo json_encode([
            "error" => "Something went wrong! Please, try again later."
        ]);
    }
?>