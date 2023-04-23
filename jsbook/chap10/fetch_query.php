<?php
$parsed = parse_url($_SERVER['HTTP_REFERER']);
header('Access-Control-Allow-Origin: '.$parsed['scheme'].'://'.$parsed['host']);
$name = htmlspecialchars($_GET['name'], ENT_QUOTES | ENT_HTML5, 'UTF-8');
if($name !== '') {
  print('こんにちは、'.$name.'さん！');
}
