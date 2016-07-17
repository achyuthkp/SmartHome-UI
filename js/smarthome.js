/* Switch ON/OFF click functions */
$('#cmn-toggle-1').click(function() {
	var status = 0;
	if(this.checked)
    {   
        status = 1;  	
    }
    var data = {status:status};

});
$('#cmn-toggle-2').click(function() {
	var status = 0;
    if(this.checked)
    {   
        status = 1;     
    }
    var data = {status:status};

});
$('#cmn-toggle-3').click(function() {
	var status = 0;
    if(this.checked)
    {   
        status = 1;     
    }
    var data = {status:status};
    
});
$('#cmn-toggle-4').click(function() {
	var status = 0;
    if(this.checked)
    {   
        status = 1;     
    }
    var data = {status:status};
    
});
$('#cmn-toggle-5').click(function() {
	var status = 0;
    if(this.checked)
    {   
        status = 1;     
    }
    var data = {status:status};
    
});
$('#cmn-toggle-6').click(function() {
	var status = 0;
    if(this.checked)
    {   
        status = 1;     
    }
    var data = {status:status};
    
});
/* End of Switch ON/OFF Click functions */

/* Sending Data via Button Click */ 
$('button').click(function(){

if(this.id =="submitTV")
{

	if ($('#group1').is(":checked"))
	{
	    if ($('#timerbox1').val() == 0) {
            alert("Timer cannot be empty! Enter a value");
            return;
        }
        else 
        {
            var val = $('#timerbox1').val();
            var toggle = 0;
            if ($('#togglecheck1').is(":checked"))
            {
                toggle = 1;
            }
            var data ={timervalue:val, toggle:toggle};
        }
	    
	}
}	
else if (this.id =="submitFridge") 
{
    if ($('#group2').is(":checked"))
    {
        if ($('#timerbox2').val() == 0) {
            alert("Timer cannot be empty! Enter a value");
            return;
        }
        else 
        {
            var val = $('#timerbox2').val();
            var toggle = 0;
            if ($('#togglecheck2').is(":checked"))
            {
                toggle = 1;
            }
            var data ={timervalue:val, toggle:toggle};
        }
        
    }
}
else if (this.id =="submitWashing") 
{
    if ($('#group3').is(":checked"))
    {
        if ($('#timerbox3').val() == 0) {
            alert("Timer cannot be empty! Enter a value");
            return;
        }
        else 
        {
            var val = $('#timerbox3').val();
            var toggle = 0;
            if ($('#togglecheck3').is(":checked"))
            {
                toggle = 1;
            }
            var data ={timervalue:val, toggle:toggle};
        }
        
    }
}
else if (this.id =="submitHeater1") 
{
    if ($('#group4').is(":checked"))
    {
        if ($('#timerbox4').val() == 0) {
            alert("Timer cannot be empty! Enter a value");
            return;
        }
        else 
        {
            var val = $('#timerbox4').val();
            var toggle = 0;
            if ($('#togglecheck4').is(":checked"))
            {
                toggle = 1;
            }
            var data ={timervalue:val, toggle:toggle};
        }
        
    }
}
else if (this.id =="submitHeater2") 
{
    if ($('#group5').is(":checked"))
    {
        if ($('#timerbox5').val() == 0) {
            sweetAlert("Oops...", "Timer cannot be empty!", "error");
            return;
        }
        else 
        {
            var val = $('#timerbox5').val();
            var toggle = 0;
            if ($('#togglecheck5').is(":checked"))
            {
                toggle = 1;
            }
            var data ={timervalue:val, toggle:toggle};
            swal("Great!", "The data is submitted!", "success");
        }
        
    }
}
else if (this.id =="submitAC") 
{
    if ($('#group6').is(":checked"))
    {
        if ($('#timerbox6').val() == 0) {
            alert("Timer cannot be empty! Enter a value");
            return;
        }
        else 
        {
            var val = $('#timerbox6').val();
            var toggle = 0;
            if ($('#togglecheck6').is(":checked"))
            {
                toggle = 1;
            }
            var data ={timervalue:val, toggle:toggle};
        }
        
    }
}

});
