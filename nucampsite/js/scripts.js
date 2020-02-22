// Start carousel on page load
// Swap between play and pause icons when clicked
$(function () {
    $(".carousel").carousel({
    interval: 2000,
    pause: false
    });
    $("#carouselButton").click(function () {
    if ($("#carouselButton").children("i").hasClass("fa-pause")) {
        $(".carousel").carousel("pause");
        $("#carouselButton").children("i").removeClass("fa-pause");
        $("#carouselButton").children("i").addClass("fa-play");
    } else {
        $(".carousel").carousel("cycle");
        $("#carouselButton").children("i").removeClass("fa-play");
        $("#carouselButton").children("i").addClass("fa-pause");
    }
    });
});

// Activate Reserve modal when user clicks on Reserve Campsite button
$('#reserveButton').click(function() {
    $('#reserveModal').modal();
})

// Activate Login modal when user clicks on Reserve Campsite button
$('#loginButton').click(function() {
    $('#loginModal').modal();
})
