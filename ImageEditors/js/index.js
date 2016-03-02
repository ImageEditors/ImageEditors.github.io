/// <reference path="D:\Git_WorkSpace\ImageEditors\ImageEditors\lib/jquery/jquery-2.2.1.js" />
/// <reference path="D:\Git_WorkSpace\ImageEditors\ImageEditors\lib/bootstrap/bootstrap.js" />

$(function () {
    $("#left_contents").click(function (e) {
        alert("左コンテンツ");
    });
    $("#main_contents").click(function (e) {
        alert("メインコンテンツ");
    });
    $("#right_contents").click(function (e) {
        alert("右コンテンツ");
    });
})