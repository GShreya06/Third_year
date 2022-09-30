$(document).ready(function () {
    $('.registerbtn').click(function () {
        email = $('#fname').val();
        password = $('#fname').val();
        // const courses = [];
        // $("input[type=checkbox]:checked").each(function () {
        //     courses.push($(this).val());
        // });

        function Student(email,password) {
            this.email = email ;
            this.password = password;
        }

        var student1 = new Student(email, password);
        console.log(student1)
    });
});
