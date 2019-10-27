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

function displayStudents() {
  var list = document.getElementById("student_col");

  for (var student of students) {
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
}

// goalData = []
// function onAdd() {
//   var goalTable = document.getElementById("goal_table");
//   for (i = 1; i < goalTable.rows.length; i++) {
//     console.log(goalTable.rows.item(i));
//     console.log(goalTable.rows.item(i).cells);
//   }
// }

// function onEdit() {

// }

// function onDelete() {

// }

$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
	var actions = $("table td:last-child").html();
	// Append table with add row form on add new button click
    $(".add-new").click(function(){
		$(this).attr("disabled", "disabled");
		var index = $("table tbody tr:last-child").index();
        var row = '<tr>' +
            '<td><input type="text" class="form-control" name="name" id="name"></td>' +
            '<td><input type="text" class="form-control" name="department" id="department"></td>' +
            '<td><input type="text" class="form-control" name="phone" id="phone"></td>' +
			'<td>' + actions + '</td>' +
        '</tr>';
    	$("table").append(row);		
		$("table tbody tr").eq(index + 1).find(".add, .edit").toggle();
        $('[data-toggle="tooltip"]').tooltip();
    });
	// Add row on add button click
	$(document).on("click", ".add", function(){
		var empty = false;
		var input = $(this).parents("tr").find('input[type="text"]');
        input.each(function(){
			if(!$(this).val()){
				$(this).addClass("error");
				empty = true;
			} else{
                $(this).removeClass("error");
            }
		});
		$(this).parents("tr").find(".error").first().focus();
		if(!empty){
			input.each(function(){
				$(this).parent("td").html($(this).val());
			});			
			$(this).parents("tr").find(".add, .edit").toggle();
			$(".add-new").removeAttr("disabled");
		}		
    });
	// Edit row on edit button click
	$(document).on("click", ".edit", function(){		
        $(this).parents("tr").find("td:not(:last-child)").each(function(){
			$(this).html('<input type="text" class="form-control" value="' + $(this).text() + '">');
		});		
		$(this).parents("tr").find(".add, .edit").toggle();
		$(".add-new").attr("disabled", "disabled");
    });
	// Delete row on delete button click
	$(document).on("click", ".delete", function(){
        $(this).parents("tr").remove();
		$(".add-new").removeAttr("disabled");
    });
});
