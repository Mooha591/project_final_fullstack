<?php

require_once('pdo.php');
// préparer la requête
// récupère les données envoyées 
$data = json_decode(file_get_contents("php://input"));
$user_email = trim(htmlspecialchars($data->email));
$password = trim(htmlspecialchars($data->password));

// on vérifie que les données sont bien envoyées
// $user_email = $data->email;


// requête pour récupérer le mdp hashé
$result = $pdo->prepare("SELECT * FROM user WHERE email = :email");
$result->execute([
    "email" => $user_email,
]);
// récupérer le résultat
$row = $result->fetch(PDO::FETCH_ASSOC);
// récupère le mdp hashé

// $email = $row['email'];
$hash = $row['password']; // récupère le mdp hashé





// echo json_encode(["pass" => $password, "hash" => $hash]);
// vérifie si le mdp est le même que celui hashé
if (password_verify($password, $hash)) {
    // echo "ok";
    // header("location: http://localhost:3000/dashboard");
    http_response_code(200);
    echo json_encode(["user_id" => $row['user_id'], "first_name" => $row['first_name'], "last_name" => $row['last_name']]);
} else {
    echo "not ok";
}



// if ($password === $hash) {
//     echo "ok";
// } else {
//     echo "not ok";
// }


// faire la requête
// $result = $pdo->prepare("SELECT * FROM register WHERE email = :email and password = :password");
// $result->execute([
//     "email" => $user_email,
//     "password" => $password,
// ]);


// // récupérer le résultat


// // vérifier si l'email existe dans la base de données et si le mot de passe correspond
// if ($row >= 1) {
//     http_response_code(200);
//     // $password = password_verify($password, $row['password']); 

//     $output = [
//         "email" => $row['email'],
//         "first_name" => $row['first_name'],
//         "last_name" => $row['last_name'],
//         "status" => "200"
//     ];

//     echo json_encode($output);
// } else {
//     http_response_code(202); // if email or password are incorrect
//     echo json_encode(array("message" => "Email or password are incorrect"));
// }
