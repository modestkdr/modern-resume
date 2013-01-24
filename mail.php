<?php
if (isset($_POST["mail"]) && isset($_POST["name"]) && isset($_POST["subject"]) && isset($_POST["text"])) {
	$error=array();

	$name = $_POST['name'];
	$subject = $_POST['subject'];
	$text = $_POST['text'];
	$mail = $_POST['mail'];

	if (empty($name)) {
		$error["name"]="The name is empty";
	}
	
	if (empty($mail)) {
		$error["mail"]="The mail is empty";
	} else if (!filter_var($mail, FILTER_VALIDATE_EMAIL)) {
		$error["mail"]="Invalid mail";
	}
	
	if (empty($text)) {
		$error["text"]="The text is empty";
	}

	if (empty($subject)) {
		$error["subject"]="The subject is empty";
	}

	if (count($error) > 0) {
		echo(json_encode($error));
	} else {
		//swap out by your own email
		$to = "youremail@domain.com";

		$message =" You received  a mail from ".$name;
		$message .=" Text of the message : ".$text;

		if (!mail($to, $subject,$message)) {
			$error["main"]="there's some error to send the mail, verify your server options";
			echo(json_encode($error));
		}
	}
} else {
	$error=array();
	$error["main"]="there's some error to send the mail, verify your server options";
	echo(json_encode($error));
}
?>