$(function() {
    alert("funct1");
    enable1();
    $("#group1").click(enable1);
});

function enable1() {
  if (this.checked) {

    $("input.group1").removeAttr("disabled");
  } else {
    $("input.group1").attr("disabled", true);
  }
}
/* End of enable 1 */
$(function() {
    enable2();
    $("#group2").click(enable2);
});

function enable2() {
  if (this.checked) {
    $("input.group2").removeAttr("disabled");
  } else {
    $("input.group2").attr("disabled", true);
  }
}
/* End of enable 2 */
$(function() {
    enable3();
    $("#group3").click(enable3);
});

function enable3() {
  if (this.checked) {
    $("input.group3").removeAttr("disabled");
  } else {
    $("input.group3").attr("disabled", true);
  }
}
/* End of enable 3 */
$(function() {
    enable4();
    $("#group4").click(enable4);
});

function enable4() {
  if (this.checked) {
    $("input.group4").removeAttr("disabled");
  } else {
    $("input.group4").attr("disabled", true);
  }
}

/* End of enable 4 */
$(function() {
    enable5();
    $("#group5").click(enable5);
});

function enable5() {
  if (this.checked) {
    $("input.group5").removeAttr("disabled");
  } else {
    $("input.group5").attr("disabled", true);
  }
}

/* End of enable 5 */
$(function() {
    enable6();
    $("#group6").click(enable6);
});

function enable6() {
  if (this.checked) {
    $("input.group6").removeAttr("disabled");
  } else {
    $("input.group6").attr("disabled", true);
  }
}
/* End of enable 6*/
/* Enable Controls for all buttons */
function loadControls(var data)
{
  // var data = [ { id:'1', location:"Living Room", status:1, timer:1, timerbox:60, toggle:1 },
  //            { id:'2', location:"Kitchen", status:1, timer:0, timerbox:0, toggle:0 },
  //            { id:'3', location:"Laundry", status:1, timer:1, timerbox:40, toggle:1 },
  //            { id:'4', location:"Bedroom1", status:1, timer:1, timerbox:60, toggle:1 },
  //            { id:'5', location:"Bedroom2", status:1, timer:1, timerbox:40, toggle:1 },
  //            { id:'6', location:"Bedroom1", status:0, timer:1, timerbox:120, toggle:1 },
  //           ];

  /* ID 1 Content loading */
  $("#ID1").text(data[0].id); 
  $("#location1").text(data[0].location);
  if(data[0].status==1)
  {
    $("#cmn-toggle-1").attr('checked', true);
  }
  else
  {
    $("#cmn-toggle-1").attr('checked', false);
  }
  if (data[0].timer == 1) 
  { alert("call1");
    enable1();
    $("#group1").attr('checked', true);
    $("#timerbox1").val(data[0].timerbox);
    if (data[0].toggle == 1) 
    {
      $("#togglecheck1").attr('checked', true);  
    }
    else
    {
      $("#togglecheck1").attr('checked', false);
    }
  }
  else
  {
    $("#group1").attr('checked', false);
    alert("call2");
    enable1();
  }
  /* ID 2 Content loading */
  $("#ID2").text(data[1].id); 
  $("#location2").text(data[1].location);
  if(data[1].status==1)
  {
    $("#cmn-toggle-2").attr('checked', true);
  }
  else
  {
    $("#cmn-toggle-2").attr('checked', false);
  }
  if (data[1].timer == 1) 
  {
    $("#group2").attr('checked', true);
    $("#timerbox2").val(data[1].timerbox);
    if (data[1].toggle == 1) 
    {
      $("#togglecheck2").attr('checked', true);  
    }
    else
    {
      $("#togglecheck2").attr('checked', false);
    }
  }
  else
  {
    $("#group2").attr('checked', false);
    enable2();
  }
  /* ID 3 Content loading */
  $("#ID3").text(data[2].id); 
  $("#location3").text(data[2].location);
  if(data[2].status==1)
  {
    $("#cmn-toggle-3").attr('checked', true);
  }
  else
  {
    $("#cmn-toggle-3").attr('checked', false);
  }
  if (data[2].timer == 1) 
  {
    $("#group3").attr('checked', true);
    $("#timerbox3").val(data[2].timerbox);
    if (data[2].toggle == 1) 
    {
      $("#togglecheck3").attr('checked', true);  
    }
    else
    {
      $("#togglecheck3").attr('checked', false);
    }
  }
  else
  {
    $("#group3").attr('checked', false);
    enable3();
  }
  /* ID 4 Content loading */
  $("#ID4").text(data[3].id); 
  $("#location4").text(data[3].location);
  if(data[3].status==1)
  {
    $("#cmn-toggle-4").attr('checked', true);
  }
  else
  {
    $("#cmn-toggle-4").attr('checked', false);
  }
  if (data[3].timer == 1) 
  {
    $("#group4").attr('checked', true);
    $("#timerbox4").val(data[3].timerbox);
    if (data[3].toggle == 1) 
    {
      $("#togglecheck4").attr('checked', true);  
    }
    else
    {
      $("#togglecheck4").attr('checked', false);
    }
  }
  else
  {
    $("#group4").attr('checked', false);
    enable4();
  }
  /* ID 5 Content loading */
  $("#ID5").text(data[4].id); 
  $("#location5").text(data[4].location);
  if(data[4].status==1)
  {
    $("#cmn-toggle-5").attr('checked', true);
  }
  else
  {
    $("#cmn-toggle-5").attr('checked', false);
  }
  if (data[4].timer == 1) 
  {
    $("#group5").attr('checked', true);
    $("#timerbox5").val(data[4].timerbox);
    if (data[4].toggle == 1) 
    {
      $("#togglecheck5").attr('checked', true);  
    }
    else
    {
      $("#togglecheck5").attr('checked', false);
    }
  }
  else
  {
    $("#group5").attr('checked', false);
    enable5();
  }
  /* ID 1 Content loading */
  $("#ID6").text(data[5].id); 
  $("#location6").text(data[5].location);
  if(data[5].status==1)
  {
    $("#cmn-toggle-6").attr('checked', true);
  }
  else
  {
    $("#cmn-toggle-6").attr('checked', false);
  }
  if (data[5].timer == 1) 
  {
    $("#group6").attr('checked', true);
    $("#timerbox6").val(data[5].timerbox);
    if (data[5].toggle == 1) 
    {
      $("#togglecheck6").attr('checked', true);  
    }
    else
    {
      $("#togglecheck6").attr('checked', false);
    }
  }
  else
  {
    $("#group6").attr('checked', false);
    enable6();
  }
}