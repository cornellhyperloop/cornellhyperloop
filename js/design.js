$(window).load(function(){
$(function() {
    $("#all").click(function(){
        $("#fuselage").css("opacity", "0.1");
        $("#chassis").css("opacity", "1");
        $("#wheel").css("opacity", "1");
        $("#maglev").css("opacity", "1");
        $("#electrical").css("opacity", "1");
        $("#electricaltext").css("opacity", "0");
        $("#fuselagetext").css("opacity", "0");
        $("#suspensiontext").css("opacity", "0");
        $("#maglevtext").css("opacity", "0");
        $("#fullpodtext").css("opacity", "1");
        $("#one").css("background-image","url(/images/icons/electrical_off.png)");
        $("#two").css("background-image","url(/images/icons/fuselage_off.png)");
        $("#three").css("background-image","url(/images/icons/suspension_off.png)");
        $("#four").css("background-image","url(/images/icons/maglev_off.png)");
        $("#all").css("background-image","url(/images/icons/leads_on.png)");

	});

    $("#one").click(function(){
        $("#fuselage").css("opacity", "0.1");
        $("#chassis").css("opacity", ".1");
        $("#wheel").css("opacity", ".1");
        $("#maglev").css("opacity", ".1");
        $("#electrical").css("opacity", "1");
        $("#electricaltext").css("opacity", "1");
        $("#fuselagetext").css("opacity", "0");
        $("#suspensiontext").css("opacity", "0");
        $("#maglevtext").css("opacity", "0");
        $("#fullpodtext").css("opacity", "0");
        $("#one").css("background-image","url(/images/icons/electrical_on.png)");
        $("#two").css("background-image","url(/images/icons/fuselage_off.png)");
        $("#three").css("background-image","url(/images/icons/suspension_off.png)");
        $("#four").css("background-image","url(/images/icons/maglev_off.png)");
        $("#all").css("background-image","url(/images/icons/leads_off.png)");
    });

    $("#two").click(function(){
        $("#fuselage").css("opacity", "1");
        $("#chassis").css("opacity", ".1");
        $("#wheel").css("opacity", ".1");
        $("#maglev").css("opacity", ".1");
        $("#electrical").css("opacity", ".1");
        $("#electricaltext").css("opacity", "0");
        $("#fuselagetext").css("opacity", "1");
        $("#suspensiontext").css("opacity", "0");
        $("#maglevtext").css("opacity", "0");
        $("#one").css("background-image","url(/images/icons/electrical_off.png)");
        $("#two").css("background-image","url(/images/icons/fuselage_on.png)");
        $("#three").css("background-image","url(/images/icons/suspension_off.png)");
        $("#four").css("background-image","url(/images/icons/maglev_off.png)");
        $("#all").css("background-image","url(/images/icons/leads_off.png)");
    });


    $("#three").click(function(){
        $("#fuselage").css("opacity", "0.1");
        $("#chassis").css("opacity", "1");
        $("#wheel").css("opacity", "1");
        $("#maglev").css("opacity", "1");
        $("#electrical").css("opacity", ".1");
        $("#electricaltext").css("opacity", "0");
        $("#fuselagetext").css("opacity", "0");
        $("#suspensiontext").css("opacity", "1");
        $("#maglevtext").css("opacity", "0");
        $("#one").css("background-image","url(/images/icons/electrical_off.png)");
        $("#two").css("background-image","url(/images/icons/fuselage_off.png)");
        $("#three").css("background-image","url(/images/icons/suspension_on.png)");
        $("#four").css("background-image","url(/images/icons/maglev_off.png)");
        $("#all").css("background-image","url(/images/icons/leads_off.png)");
    });

    $("#four").click(function(){
        $("#fuselage").css("opacity", "0.1");
        $("#chassis").css("opacity", ".1");
        $("#wheel").css("opacity", ".1");
        $("#maglev").css("opacity", "1");
        $("#electrical").css("opacity", ".1");
        $("#electricaltext").css("opacity", "0");
        $("#fuselagetext").css("opacity", "0");
        $("#suspensiontext").css("opacity", "0");
        $("#maglevtext").css("opacity", "1");
        $("#one").css("background-image","url(/images/icons/electrical_off.png)");
        $("#two").css("background-image","url(/images/icons/fuselage_off.png)");
        $("#three").css("background-image","url(/images/icons/suspension_off.png)");
        $("#four").css("background-image","url(/images/icons/maglev_on.png)");
        $("#all").css("background-image","url(/images/icons/leads_off.png)");
    });


});
});
