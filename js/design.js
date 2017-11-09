$(window).load(function(){
$(function() {
    $("#one").click(function(){
        $("#fuselage").css("opacity", "0.1");
        $("#chassis").css("opacity", "1");
        $("#wheel").css("opacity", "1");
        $("#maglev").css("opacity", "1");
        $("#electrical").css("opacity", "1");
        $("#electricaltext").css("opacity", "0");
        $("#fuselagetext").css("opacity", "0");
        $("#suspensiontext").css("opacity", "0");
        $("#maglevtext").css("opacity", "0");
	});

    $("#two").click(function(){
        $("#fuselage").css("opacity", "0.1");
        $("#chassis").css("opacity", ".1");
        $("#wheel").css("opacity", ".1");
        $("#maglev").css("opacity", ".1");
        $("#electrical").css("opacity", "1");
        $("#electricaltext").css("opacity", "1");
        $("#fuselagetext").css("opacity", "0");
        $("#suspensiontext").css("opacity", "0");
        $("#maglevtext").css("opacity", "0");
    });

    $("#three").click(function(){
        $("#fuselage").css("opacity", "0.1");
        $("#chassis").css("opacity", "1");
        $("#wheel").css("opacity", "1");
        $("#maglev").css("opacity", ".1");
        $("#electrical").css("opacity", ".1");
        $("#electricaltext").css("opacity", "0");
        $("#fuselagetext").css("opacity", "0");
        $("#suspensiontext").css("opacity", "1");
        $("#maglevtext").css("opacity", "0");
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
    });

    $("#five").click(function(){
        $("#fuselage").css("opacity", "1");
        $("#chassis").css("opacity", ".1");
        $("#wheel").css("opacity", ".1");
        $("#maglev").css("opacity", ".1");
        $("#electrical").css("opacity", ".1");
        $("#electricaltext").css("opacity", "0");
        $("#fuselagetext").css("opacity", "1");
        $("#suspensiontext").css("opacity", "0");
        $("#maglevtext").css("opacity", "0");
    });


});
});


