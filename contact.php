<!DOCTYPE HTML>
<html>
<head>
  <title>Contact Us</title>
  <meta http-equiv="content-type" content="text/html; charset=utf-8" />
  <meta name="description" content="" />
  <meta name="keywords" content="" />
  <link href="http://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700,800" rel="stylesheet" type="text/css" />
  <!--[if lte IE 8]><script src="js/html5shiv.js"></script><![endif]-->
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
  <script src="js/skel.min.js"></script>
  <script src="js/skel-panels.min.js"></script>
  <script src="js/init.js"></script>
  <noscript>
   <link rel="stylesheet" href="css/skel-noscript.css" />
   <link rel="stylesheet" href="css/style.css" />
   <link rel="stylesheet" href="css/style-desktop.css" />
 </noscript>
</head>
<body>

  <!-- Header -->
  <div id="header-wrapper">

   <div id="header" class="container">

    <div id="logo"><a href="index.html"><img src="images/logotext.png" height ="85px" width="370px"></a></div>
    <nav id="nav">
      <ul>
        <li><a href="about.html">About</a></li>
        <li><a href="team.html">Team</a></li>
        <li><a href="design.html">Design</a></li>
        <li><a href="sponsors.html">Sponsors</a></li>
        <li class="current_page_item"><a href="contact.html">Contact</a></li>
      </ul>
    </nav>

  </div>

</div>
<!-- Header Ends Here -->

<!-- Page -->

<div id="page">
  <div class="container">
    <div class="row">

      <div id="content" class="12u skel-cell-important">

        <div class="sectionTitle text-center">
          <header>
            <h2 class="main-title">Drop Us a Line</h2>
          </header>
          <div class="clearfix"></div>

        </div>

        <form id="contact-form" class="styled-form" action="contact.php" method="post" accept-charset="utf-8">

          <div class="article">
            <h1>We'd love to hear from you! Whether you are looking to help sponsor our team, or just learn about what we are doing, our team would love to talk to you. We'll get back to you as soon as we can!</h1>
          </div>
        </br>

        <div class="contactus" id="contactus">
          <h1 class="row half first">
            <label for="name">Name: <span class="required">*</span></label>
            <span class="field" margin="auto"><input type="text" name="name" id="id_name" /></span>
          </h1>
          <h1 class="row half">
            <label for="email">Your Email: <span class="required">*</span></label>
            <span class="field"><input type="text" name="email" id="id_email" /></span>
          </h1>                      
          <h1 class="row half">
            <label for="topic">Topic: <span class="required">*</span></label>
            <span class="field"><input type="text" name="email" id="id_email" /></span>
          </h1>
          <h1 class="row">
            <label for="message">Message: <span class="required">*</span></label>
            <span class="field"><textarea cols="40" rows="5" name="message" id="id_message"></textarea></span>
          </h1>
          <h1 class="submit-row">
            <button type="submit">SEND</button>
          </h1>
        </div>
      </form>

      <?php

      if(!isset($_POST['name']) ||

        !isset($_POST['email']) ||

        !isset($_POST['topic']) ||

        !isset($_POST['message'])) {

          echo "A required field was not filled out"

        }

        $to      = 'abhigupta.1600@gmail.com';
        $from    = $_POST['email'];
        $subject = $_POST['topic'];
        $message = $_POST['message'];

        $bool = mail($to, $subject, $message);

        if ($bool == True){
          echo "Thank you for contacting us. We\'ll be in touch with you very soon."
        }
        ?> 


      </div>
    </div>

  </div>
</section>

<!-- /Page -->

<!-- Copyright -->
<div id="copyright" class="container">
  Design: <a href="http://templated.co">TEMPLATED</a> Images: <a href="http://unsplash.com">Unsplash</a> (<a href="http://unsplash.com/cc0">CC0</a>)
</div>


</body>
</html>