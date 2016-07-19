
function authenticateUser(username,password)
{
	var data = {username:username, password:password};

	$.ajax({
      url: 'Authenticate',
      type: 'GET',
      dataType: 'json',
      data: data,
      success: function(data, status) {
      	Redirect(data);
      },
      error: function(xhr, desc, err) {
        $("#errlabel").text("Invalid login details");
      }
      });
}


/**
 * This method sends the data to servlet
 */
function sendToServlet(data,url,action, method){
	var xmlhttp = new XMLHttpRequest();  
	xmlhttp.onreadystatechange = function callback() {  
	     if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	    	 var response = JSON.parse(xmlhttp.responseText);
	    
	    	 if(action == "signin"){
	    		 if(response.result == "Invalid login details"){
	    			 document.getElementById("errlabel").innerHTML ="Invalid login details";
	    		 }
	    		 else{
	    			 $("#myModal").modal('hide');  				 
	    			 window.location="index.html";
	    		 }  	 
	    	 }
	    	 if(action == "register"){

	    		 if(response.result == "User name already exists"){
	    			 document.getElementById("registererrlabel").innerHTML ="User name already exists";
	    			 return;
	    		 }
	    		 if(response.result == "Registration succeeded"){
	    			 $("#registerModal").modal('hide');
	    		 }
	    	 }
	    	 if(action == "LoadDevice"){
	    		 loadControls(response);
	    	 }
	    	 if(action == "StatusChange"){
	    	 }
	    	 if(action == "SessionValidation"){

	    		 if(response.result == "Not_Authenticated"){
	    			 window.location="signin.html";
	    		 }
	    	 }
	    	 if(action == "Logout"){
	    		 window.location="signin.html";
	    	 }
	    	 if(action == "UIUpdate"){
	    		 if(response.result == "changed"){
	    			 sendToServlet("","smartdevices", "LoadDevice","GET");
	    		 }
	    	 }
	     }
	     else {  
	       // have not received data from server yet  
	     }  
	};  
	xmlhttp.open(method, url, true);  
	xmlhttp.setRequestHeader('Content-Type', 'application/JSON;charset=UTF-8');
	xmlhttp.send(JSON.stringify(data))  
 }
 


/**
 * This method is called when the user submit the credentials
 */
function onSignin(){
	var username = $("#username").val();
	var password = $("#inputPassword").val();
	$("#errlabel").text("");
	
	if(username == "" || password ==""){
	$("#errlabel").text("Fields cannot be blank");
		return;
	}
	
	var data = {username:username, password:password, level:""};
	sendToServlet(data,"Authenticate", "signin","POST");
}

function OnLogout(){
	sendToServlet("","Logout", "Logout","GET");
}

/**
 * This method clear the login form
 */
function cleanLoginform(){
	$("#errlabel").text("");
	$("#username").text("");
	$("#inputPassword").text("");
}

function checkupdate(){
	sendToServlet("","UIUpdate", "UIUpdate","GET");
}

/* Switch ON/OFF click functions */
$('#cmn-toggle-1').click(function() {
	var status = 0; 
    var id = $("#ID1").text();
    console.log(id);
	if(this.checked)
    {   
        status = 1;  	
    }
    var data = {id:id, status:status, action:"status"};
    sendToServlet(data,"smartdevices", "StatusChange","POST");
});
$('#cmn-toggle-2').click(function() {
	var status = 0;
    var id = $("#ID2").text();
    console.log(id);
    if(this.checked)
    {   
        status = 1;     
    }
    var data = {id:id, status:status, action:"status"};
    sendToServlet(data,"smartdevices", "StatusChange","POST");
});
$('#cmn-toggle-3').click(function() {
	var status = 0;
    var id = $("#ID3").text();
    if(this.checked)
    {   
        status = 1;     
    }
    var data = {id:id, status:status, action:"status"};
    sendToServlet(data,"smartdevices", "StatusChange","POST");
});
$('#cmn-toggle-4').click(function() {
	var status = 0;
    var id = $("#ID4").text();
    if(this.checked)
    {   
        status = 1;     
    }
    var data = {id:id, status:status, action:"status"};
    sendToServlet(data,"smartdevices", "StatusChange","POST");
});
$('#cmn-toggle-5').click(function() {
	var status = 0;
    var id = $("#ID5").text();
    if(this.checked)
    {   
        status = 1;     
    }
    var data = {id:id, status:status, action:"status"};
    sendToServlet(data,"smartdevices", "StatusChange","POST");
});
$('#cmn-toggle-6').click(function() {
	var status = 0;
    var id = $("#ID6").text();
    if(this.checked)
    {   
        status = 1;     
    }
    var data = {id:id, status:status, action:"status"};
    sendToServlet(data,"smartdevices", "StatusChange","POST");
});
/* End of Switch ON/OFF Click functions */

