select * from classes
join student_class on classes.class_id = student_class.c_id
join students on student_class.s_id = students.student_id
where classes.class_name = 'Algebra'