$('.carousel').carousel({
  interval: 2000
})






var coreHTML = '<div class="content">' +
                        '<h3> <strong>Comprehensive Outcome, Research and Evaluation</strong></h3>' +
                        '<br>'+
                        '<p> The CORE Reporting System is designed to collect participant-level data for treatment court and diversion programs in the State of Wisconsin. The data can be utilized for performance measurement, evaluation, and tracking of participant progress through various programs. This is a secure site intended for authorized users at the state and local level.</p>' +
                        '<p>The BJIA also serves as the Statistical Analysis Center (SAC) for the State of Wisconsin and contributes directly to the ability of the Department of Justice to provide research results that aid in decision making for criminal justice programs and policies.  The BJIA provides additional program information, including data publications and UCR forms and manuals on the Department’s Law Enforcement website  <a href = "https://wilenet.org/html/justice-programs/programs/justice-stats/index.htm/" target="_blank">wilenet.org</a>.' +
                    '</div>';



var darHTML = '<div class="content">' +
                        '<h3> <strong>DAR</strong></h3>' +
                        '<br>'+
                        '<p> The DAR Reporting System is designed to collect participant-level data for treatment court and diversion programs in the State of Wisconsin. The data can be utilized for performance measurement, evaluation, and tracking of participant progress through various programs. This is a secure site intended for authorized users at the state and local level.</p>' +
                        '<p>The DAR also serves as the Statistical Analysis Center (SAC) for the State of Wisconsin and contributes directly to the ability of the Department of Justice to provide research results that aid in decision making for criminal justice programs and policies.  The BJIA provides additional program information, including data publications and UCR forms and manuals on the Department’s Law Enforcement website  <a href = "https://wilenet.org/html/justice-programs/programs/justice-stats/index.htm/" target="_blank">wilenet.org</a>.' +
                    '</div>';

var ofrHTML = '<div class="content">' +
                        '<h3> <strong>Overdose Fatality Review (OFR)</strong></h3>' +
                        '<br>'+
                        '<p> The OFR Reporting System is designed to collect participant-level data for treatment court and diversion programs in the State of Wisconsin. The data can be utilized for performance measurement, evaluation, and tracking of participant progress through various programs. This is a secure site intended for authorized users at the state and local level.</p>' +
                        '<p>The OFR also serves as the Statistical Analysis Center (SAC) for the State of Wisconsin and contributes directly to the ability of the Department of Justice to provide research results that aid in decision making for criminal justice programs and policies.  The BJIA provides additional program information, including data publications and UCR forms and manuals on the Department’s Law Enforcement website  <a href = "https://wilenet.org/html/justice-programs/programs/justice-stats/index.htm/" target="_blank">wilenet.org</a>.' +
                    '</div>';

var sakiHTML = '<div class="content">' +
                        '<h3> <strong>SAKI</strong></h3>' +
                        '<br>'+
                        '<p> The SAKI Reporting System is designed to collect participant-level data for treatment court and diversion programs in the State of Wisconsin. The data can be utilized for performance measurement, evaluation, and tracking of participant progress through various programs. This is a secure site intended for authorized users at the state and local level.</p>' +
                        '<p>The SAKI also serves as the Statistical Analysis Center (SAC) for the State of Wisconsin and contributes directly to the ability of the Department of Justice to provide research results that aid in decision making for criminal justice programs and policies.  The BJIA provides additional program information, including data publications and UCR forms and manuals on the Department’s Law Enforcement website  <a href = "https://wilenet.org/html/justice-programs/programs/justice-stats/index.htm/" target="_blank">wilenet.org</a>.' +
                    '</div>';


var tadHTML = '<div class="content">' +
                        '<h3> <strong>Treatment and Diversion (TAD)</strong></h3>' +
                        '<br>'+
                        '<p> The TAD Reporting System is designed to collect participant-level data for treatment court and diversion programs in the State of Wisconsin. The data can be utilized for performance measurement, evaluation, and tracking of participant progress through various programs. This is a secure site intended for authorized users at the state and local level.</p>' +
                        '<p>The TAD also serves as the Statistical Analysis Center (SAC) for the State of Wisconsin and contributes directly to the ability of the Department of Justice to provide research results that aid in decision making for criminal justice programs and policies.  The BJIA provides additional program information, including data publications and UCR forms and manuals on the Department’s Law Enforcement website  <a href = "https://wilenet.org/html/justice-programs/programs/justice-stats/index.htm/" target="_blank">wilenet.org</a>.' +
                    '</div>';



$(document).ready(function(){ 
  $('#coreNav').on('click', function(e) {

    // Prevent the page from reloading
  
	document.getElementById("programRow1").innerHTML = coreHTML;
  });
});

$(document).ready(function(){ 
  $('#darNav').on('click', function(e) {

    // Prevent the page from reloading
  
	document.getElementById("programRow1").innerHTML = darHTML;
  });
});

$(document).ready(function(){ 
  $('#ofrNav').on('click', function(e) {

    // Prevent the page from reloading
  
	document.getElementById("programRow1").innerHTML = ofrHTML;
  });
});


$(document).ready(function(){ 
  $('#sakiNav').on('click', function(e) {

    // Prevent the page from reloading
  
	document.getElementById("programRow1").innerHTML = sakiHTML;
  });
});


$(document).ready(function(){ 
  $('#tadNav').on('click', function(e) {

    // Prevent the page from reloading
  
	document.getElementById("programRow1").innerHTML = tadHTML;
  });
});



