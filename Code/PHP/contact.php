<?php
$name = $email = $subject = $message = "";
$nameErr = $emailErr = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    function test_input($data) {
        $data = trim($data);
        $data = stripslashes($data);
        $data = htmlspecialchars($data);
        return $data;
    }

    $name = test_input($_POST["name"]);
    $email = test_input($_POST["email"]);
    $subject = test_input($_POST["subject"]);
    $message = test_input($_POST["message"]);

    $valid = true;

    if (!preg_match("/^[a-zA-Z-' ]*$/", $name)) {
        $nameErr = "Only letters and white space allowed";
        $valid = false;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $emailErr = "Invalid email format";
        $valid = false;
    }

    if ($valid) {
        $to = "joshuapascallambertz@gmail.com";
        $headers = "From: $name <$email>\r\n";
        $headers .= "Reply-To: $email\r\n";
        $headers .= "Content-Type: text/plain; charset=utf-8";

        if (mail($to, $subject, $message, $headers)) {
            echo "✅ Nachricht erfolgreich gesendet.";
        } else {
            echo "❌ Fehler beim Senden.";
        }
    } else {
        echo "❗Bitte Eingaben überprüfen: <br>$nameErr <br>$emailErr";
    }
}
?>