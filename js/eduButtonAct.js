$(document).ready(function () {
    $(".EducationContent .EduButtons .button > button ").click(function (e) {
        console.log('hello')

        $(".EducationContent .EduButtons .button > button ").removeClass("active");

        $(this).addClass("active");

    });
});