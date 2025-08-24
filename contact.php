<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name    = htmlspecialchars($_POST["name"]);
    $contact = htmlspecialchars($_POST["contact"]);
    $email   = htmlspecialchars($_POST["email"]);
    $message = htmlspecialchars($_POST["message"]);

    $to = "avolis.innovations@gmail.com";  // 🔹 replace with your email
    $subject = "New Contact Form Submission - Avolis";
    $body = "Name: $name\nContact: $contact\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
?>
