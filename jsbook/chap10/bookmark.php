<?php
header('Content-Type: application/json;charset=UTF-8');
$url = 'https://b.hatena.ne.jp/entry/jsonlite/?url='.$_GET['url'];
print(file_get_contents($url, false, stream_context_create(['http' => 
  ['header' => 'User-Agent: MySample']])));