/* Sending Data via Button Click */ 
$('button').click(function(){

if(this.id =="submitTV")
{
	var id = $("#ID1").text();
	 var timerSet = 0;
	if ($('#group1').is(":checked"))
	{
	    if ($('#timerbox1').val() == 0) {
            sweetAlert("Error", "Timer cannot be empty, please enter a value!", "error");
            return;
        }
        else 
        {
        	timerSet=1;
            var val = $('#timerbox1').val();
            var id = $("#ID1").text();
            var toggle = 0;
            if ($('#togglecheck1').is(":checked"))
            {
                toggle = 1;
            }
            var data ={id:id, timerset:timerSet, timervalue:val, toggle:toggle, action:"timer"};
            swal("Success!", "Timer is enabled", "success");
            sendToServlet(data,"smartdevices", "TimerSet","POST");
        }
	    
	}
	else{
	   	 var data ={id:id, timerset:timerSet, timervalue:val, toggle:toggle, action:"timer"};
	   	 sendToServlet(data,"smartdevices", "TimerSet","POST");
  }
}	
else if (this.id =="submitFridge") 
{
	 var id = $("#ID2").text();
	 var timerSet = 0;
    if ($('#group2').is(":checked"))
    {
        if ($('#timerbox2').val() == 0) {
            sweetAlert("Error", "Timer cannot be empty, please enter a value!", "error");
            return;
        }
        else 
        {
            var val = $('#timerbox2').val();
            timerSet = 1;
            var toggle = 0;
            if ($('#togglecheck2').is(":checked"))
            {
                toggle = 1;
            }
            var data ={id:id, timerset:timerSet, timervalue:val, toggle:toggle, action:"timer"};
            swal("Success!", "Timer is enabled", "success");
            sendToServlet(data,"smartdevices", "TimerSet","POST");
        }
        
    }
    else{
	   	 var data ={id:id, timerset:timerSet, timervalue:val, toggle:toggle, action:"timer"};
	   	 sendToServlet(data,"smartdevices", "TimerSet","POST");
  }
}
else if (this.id =="submitWashing") 
{
	var timerSet = 0;
	 var id = $("#ID3").text();
    if ($('#group3').is(":checked"))
    {
        if ($('#timerbox3').val() == 0) {
            sweetAlert("Error", "Timer cannot be empty, please enter a value!", "error");
            return;
        }
        else 
        {
            var val = $('#timerbox3').val();
            var toggle = 0;
            timerSet = 1;
            if ($('#togglecheck3').is(":checked"))
            {
                toggle = 1;
            }
            var data ={id:id, timerset:timerSet, timervalue:val, toggle:toggle, action:"timer"};
            swal("Success!", "Timer is enabled", "success");
            sendToServlet(data,"smartdevices", "TimerSet","POST");
        }
        
    }
    else{
	   	 var data ={id:id, timerset:timerSet, timervalue:val, toggle:toggle, action:"timer"};
	   	 sendToServlet(data,"smartdevices", "TimerSet","POST");
  }
}
else if (this.id =="submitHeater1") 
{
	var id = $("#ID4").text();
	var timerSet = 0;
    if ($('#group4').is(":checked"))
    {
        if ($('#timerbox4').val() == 0) {
            sweetAlert("Error", "Timer cannot be empty, please enter a value!", "error");
            return;
        }
        else 
        {
            var val = $('#timerbox4').val();
            var toggle = 0;
            timerSet = 1;
            if ($('#togglecheck4').is(":checked"))
            {
                toggle = 1;
            }
            var data ={id:id, timerset:timerSet, timervalue:val, toggle:toggle, action:"timer"};
            swal("Success!", "Timer is enabled", "success");
            sendToServlet(data,"smartdevices", "TimerSet","POST");
        }
        
    }
    else{
	   	 var data ={id:id, timerset:timerSet, timervalue:val, toggle:toggle, action:"timer"};
	   	 sendToServlet(data,"smartdevices", "TimerSet","POST");
   }
}
else if (this.id =="submitHeater2") 
{
	var id = $("#ID5").text();
	var timerSet = 0;
    if ($('#group5').is(":checked"))
    {
        if ($('#timerbox5').val() == 0) {
            sweetAlert("Error", "Timer cannot be empty, please enter a value!", "error");
            return;
        }
        else 
        {
            var val = $('#timerbox5').val();
            var toggle = 0;
            timerSet = 1;
            if ($('#togglecheck5').is(":checked"))
            {
                toggle = 1;
            }
            var data ={id:id, timerset:timerSet, timervalue:val, toggle:toggle, action:"timer"};
            swal("Success!", "Timer is enabled", "success");
            sendToServlet(data,"smartdevices", "TimerSet","POST");
        }
        
    }
    else{
	   	 var data ={id:id, timerset:timerSet, timervalue:val, toggle:toggle, action:"timer"};
	   	 sendToServlet(data,"smartdevices", "TimerSet","POST");
   }
}
else if (this.id =="submitAC") 
{
	var id = $("#ID6").text();
	var timerSet = 0;
	if ($('#group6').is(":checked"))
    {
        if ($('#timerbox6').val() == 0) {
            sweetAlert("Error", "Timer cannot be empty, please enter a value!", "error");
            return;
        }
        else 
        {
            var val = $('#timerbox6').val();
            timerSet = 1;
            var toggle = 0;
            if ($('#togglecheck6').is(":checked"))
            {
                toggle = 1;
            }
            var data ={id:id, timerset:timerSet, timervalue:val, toggle:toggle, action:"timer"};
            swal("Success!", "Timer is enabled", "success");
            sendToServlet(data,"smartdevices", "TimerSet","POST");
        }
    }
    else{
    	 var data ={id:id, timerset:timerSet, timervalue:val, toggle:toggle, action:"timer"};
    	 sendToServlet(data,"smartdevices", "TimerSet","POST");
    }
}

});

/* Alert System  */
function displayAlerts($ul, data) {
   
    // $.each(data, function(key, value)
    for (var i = data.length - 1; i >= 0; i--) {

        $ul.append($("<li>").html(data[i]));
        $("li").css("list-style", "none");
        $("li").css("padding","6px");
    }
     
}
