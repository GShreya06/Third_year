$(document).ready(function () {
    $('#subm').click(function () {
        firname = $('#fname').val();
        lasname = $('#fname').val();
        mobile = $('#fname').val();
        email = $('#fname').val();
        const courses = [];
        $("input[type=checkbox]:checked").each(function () {
            courses.push($(this).val());
        });

        function Student(fname, lname, mob, eid, courses) {
            this.fname = firname;
            this.fname = firname;
            this.fname = firname;
            this.fname = firname;
        }

        var student1 = new Student(firname, lname, mob, email, courses);
        console.log(student1)
    });
});
