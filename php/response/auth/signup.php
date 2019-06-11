<?php
    require_once '../../connection.php';

    $login = $_POST['login'];
    $password = $_POST['password'];
    $password2 = $_POST['password2'];

    if ($password === $password2) {
        $sql = "SELECT name_role FROM user INNER JOIN `role` ON user.id_role = `role`.id_role WHERE `login` = '$login'";
        if ($result = $conn->query($sql)) {
            if ($result->num_rows <= 0) {
                $sql = "INSERT INTO user VALUES('$login', '$password', 2)";
                if ($conn->query($sql)) {
                    echo json_encode([
                        "role" => 'user'
                    ]);
                } else {
                    echo json_encode([
                        "error" => 'Something went wrong! Please, try again later.'
                    ]);
                }
            } else {
                echo json_encode([
                    "error" => "$login is occupied, try another one"
                ]);
            }
        } else {
            echo json_encode([
                "error" => "Something went wrong! Please, try again later."
            ]);
        }
    } else {
        echo json_encode([
            "error" => "Passwords does not match"
        ]);
    }
    $conn->close();
?>