$('.carousel').carousel({
  interval: 2000
})



$(document).ready(function(){ 

    console.log('hover')
   var activeNavItem = $('.thumbnail.tile.tile-medium.tile-purple.col-md-3')

  activeNavItem.click(function(){
  activeNavItem.removeClass('active');
  $(this).addClass('active')
  });
});


//Set content for programs

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



//Set event listeners for programs

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



//Set content for data

var ucrArrestDataHTML = '<div class="tableauPlaceholder" id="viz1587396794613" style="position: relative">' +
						'<noscript>' +
						'<a href="https:&#47;&#47;www.doj.state.wi.us&#47;dles&#47;bjia&#47;ucr-arrest-data"><img alt="" src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;UC&#47;UCRArrests&#47;DataNotesReadMe&#47;1_rss.png" style="border: none" /></a>' +
        				'<noscript>' +
        				'<object class="tableauViz"  style="display:none;"><param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" /> <param name="embed_code_version" value="3" /> <param name="site_root" value=" " /><param name="name" value="UCRArrests&#47;DataNotesReadMe" /><param name="tabs" value="yes" /><param name="toolbar" value="yes" /><param name="static_image" value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;UC&#47;UCRArrests&#47;DataNotesReadMe&#47;1.png" /> <param name="animate_transition" value="yes" /><param name="display_static_image" value="yes" /><param name="display_spinner" value="yes" /><param name="display_overlay" value="yes" /><param name="display_count" value="yes" /></object>'+
        				'</div> ' +
        				'<script type="text/javascript">                    var divElement = document.getElementById("viz1587396794613");                    var vizElement = divElement.getElementsByTagName("object")[0];                    vizElement.style.width="1000px";vizElement.style.height="850px";                    var scriptElement = document.createElement("script");                    scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js;                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script>'
                        




var ucr = '<div class="tableauPlaceholder" id="viz1587396794613" style="position: relative"><noscript><a href="https:&#47;&#47;www.doj.state.wi.us&#47;dles&#47;bjia&#47;ucr-arrest-data"><img alt=" " src="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;UC&#47;UCRArrests&#47;DataNotesReadMe&#47;1_rss.png" style="border: none" /></a></noscript><object class="tableauViz"  style="display:none;"><param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" /> <param name="embed_code_version" value="3" /> <param name="site_root" value="" /><param name="name" value="UCRArrests&#47;DataNotesReadMe" /><param name="tabs" value="yes" /><param name="toolbar" value="yes" /><param name="static_image" value="https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;UC&#47;UCRArrests&#47;DataNotesReadMe&#47;1.png" /> <param name="animate_transition" value="yes" /><param name="display_static_image" value="yes" /><param name="display_spinner" value="yes" /><param name="display_overlay" value="yes" /><param name="display_count" value="yes" /></object></div>                <script type="text/javascript">                    var divElement = document.getElementById("viz1587396794613");                    var vizElement = divElement.getElementsByTagName("object")[0];                    vizElement.style.width="1000px";vizElement.style.height="850px";                    var scriptElement = document.createElement("script");                    scriptElement.src = "https://public.tableau.com/javascripts/api/viz_v1.js";                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script>'



var myvar = '<div class=\'tableauPlaceholder\' id=\'viz1587399162124\' style=\'position: relative\'><noscript><a href=\'https://www.doj.state.wi.us/dles/bjia/ucr-sex-offense-data\'><img alt=\' \' src=\'https://public.tableau.com/static/images/UC/UCRSexOffenseData-TabVersion/OffenseRates/1_rss.png\' style=\'border: none\' /></a></noscript><object class=\'tableauViz\'  style=\'display:none;\'><param name=\'host_url\' value=\'https%3A%2F%2Fpublic.tableau.com%2F\' /> <param name=\'embed_code_version\' value=\'3\' /> <param name=\'site_root\' value=\'\' /><param name=\'name\' value=\'UCRSexOffenseData-TabVersion/OffenseRates\' /><param name=\'tabs\' value=\'yes\' /><param name=\'toolbar\' value=\'yes\' /><param name=\'static_image\' value=\'https://public.tableau.com/static/images/UC/UCRSexOffenseData-TabVersion/OffenseRates/1.png\' /> <param name=\'animate_transition\' value=\'yes\' /><param name=\'display_static_image\' value=\'yes\' /><param name=\'display_spinner\' value=\'yes\' /><param name=\'display_overlay\' value=\'yes\' /><param name=\'display_count\' value=\'yes\' /></object></div>                <script type=\'text/javascript\'>                    var divElement = document.getElementById(\'viz1587399162124\');                    var vizElement = divElement.getElementsByTagName(\'object\')[0];                    vizElement.style.width=\'1000px\';vizElement.style.height=\'850px\';                    var scriptElement = document.createElement(\'script\');                    scriptElement.src = \'https://public.tableau.com/javascripts/api/viz_v1.js\';                    vizElement.parentNode.insertBefore(scriptElement, vizElement);                </script>';
	




/*

$(document).ready(function(){ 
  $('#ucrArrestData').on('click', function(e) {
  	console.log("poopy")

    // Prevent the page from reloading
  
	document.getElementById("containerContent").innerHTML = myvar
  });
});
*/


