$(document).ready(function() {
	$('textarea').on('click', function() {
		var that = $(this);
		that.css('height', that.height(90));
		$('#tweet-controls').show();
    });

	$('textarea').data('holder',$('textarea').attr('placeholder'));
    	$('textarea').focusin(function(){
        $(this).attr('placeholder','');
    });

    $('textarea').focusout(function(){
        $(this).attr('placeholder',$(this).data('holder'));
    });

	$('textarea').on('keyup', function() {
		var count = $(this).val().length,
			remaining = 140 - count;
		$('#char-count').text(remaining);
		if(remaining <= 10) {
			$('#char-count').css('color', 'red');
		} else {
			$('#char-count').css('color', '#999');
		}

		if (count > 140) {
				$('#tweet-submit').attr('disabled', 'disabled');
		} else  {
			$('#tweet-submit').attr('disabled', false);
		}
		
	});

	$('.tweet-compose').on('keypress', function(e) {
		if(e.which === 13) {
			jQuery(this).blur();
			jQuery('#tweet-submit').focus().click();
		}
	});

	$('#tweet-submit').on('click', function() {
		var tweetWords = $('.tweet-compose').val();
		var newTweet = $('.tweet').clone().eq(0);
		var myName = $('.content > p').html();
		var picture = $('.avatar').attr('src');

		newTweet.find('.tweet-text').html(tweetWords);
		newTweet.find('.fullname').html(myName);
		newTweet.find('.username').html("@xbaii");
		newTweet.find('.avatar').attr('src', picture);

		newTweet.prependTo('#stream');
		//$('#stream').prepend($(newTweet));
		$('textarea').val('');
		// $('#char-count').text("140").css('color', '#999');
		$('#tweet-controls').hide();
		$('textarea').css('height', '35');
	});

	$('.tweet-actions').css('opacity', 0);

	$('.tweet').hover(function() {
		$('.tweet-actions').mouseenter (function() {
			var that = $(this);
			that.stop().fadeTo(800, 1);
		});
		$('.tweet-actions').mouseleave (function() {
			var that = $(this);
			that.stop().fadeTo(300, 0);
		});
	});



	$('.tweet').click(function() {
			$(this).find('.stats').toggle({duration: 400});
			$(this).find('.reply').toggle({duration: 400});

	});

});


