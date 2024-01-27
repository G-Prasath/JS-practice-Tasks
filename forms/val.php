<?php

$error = 0;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $msg = $_POST['msg'];

    if (empty($name)) {
        $name_error = "Enter Your Name";
        $error = 1;
    } elseif (!preg_match("/^[a-zA-Z ]*$/", $name)) {
        $name_error = "Only Alphabetz and space allowed";
        $error = 1;
    } else {
        $error = 0;
    }


    if (empty($email)) {
        $email_error = "Enter Your Email";
        $error = 1;
    } elseif (!preg_match('/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/', $email)) {
        $email_error = "Enter Valid Email";
        $error = 1;
    } else {
        $error = 0;
    }


    if (empty($phone)) {
        $phone_error = "Enter Your Phone Nunber";
        $error = 1;
    } elseif (!preg_match('/^[6-9]\d{9}$/', $phone)) {
        $phone_error = "Enter Your valide Phone Nunber";
        $error = 1;
    } else {
        $error = 0;
    }

    if (empty($msg)) {
        $msg_error = "Enter Your Discription";
        $error = 1;
    } elseif (!preg_match("/^[a-zA-Z ]*$/", $name)) {
        $msg_error = "Only Alphabetz and space allowed";
        $error = 1;
    } else {
        $error = 0;
    }

    if ($error == 1) {
        $response = array('name' => $name_error, 'phone' => $phone_error, 'email' => $email_error, 'msg' => $msg_error, 'errors' => $error);

        header('Content-Type: application/json');
        echo json_encode($response);
    } elseif ($error == 0) {

        if ($_SERVER['REQUEST_METHOD'] == "POST" and isset($_POST['name']) and isset($_POST['email']) and isset($_POST['phone']) and isset($_POST['msg'])) {
            require 'vendor/autoload.php';

            $email = new \SendGrid\Mail\Mail();
            $email->setFrom("noreplay@smartroofings.in", "Dhanamroofing client Enquiry");
            $email->setSubject("Dhanamroofings Landing Page Enquiry");
            $email->addTo("guruprasathmsc@gmail.com");
            $email->addContent("text/html", '
            
        <!DOCTYPE html>
        <html>
        <head>
        <style>
        table {
          font-family: arial, sans-serif;
          border-collapse: collapse;
          width: 100%;
        }
        td, th {
          border: 1px solid #dddddd;
          text-align: left;
          padding: 8px;
        }
        tr:nth-child(even) {
          background-color: #dddddd;
        }
        </style>
        </head>
        <body>
        <table>
          <tr>
            <th>Name</th>
            <th>  ' . $_POST['name'] . '</th>
          </tr>
          <tr>
            <td>Email</td>
            <td>  ' . $_POST['email'] . '</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td>  ' . $_POST['phone'] . '</td>
          </tr>
          <tr>
            <td>Message</td>
            <td>  ' . $_POST['msg'] . '</td>
          </tr>
        </table>
        </body>
        </html>');

            $sendgrid = new \SendGrid('');

            if ($sendgrid->send($email)) {
                echo 'https://dhanamroofings.com/thank-you.php';
            } else {
                echo "Mail Sending Failed";
            }
        } else {
            echo 'https://dhanamroofings.com/';
        }
    }
}
