$(document).ready(function () {
    var flutter = document.getElementById('flutterCon')
    var post = document.getElementById('pgCon')
    var under = document.getElementById('ugCon')
    var Schooling = document.getElementById('SchoolCon')

    $(".EducationContent .EduButtons .button > .Flutter").click(function (e) {
        flutter.style.display = 'block'
        post.style.display = 'none'
        under.style.display = 'none'
        Schooling.style.display = 'none'
    })

    $(".EducationContent .EduButtons .button > .Post").click(function (e) {
        flutter.style.display = 'none'
        post.style.display = 'block'
        under.style.display = 'none'
        Schooling.style.display = 'none'
    })

    $(".EducationContent .EduButtons .button > .Under").click(function (e) {
        flutter.style.display = 'none'
        post.style.display = 'none'
        under.style.display = 'block'
        Schooling.style.display = 'none'
    })

    $(".EducationContent .EduButtons .button > .Schooling").click(function (e) {
        flutter.style.display = 'none'
        post.style.display = 'none'
        under.style.display = 'none'
        Schooling.style.display = 'block'
    })
})