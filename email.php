<?php
  $name = $_POST['name'];
  $visitor_email = $_POST['email'];
  $message = $_POST['message'];
  $email_from = 'hello@projectmislead.org';
  $email_subject = "New Form Submission";
  $email_body = "You have received a new message from the user $name.\n".
                          "Here is the message:\n $message".
  $to = "yourname@yourwebsite.com";
  $headers = "From: $email_from \r\n";
  $headers .= "Reply-To: $visitor_email \r\n";

  mail($to,$email_subject,$email_body,$headers);  
?>
