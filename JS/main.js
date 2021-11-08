$(document).ready(function () {
    // alert("Welcome, Enjoy!");
    $("#head1").css({ color: "#191970", "background-color": "#E6E6FA" });
    $("#button-hide").click(function () {
        $('#head2').animate({
            fontSize: '80px',
            letterSpacing: '32px'
        })
    });

    $(".navbar-nav").on("click", function () {
      $(".navbar-nav .active").removeClass("active");
      $(".navbar-nav").addClass("active");
    });
});