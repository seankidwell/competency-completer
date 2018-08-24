select student_name, student_grade from students
where student_grade >=
  (select student_grade
  from students
  where student_name = 'Justin')