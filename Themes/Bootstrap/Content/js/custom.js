$(document).ready(function () {
    $(".searchMenu").click(function () {
        $(".searchMenu").addClass("in");
    });
});

$(document).ready(function () {
    $(".triggerMenu").on("click", function (e) {
        $(".menuWrapper").toggleClass("active"); //NYT

        $(".fillerClose").toggleClass("active");
    });
});