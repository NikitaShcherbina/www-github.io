<?php
 
/* Задаем переменные */
$email = htmlspecialchars($_POST["email"]);
$tel = htmlspecialchars($_POST["tel"]);
$fancy = htmlspecialchars($_POST["fancy-textarea"]);
$card = stripslashes($_POST["card"]);
$shop = stripslashes($_POST["shop"]);
$orig = stripslashes($_POST["orig"]);
 
function IsChecked($chkname,$value) {
  if(!empty($_POST[$chkname])) {
      foreach($_POST[$chkname] as $chkval) {
          if($chkval == $value) {
              return true;
          }
      }
  }
  return false;
}

if(IsChecked('landing','Лендинг')) {
  $landing = $_POST['landing'];
  $discript = "";
  foreach($landing as $check) { 
    $discript .= "$check\n";
  }
} elseif (IsChecked('card','Сайт визитка')) {
  $card = $_POST['card'];
  $discript = "";
  foreach($card as $check) { 
    $discript .= "$check\n";
  }
} elseif (IsChecked('shop','Каталог/и-магазин')) {
  $shop = $_POST['shop'];
  $discript = "";
  foreach($shop as $check) { 
    $discript .= "$check\n";
  }
} elseif (IsChecked('orig','Хочу что-то уникальное')) {
  $orig = $_POST['orig'];
  $discript = "";
  foreach($orig as $check) { 
    $discript .= "$check\n";
  }
};


/* Ваш адрес и тема сообщения */
$address = "lex.webzone@gmail.com";
$sub = "Заявка на сайт";
 
/* Формат письма */
$mes = "Заявка на сайт.\n
Электронный адрес отправителя: $email
Телефон отправителя: $tel
Описание задачи: $fancy
Подробности: $discript
";
 
 

/* Отправляем сообщение, используя mail() функцию */
$from  = "mail@web-zone.kh.ua";
if (mail($address, $sub, $mes, 'From:'.$from)) {
 header('Refresh: 5; URL=https://web-zone.kh.ua');
 echo '<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>
    <body>Письмо отправлено, через 5 секунд вы вернетесь на главную страницу</body>';}
else {
 header('Refresh: 5; URL=https://web-zone.kh.ua');
 echo '<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>
    <body>Письмо не отправлено, через 5 секунд вы вернетесь на главную страницу</body>';}
?>