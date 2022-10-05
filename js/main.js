


$(document).ready(function(){ 



	console.log("changin")
	//console.log($('#categoryDropdown').val())
	//const displayVal = localStorage.getItem('disp');
	//console.log(displayVal)
	//const displayCategory = localStorage.getItem('categoryValue');
	//console.log(displayCategory)
    var category = $('#categoryDropdown').val().toLowerCase(),
    format = $('#formatDropdown').val().toLowerCase();

  var table = $("#download-forms-table-tbody");
  var trs = table.find('tr');
  trs.hide();

  var filtered = trs.filter(function(index, elem) {
    var tds_category = $(elem).find('td > div:nth-of-type(3)'); //get the category
	var tds_format = $(elem).find('td > div:nth-of-type(4)'); //get the format
	var all_tds = $(elem).find('td'); //get all td
	//console.log(tds.text())
	console.log(tds_format.text())
	//console.log(tds.eq(1).innerHTML)
    if (category !== "all" && tds_category.text().trim().toLowerCase() !== category) {
      return false;
    }
    if (format !== "all" && tds_format.text().trim().toLowerCase() !== format) {
      return false;
    }

    return true;
  })

  filtered.show();

  if (filtered.length == 0) {
    alert("No Records Found!!!");
  }


console.log("HI")


var selection 
// $('#human-trafficking').click(function(){
	// console.log("clicking human trafficking")
    // //$('#categoryDropdown').val('Category: Use of Force');
	// selection = "Category: Human Trafficking"
	// console.log(selection)
	// localStorage.setItem("selection",'Category: Human Trafficking'); location="research.html"; 
	// if (selection == "Category: Human Trafficking") {
		// console.log("selection is Human Trafficking")
		 // $('#categoryDropdown').val('Category: Human Trafficking');
		// }
	// //return selection
// })

//console.log(selection)

var categoryValue 

//($('#categoryDropdown').val('Category: Drug and Overdose Data'))



 

$('.container').on("change", 'select', function() {

  var category = $('#categoryDropdown').val().toLowerCase(),
    format = $('#formatDropdown').val().toLowerCase();

  var table = $("#download-forms-table-tbody");
  var trs = table.find('tr');
  trs.hide();

  var filtered = trs.filter(function(index, elem) {
    var tds_category = $(elem).find('td > div:nth-of-type(3)'); //get the category
	var tds_format = $(elem).find('td > div:nth-of-type(4)'); //get the format
	var all_tds = $(elem).find('td'); //get all td
	//console.log(tds.text())
	console.log(tds_format.text())
	//console.log(tds.eq(1).innerHTML)
    if (category !== "all" && tds_category.text().trim().toLowerCase() !== category) {
      return false;
    }
    if (format !== "all" && tds_format.text().trim().toLowerCase() !== format) {
      return false;
    }
    return true;
  })

  filtered.show();

  if (filtered.length == 0) {
    alert("No Records Found!!!");
  }

});


//get value of dropdown based on user selection in homepage
var get_category_val = $('#categoryDropdown').val().toLowerCase()
console.log(get_category_val)

if (get_category_val == "category: arrest data") {
	document.getElementById("arrestData").checked = true;
}

if (get_category_val == "category: use of force") {
	document.getElementById("useOfForce").checked = true;
}

if (get_category_val == "category: human trafficking") {
	document.getElementById("humanTrafficking").checked = true;
}

if (get_category_val == "category: treatment and diversion") {
	document.getElementById("treatmentAndDiversion").checked = true;
}

if (get_category_val == "category: drug and overdose data") {
	document.getElementById("drugAndOverdoseData").checked = true;
}

if (get_category_val == "category: federal crime data") {
	document.getElementById("federalCrimeData").checked = true;
}


//get value of dropdown based on user selection in homepage
var get_format_val = $('#formatDropdown').val().toLowerCase()
console.log(get_category_val)

if (get_format_val == "format: dashboard") {
	document.getElementById("dashboard").checked = true;
}

if (get_format_val == "format: report") {
	document.getElementById("report").checked = true;
}

if (get_format_val == "format: infographic") {
	document.getElementById("infographic").checked = true;
}

if (get_format_val == "format: dataset") {
	document.getElementById("dataset").checked = true;
}




//Experiment with checkboxes


$(':checkbox').change(function() {
	
	category_array = []
	
	$("input:checkbox[name=category]:checked").each(function(){
    category_array.push($(this).val().toLowerCase());
	
	
	});

	format_array = []
	
	$("input:checkbox[name=format]:checked").each(function(){
    format_array.push($(this).val().toLowerCase());
	
	
	});
	
	console.log(format_array)

console.log(category_array)
        // do stuff here. It will fire on any checkbox change
		 var checkboxCategory_arrest = $('#arrestData').val().toLowerCase()
		  var checkboxCategory_useOfForce = $('#useOfForce').val().toLowerCase()
		  var checkboxCategory_humanTrafficking = $('#humanTrafficking').val().toLowerCase()
  console.log(checkboxCategory_arrest, checkboxCategory_useOfForce, checkboxCategory_humanTrafficking)
   console.log("doobie")
   

   
   var table = $("#download-forms-table-tbody");
  var trs = table.find('tr');
  trs.hide();
   
    var filtered = trs.filter(function(index, elem) {
    var tds_category = $(elem).find('td > div:nth-of-type(3)'); //get the category
	var tds_format = $(elem).find('td > div:nth-of-type(4)'); //get the format
	var all_tds = $(elem).find('td'); //get all td
	//console.log(tds.text())
	//console.log(tds_format.text())
	//console.log(tds_category.text())
	//console.log(tds.eq(1).innerHTML)
	console.log(category_array,tds_category.text().trim().toLowerCase()) 
    if (category_array.includes(tds_category.text().trim().toLowerCase())&& format_array.includes(tds_format.text().trim().toLowerCase()))  {
      return true;
    }
	if (category_array.includes(tds_category.text().trim().toLowerCase())&& format_array.length==0)  {
      return true;
    }
	if (format_array.includes(tds_format.text().trim().toLowerCase())&& category_array.length==0)  {
      return true;
    }
	if (category_array.length == 0 && format_array.length == 0)  {
      return true;
    }
    
    return false;
  })
  
   filtered.show();

}); 



})