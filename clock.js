(function(){
	var line, c = window.clock = {
		init: function(){
			c.update( true );

			timer = setInterval( c.update, 1000, false );

			$(window).unload(function(){
				clearTimeout( timer );
			});
		},
		center: function(){
			$('#wrapper').css('margin-left', '-' +
				$('#wrapper').outerWidth() / 2 +
			'px');
		},
		update: function(force){
			line = line || parseInt( $('body').css('line-height') );

			var d = new Date(),
				h = d.getHours(),
				m = d.getMinutes(),
				s = d.getSeconds();

			( force || ( m == 0 && s == 0 ) ) && $('#hour').animate({
				"scrollTop": ( line * h )
			},100);

			( force || s == 0 ) && $('#minute').animate({
				"scrollTop": ( line * m )
			},100);

			$('#second').animate({
				"scrollTop": ( line * s )
			},100);

			force && c.center();
		}
	};

	$( c.init );
})();
