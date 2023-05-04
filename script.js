$(document).ready(function () {
    $(".menu li a").hover(
        function () {
            var link = $(this).attr("href");
            $("#preview").load(link).show();
            $("#preview").css({
                top: $(this).offset().top + 30,
                left: $(this).offset().left + 10,
            });
        },
        function () {
            $("#preview").hide();
        }
    );
});
