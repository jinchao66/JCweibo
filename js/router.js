
$(function(){

    $("#title-index").load("../weibo/title/title-home.html")
    $("#dynamic-index").load("../weibo/dynamic/dynamic-home.html")



    //切换
    $(".menu-item").click(function() {

        $("#dynamic-index").load($(this).data("page"))
        $("#title-index").load($(this).data("head"))
    })


})