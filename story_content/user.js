function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5ZQ0TqNXe3X":
        Script1();
        break;
  }
}

function Script1()
{
  // Step 1. Connect JavaScript to the Storyline variables
var player = GetPlayer();
var textEntry1=player.GetVar("Stressor1");
var textEntry2=player.GetVar("Response1");
var textEntry3=player.GetVar("Plan1");
var textEntry4=player.GetVar("Stressor2");
var textEntry5=player.GetVar("Response2");
var textEntry6=player.GetVar("Plan2");
var textEntry7=player.GetVar("Stressor3");
var textEntry8=player.GetVar("Response3");
var textEntry9=player.GetVar("Plan3");

// Step 2. The HTML Section - with the Storyline variables inserted
var contents = "<html><head></head><body style='width:650px;padding:20px;'>";
contents+="<div style='font-size:26px;font-weight:bold;margin-top:26px;margin-bottom:20px;'>Stress Management Plan</div>";
contents+="<div style='display:block;border-width:1px';><hr/></div>";
contents+="<div style='font-size:16px;font-weight:bold;'>Stress 1</div>";
contents+="<p>"+textEntry1+"</p>";
contents+="<p>"+textEntry2+"</p>";
contents+="<p>"+textEntry3+"</p>";
contents+="<div style='font-size:16px;font-weight:bold;'>Stress 2</div>";
contents+="<p>"+textEntry4+"</p>";
contents+="<p>"+textEntry5+"</p>";
contents+="<p>"+textEntry6+"</p>";
contents+="<div style='font-size:16px;font-weight:bold;'>Stress 3</div>";
contents+="<p>"+textEntry7+"</p>";
contents+="<p>"+textEntry8+"</p>";
contents+="<p>"+textEntry9+"</p>";
contents+= "</body></html>";

// Step 3. Open the document window, write the HTML contents, and open the print window
var myWindow = window.open("","Print","width=810,height=610,scrollbars=1,resizable=1");
myWindow.document.write(contents);
myWindow.print();
}

