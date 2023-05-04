$(document).ready(function () {
    $(".menu li a").hover(
        function () {
            var link = $(this).attr("href");
            $.ajax({
                url: link,
                type: 'GET',
                success: function (data) {
                    $("#preview").html(data).show();
                    $("#preview").css({
                        top: $(this).offset().top + 30,
                        left: $(this).offset().left + 10,
                    });
                },
                error: function () {
                    $("#preview").html('<p>Error al cargar la página</p>').show();
                    $("#preview").css({
                        top: $(this).offset().top + 30,
                        left: $(this).offset().left + 10,
                    });
                }
            });
        },
        function () {
            $("#preview").hide();
        }
    );
});
