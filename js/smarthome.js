
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
function sendToServlet(data,url,action){
	var xmlhttp = new XMLHttpRequest();  
	xmlhttp.onreadystatechange = function callback() {  
	     if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	    	 var identitylist = JSON.parse(xmlhttp.responseText);
	    
	    	 if(action == "signin"){
	    		 if(identitylist.result == "Invalid login details"){
	    			 document.getElementById("errlabel").innerHTML ="Invalid login details";
	    		 }
	    		 else{
	    			 $("#myModal").modal('hide');  				 
	    			 window.location="index.html";
	    		 }  	 
	    	 }
	    	 if(action == "register"){

	    		 if(identitylist.result == "User name already exists"){
	    			 document.getElementById("registererrlabel").innerHTML ="User name already exists";
	    			 return;
	    		 }
	    		 if(identitylist.result == "Registration succeeded"){
	    			 $("#registerModal").modal('hide');
	    		 }
	    	 }
	     }
	     else {  
	       // have not received data from server yet  
	     }  
	};  
	xmlhttp.open("POST", url, true);  
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
	sendToServlet(data,"Authenticate", "signin");
}


/**
 * This method clear the login form
 */
function cleanLoginform(){
	$("#errlabel").text("");
	$("#username").text("");
	$("#inputPassword").text("");
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

});
$('#cmn-toggle-3').click(function() {
	var status = 0;
    var id = $("#ID3").text();
    if(this.checked)
    {   
        status = 1;     
    }
    var data = {id:id, status:status, action:"status"};
    
});
$('#cmn-toggle-4').click(function() {
	var status = 0;
    var id = $("#ID4").text();
    if(this.checked)
    {   
        status = 1;     
    }
    var data = {id:id, status:status, action:"status"};
    
});
$('#cmn-toggle-5').click(function() {
	var status = 0;
    var id = $("#ID5").text();
    if(this.checked)
    {   
        status = 1;     
    }
    var data = {id:id, status:status, action:"status"};
    
});
$('#cmn-toggle-6').click(function() {
	var status = 0;
    var id = $("#ID6").text();
    if(this.checked)
    {   
        status = 1;     
    }
    var data = {id:id, status:status, action:"status"};
    
});
/* End of Switch ON/OFF Click functions */

/* Sending Data via Button Click */ 
$('button').click(function(){

if(this.id =="submitTV")
{

	if ($('#group1').is(":checked"))
	{
	    if ($('#timerbox1').val() == 0) {
            sweetAlert("Error", "Timer cannot be empty, please enter a value!", "error");
            return;
        }
        else 
        {
            var val = $('#timerbox1').val();
            var id = $("#ID1").text();
            var toggle = 0;
            if ($('#togglecheck1').is(":checked"))
            {
                toggle = 1;
            }
            var data ={id:id, timervalue:val, toggle:toggle, action:"timer"};
            swal("Success!", "Timer is enabled", "success");
        }
	    
	}
}	
else if (this.id =="submitFridge") 
{
    if ($('#group2').is(":checked"))
    {
        if ($('#timerbox2').val() == 0) {
            sweetAlert("Error", "Timer cannot be empty, please enter a value!", "error");
            return;
        }
        else 
        {
            var val = $('#timerbox2').val();
            var id = $("#ID2").text();
            var toggle = 0;
            if ($('#togglecheck2').is(":checked"))
            {
                toggle = 1;
            }
            var data ={id:id, timervalue:val, toggle:toggle, action:"timer"};
            swal("Success!", "Timer is enabled", "success");
        }
        
    }
}
else if (this.id =="submitWashing") 
{
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
            var id = $("#ID3").text();
            if ($('#togglecheck3').is(":checked"))
            {
                toggle = 1;
            }
            var data ={id:id, timervalue:val, toggle:toggle, action:"timer"};
            swal("Success!", "Timer is enabled", "success");
        }
        
    }
}
else if (this.id =="submitHeater1") 
{
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
            var id = $("#ID4").text();
            if ($('#togglecheck4').is(":checked"))
            {
                toggle = 1;
            }
            var data ={id:id, timervalue:val, toggle:toggle, action:"timer"};
            swal("Success!", "Timer is enabled", "success");
        }
        
    }
}
else if (this.id =="submitHeater2") 
{
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
            var id = $("#ID5").text();
            if ($('#togglecheck5').is(":checked"))
            {
                toggle = 1;
            }
            var data ={id:id, timervalue:val, toggle:toggle, action:"timer"};
            swal("Success!", "Timer is enabled", "success");
        }
        
    }
}
else if (this.id =="submitAC") 
{
    if ($('#group6').is(":checked"))
    {
        if ($('#timerbox6').val() == 0) {
            sweetAlert("Error", "Timer cannot be empty, please enter a value!", "error");
            return;
        }
        else 
        {
            var val = $('#timerbox6').val();
            var id = $("#ID6").text();
            var toggle = 0;
            if ($('#togglecheck6').is(":checked"))
            {
                toggle = 1;
            }
            var data ={id:id, timervalue:val, toggle:toggle, action:"timer"};
            swal("Success!", "Timer is enabled", "success");
        }
        
    }
}

});
