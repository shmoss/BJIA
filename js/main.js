


$(document).ready(function(){ 



	console.log("changin")
	//console.log($('#categoryDropdown').val())
	//const displayVal = localStorage.getItem('disp');
	//console.log(displayVal)
	//const displayCategory = localStorage.getItem('categoryValue');
	//console.log(displayCategory)
    var topic = $('#topicDropdown').val().toLowerCase();
    console.log(topic);
    type = $('#typeDropdown').val().toLowerCase();
    console.log(type)

  var table = $("#download-forms-table-tbody");
  var trs = table.find('tr');
  trs.hide();

  var filtered = trs.filter(function(index, elem) {
    var tds_topic = $(elem).find('td > div:nth-of-type(3)'); //get the category
	var tds_type = $(elem).find('td > div:nth-of-type(4)'); //get the format
	var all_tds = $(elem).find('td'); //get all td
	//console.log(tds.text())
	console.log(tds_type.text())
	//console.log(tds.eq(1).innerHTML)
    if (topic !== "all" && tds_topic.text().trim().toLowerCase() !== topic) {
      return false;
    }
    if (type !== "all" && tds_type.text().trim().toLowerCase() !== type) {
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

var topicValue 

//($('#categoryDropdown').val('Category: Drug and Overdose Data'))



 

$('.container').on("change", 'select', function() {

  var topic = $('#topicDropdown').val().toLowerCase();
    type = $('#typeDropdown').val().toLowerCase();

  var table = $("#download-forms-table-tbody");
  var trs = table.find('tr');
  trs.hide();

  var filtered = trs.filter(function(index, elem) {
    var tds_topic = $(elem).find('td > div:nth-of-type(3)'); //get the category
	var tds_type = $(elem).find('td > div:nth-of-type(4)'); //get the format
	var all_tds = $(elem).find('td'); //get all td
	//console.log(tds.text())
	console.log(tds_type.text())
	//console.log(tds.eq(1).innerHTML)
    if (topic !== "all" && tds_topic.text().trim().toLowerCase() !== topic) {
      return false;
    }
    if (type !== "all" && tds_type.text().trim().toLowerCase() !== type) {
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
var get_topic_val = $('#topicDropdown').val().toLowerCase()
console.log(get_topic_val)

if (get_topic_val == "topic: arrest data") {
	document.getElementById("arrestData").checked = true;
}

if (get_topic_val == "topic: use of force") {
	document.getElementById("useOfForce").checked = true;
}

if (get_topic_val == "topic: human trafficking") {
	document.getElementById("humanTrafficking").checked = true;
}

if (get_topic_val == "topic: treatment and diversion") {
	document.getElementById("treatmentAndDiversion").checked = true;
}

if (get_topic_val == "topic: drug and overdose data") {
	document.getElementById("drugAndOverdoseData").checked = true;
}

if (get_topic_val == "topic: federal crime data") {
	document.getElementById("federalCrimeData").checked = true;
}


//get value of dropdown based on user selection in homepage
var get_type_val = $('#typeDropdown').val().toLowerCase()
console.log(get_type_val)

if (get_type_val == "content type: dashboard") {
	document.getElementById("dashboard").checked = true;
}

if (get_type_val == "content type: report") {
	document.getElementById("report").checked = true;
}

if (get_type_val == "content type: infographic") {
	document.getElementById("infographic").checked = true;
}

if (get_type_val == "content type: dataset") {
	document.getElementById("dataset").checked = true;
}







//Experiment with checkboxes


$(':checkbox').change(function() {
	
	topic_array = []
	
	$("input:checkbox[name=topic]:checked").each(function(){
    topic_array.push($(this).val().toLowerCase());
	
	
	});

	type_array = []
	
	$("input:checkbox[name=type]:checked").each(function(){
    type_array.push($(this).val().toLowerCase());
	
	
	});

	program_array = []
	
	$("input:checkbox[name=program]:checked").each(function(){
    program_array.push($(this).val().toLowerCase());
	
	
	});
	
	console.log(program_array)

console.log(topic_array)
        // do stuff here. It will fire on any checkbox change
		 var checkboxTopic_arrest = $('#arrestData').val().toLowerCase()
		  var checkboxTopic_useOfForce = $('#useOfForce').val().toLowerCase()
		  var checkboxTopic_humanTrafficking = $('#humanTrafficking').val().toLowerCase()
  console.log(checkboxTopic_arrest, checkboxTopic_useOfForce, checkboxTopic_humanTrafficking)
   console.log("doobie")
   

   
   var table = $("#download-forms-table-tbody");
  var trs = table.find('tr');
  trs.hide();
   
    var filtered = trs.filter(function(index, elem) {
    var tds_topic = $(elem).find('td > div:nth-of-type(3)'); //get the category
	var tds_type = $(elem).find('td > div:nth-of-type(4)'); //get the format
	var all_tds = $(elem).find('td'); //get all td
	//console.log(tds.text())
	//console.log(tds_format.text())
	//console.log(tds_category.text())
	//console.log(tds.eq(1).innerHTML)
	console.log(topic_array,tds_topic.text().trim().toLowerCase()) 
    if (topic_array.includes(tds_topic.text().trim().toLowerCase())&& type_array.includes(tds_type.text().trim().toLowerCase()))  {
      return true;
    }
	if (topic_array.includes(tds_topic.text().trim().toLowerCase())&& type_array.length==0)  {
      return true;
    }
	if (type_array.includes(tds_type.text().trim().toLowerCase())&& topic_array.length==0)  {
      return true;
    }
	if (topic_array.length == 0 && type_array.length == 0)  {
      return true;
    }
    
    return false;
  })
  
   filtered.show();

}); 



})