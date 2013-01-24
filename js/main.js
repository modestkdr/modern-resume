$(document).ready(function() {	

	/* Show the logo section */
	$('#portfolio-t, #skills-experience-t, #contact-t').click(function() { 
		$('#banner').slideDown();
	});
	  
	 /* Hide the logo section on homepage */
	 $('#home-t').click(function() {
		 $('#banner').slideUp();
	 });
});

/* Flex Slider */
$(window).load(function() {
	$('.flexslider').flexslider({
		animation: "fade",
		animationLoop: true,
	});
});

/* Contact Form - send form to the PHP script via ajax */
function toSend(){
	$.ajax({	
		type: "POST",
		url: "mail.php",
		data: {
			"name": $("#form_name").val(),
			"mail": $("#form_email").val(),
			"subject": $("#form_subject").val(),
			"text": $("#form_message").val()
		},
		dataType: "text",
		success: function(html) {
			if (html) {
				var tab = eval("("+html+")");

				if (tab.name!=undefined) {
					$("#form_name").val(tab.name);
					setTimeout('$("#form_name").val("")', 1500);
				}

				if (tab.mail!=undefined) {
					$("#form_email").val(tab.mail);
					setTimeout('$("#form_email").val("")', 1500);
				}

				if (tab.text!=undefined) {
					$("#form_message").val(tab.text);
					setTimeout('$("#form_message").val("")', 1500);
				}

				if (tab.subject!=undefined) {
					$("#form_subject").val(tab.subject);
					setTimeout('$("#form_subject").val("")', 1500);
				}

				if (tab.main!=undefined) {
					$("#response").html(tab.main).fadeIn();
					setTimeout('$("#response").fadeOut("slow")', 2000);
				}
			} else {
				window.location.reload();
			}
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
	      content.siblings().removeClass("active").fadeOut(400, function () {
	      		content.fadeIn().addClass("active");
	      });
	    }
	  }

	  // listen on event and fire right away
	  $(window).on('hashchange.skeleton', hashchange);
	  hashchange();
	  $(hashchange);
	})(jQuery);