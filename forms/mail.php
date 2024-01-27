<?php

if($_SERVER['REQUEST_METHOD'] == "POST" and isset($_POST['name']) and isset($_POST['email']) and isset($_POST['phone']) and isset($_POST['msg'])){
    require 'vendor/autoload.php';

    // $config_json = file_get_contents('../../config.json');
    // $config = json_decode($config_json, true);

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
    <th>  '.$_POST['name'].'</th>
  </tr>
  <tr>
    <td>Email</td>
    <td>  '.$_POST['email'].'</td>
  </tr>
  <tr>
    <td>Phone</td>
    <td>  '.$_POST['phone'].'</td>
  </tr>
  <tr>
    <td>Message</td>
    <td>  '.$_POST['msg'].'</td>
  </tr>
</table>
</body>
</html>');

    $sendgrid = new \SendGrid('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');

    if($sendgrid->send($email)){
        header('location: https://www.mekarkconstruction.com/thank-you.php');
        // echo 'OK';
    } else{
        echo "Mail Sending Failed";
    }
}
else{
    header('location: https://www.mekarkconstruction.com');
    // echo 'Not OK';
}

?>