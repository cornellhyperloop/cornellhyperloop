function collapseSubteam (oldExpandedTeam){
  var oldId = "#" + oldExpandedTeam;
  $(oldId).removeClass("in");
  console.log("test");

  var imgId = "#" + oldExpandedTeam + "Img";
  console.log(imgId);
  var imgPath = "images/icons/" + (oldExpandedTeam.toLowerCase()) + "_ic.png";
  console.log(imgPath);
  $(imgId).attr("src", imgPath);
}

$(document).ready(function() {
  var expanded = "";

  // Leads
  $("#one").mouseover(function() {
    $("#leadsImg").attr("src", "images/icons/leads_ic_red.png");
  })
  $("#one").mouseout(function() {
    if (expanded != "leads") {
      $("#leadsImg").attr("src", "images/icons/leads_ic.png");
    }
  })
  $("#one").click(function() {
    if($("#leads").hasClass("in")) {
      // if subteam expanded
      $("#leadsImg").attr("src", "images/icons/leads_ic.png");
      expanded = "";
    } else {
      // if subteam not expanded
      $("#leadsImg").attr("src", "images/icons/leads_ic_red.png");

      if (expanded != "") {
        collapseSubteam(expanded);
      }
      expanded = "leads";
    }
  })

  // Business
  $("#two").mouseover(function() {
    $("#businessImg").attr("src", "images/icons/business_ic_red.png");
  })
  $("#two").mouseout(function() {
    if (expanded != "business") {
      $("#businessImg").attr("src", "images/icons/business_ic.png");
    }
  })
  $("#two").click(function() {
    if($("#business").hasClass("in")) {
      $("#businessImg").attr("src", "images/icons/business_ic.png");
      expanded = "";
    } else {
      $("#businessImg").attr("src", "images/icons/business_ic_red.png");

      if (expanded != "") {
        collapseSubteam(expanded);
      }
      expanded = "business";
    }
  })

  // Electrical
  $("#three").mouseover(function() {
    $("#electricalImg").attr("src", "images/icons/electrical_ic_red.png");
  })
  $("#three").mouseout(function() {
    if (expanded != "electrical") {
      $("#electricalImg").attr("src", "images/icons/electrical_ic.png");
    }
  })
  $("#three").click(function() {
    if($("#electrical").hasClass("in")) {
      $("#electricalImg").attr("src", "images/icons/electrical_ic.png");
      expanded = "";
    } else {
      $("#electricalImg").attr("src", "images/icons/electrical_ic_red.png");

      if (expanded != "") {
        collapseSubteam(expanded);
      }
      expanded = "electrical";
    }
  })

  // Fuselage
  $("#four").mouseover(function() {
    $("#fuselageImg").attr("src", "images/icons/fuselage_ic_red.png");
  })
  $("#four").mouseout(function() {
    if (expanded != "fuselage") {
      $("#fuselageImg").attr("src", "images/icons/fuselage_ic.png");
    }
  })
  $("#four").click(function() {
    if($("#fuselage").hasClass("in")) {
      $("#fuselageImg").attr("src", "images/icons/fuselage_ic.png");
      expanded = "";
    } else {
      $("#fuselageImg").attr("src", "images/icons/fuselage_ic_red.png");
      if (expanded != "") {
        collapseSubteam(expanded);
      }
      expanded = "fuselage";
    }
  })

  // Maglev
  $("#five").mouseover(function() {
    $("#maglevImg").attr("src", "images/icons/maglev_ic_red.png");
  })
  $("#five").mouseout(function() {
    if (expanded != "maglev") {
      $("#maglevImg").attr("src", "images/icons/maglev_ic.png");
    }
  })
  $("#five").click(function() {
    if($("#maglev").hasClass("in")) {
      $("#maglevImg").attr("src", "images/icons/maglev_ic.png");
      expanded = "";
    } else {
      $("#maglevImg").attr("src", "images/icons/maglev_ic_red.png");
      if (expanded != "") {
        collapseSubteam(expanded);
      }
      expanded = "maglev";
    }
  })

  // Suspension
  $("#six").mouseover(function() {
    $("#suspensionImg").attr("src", "images/icons/suspension_ic_red.png");
  })
  $("#six").mouseout(function() {
    if (expanded != "suspension") {
      $("#suspensionImg").attr("src", "images/icons/suspension_ic.png");
    }
  })
  $("#six").click(function() {
    if($("#suspension").hasClass("in")) {
      $("#suspensionImg").attr("src", "images/icons/suspension_ic.png");
      expanded = "";
    } else {
      $("#suspensionImg").attr("src", "images/icons/suspension_ic_red.png");
      if (expanded != "") {
        collapseSubteam(expanded);
      }
      expanded = "suspension";
    }
  })

})
