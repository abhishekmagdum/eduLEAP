var students = [
    ['Name', 'Assn1', 'Assn2'],
    ['Johnny', 0.75, 0.60],
    ['John', 0.67, 0.77],
    ['Jimmy', 0.70, 0.72],
    ['Jordan',0.82,0.68],
    ['Emily', 0.75, 0.60],
    ['Emilia', 0.67, 0.77],
    ['Alex', 0.70, 0.72],
    ['Alexandra',0.82,0.68]
  ];

var list = document.getElementById("student_col");

for (var student of students) {
    console.log(student);
    var ul = document.createElement('ul');
    ul.className = "list-group list-group-horizontal";
    var eval0 = document.createElement('li');
    var eval1 = document.createElement('li');
    var eval2 = document.createElement('li');
    var eval3 = document.createElement('li');
    var eval4 = document.createElement('li');
    
    eval0.innerHTML = student[0];
    eval1.innerHTML = student[1];
    eval2.innerHTML = student[2];

    eval0.className = "list-group-item col-md-4";
    eval1.className = "list-group-item col-md-4";
    eval2.className = "list-group-item col-md-4";

    ul.appendChild(eval0);
    ul.appendChild(eval1);
    ul.appendChild(eval2);
    list.appendChild(ul);
}
