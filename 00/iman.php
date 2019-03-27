<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 3/27/19
 * Time: 10:26 AM
 */
function iman1(){
    return iman2();
}
function iman2(){
    echo 123;
}

//iman1();

function iman3(){
    return "iman1";
}

$func = iman3();
$func();