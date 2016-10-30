<?php

if(!isset($_POST['name']) || !isset($_POST['email']) || !isset($_POST['topic']) || 
	!isset($_POST['message'])) {

	echo "A required field was not filled out"

}

else {

	$to      = 'abhigupta.1600@gmail.com';
	$from 	 = $_POST['email'];
	$subject = $_POST['topic'];
	$message = $_POST['message'];

	$bool = mail($to, $subject, $message);

	if ($bool == True){
		echo 'Thank you for contacting us. We\'ll be in touch with you very soon.'
	}
}

?> 