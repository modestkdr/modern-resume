$(document).ready(function() {	  

	/* Show the logo section */
	$('#portfolio-t, #skills-experience-t, #contact-t').click(function() { 
		$('#logo').fadeIn('4000');
	});
	  
	 /* Hide the logo section on homepage */
	 $('#home-t').click(function() {
		 $('#logo').fadeOut('4000');
	 })
	
	/* Animate Skills */
	$("#skills-experience-t").click(function (){ 
		animteSkills();		
	});
	 
	 /* If the Skills and Experience tab is open,
	    Animate Skills 
	  */
	 if(document.URL.indexOf("skills-experience") != -1) {
		 animteSkills();
		} 
	 
	/* Background Switcher */
	$('.bg-switcher').click( function() {
		var bgNumber = $(this).attr("value");
		$('body').css("background-image","url(background-patterns/bg"+bgNumber+".png)");
	});


	/* Contact Form - validation and response */
	$("#form_submit").click(function(){
		var valid = '';
		var isr = ' is required.';
		var name = $("#form_name").val();
		var mail = $("#form_email").val();
		var subject = $("#form_subject").val();
		var text = $("#form_message").val();
		if (name.length<1) {
			valid += '<br />Name'+isr;
		}
		if (!mail.match(/^([a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$)/i)) {
			valid += '<br />A valid Email'+isr;
		}
		if (subject.length<1) {
			valid += '<br />Subject'+isr;
		}
		if (text.length<1) {
			valid += '<br />Text'+isr;
		}
		if (valid!='') {
			$("#response").fadeIn("slow");
			$("#response").html("Error:"+valid);
		}
		else {
			var datastr ='name=' + name + '&mail=' + mail + '&subject=' + subject + '&text=' + text;
			$("#response").css("display", "block");
			$("#response").html("Sending message .... ");
			$("#response").fadeIn("slow");
			setTimeout("send('"+datastr+"')",2000);
		}
		return false;
	});
});

/* Flex Slider */
$(window).load(function() {
	$('.flexslider').flexslider({
		animation: "fade",
		animationLoop: true,
	});
});

/* Animate Skills */
function animteSkills() {
	$("#skills-graph .skill-1").animate({ width: "230" }, 5000); 
	$("#skills-graph .skill-2").animate({ width: "150" }, 5000); 
	$("#skills-graph .skill-3").animate({ width: "210" }, 5000);
	$("#skills-graph .skill-4").animate({ width: "180" }, 5000);
	$("#skills-graph .skill-5").animate({ width: "140" }, 5000);
}

/* Contact Form - send data string to the PHP script via ajax */
function send(datastr){
	$.ajax({	
		type: "POST",
		url: "mail.php",
		data: datastr,
		cache: false,
		success: function(html){
		$("#response").fadeIn("slow");
		$("#response").html(html);
		setTimeout('$("#response").fadeOut("slow")',2000);
	}
	});
}

/* Tabs - Skeleton Boilerplate */
(function ($) {
	  // hash change handler
	  function hashchange () {
	    var hash = window.location.hash
	      , el = $('ul.tabs [href*="' + hash + '"]')
	      , content = $(hash)

	    if (el.length && !el.hasClass('active') && content.length) {
	      el.closest('.tabs').find('.active').removeClass('active');
	      el.addClass('active');
	      content.show().addClass('active').siblings().hide().removeClass('active');
	    }
	  }

	  // listen on event and fire right away
	  $(window).on('hashchange.skeleton', hashchange);
	  hashchange();
	  $(hashchange);
	})(jQuery);