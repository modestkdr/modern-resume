<?php
	$mail = $_POST['mail'];
	$name = $_POST['name'];
	$subject = $_POST['subject'];
	$text = $_POST['text'];
	
 $to = "youremail@domain.com";
 $message =" You received  a mail from ".$name;
 $message .=" Text of the message : ".$text;

 if(mail($to, $subject,$message)){
	echo "Your message was sent successfully.";
} 
else{ 
	echo "there's some errors to send the mail, verify your server options";
}
?>