(function(){
	var c = window.clock = {
		line: false,
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
			this.line = this.line || parseInt( $('#hour').find('span').eq(0).height() );

			var d = new Date(),
				h = d.getHours(),
				m = d.getMinutes(),
				s = d.getSeconds();

			( force || ( m == 0 && s == 0 ) ) && $('#hour').animate({
				"scrollTop": ( this.line * h )
			},100);

			( force || s == 0 ) && $('#minute').animate({
				"scrollTop": ( this.line * m )
			},100);

			$('#second').animate({
				"scrollTop": ( this.line * s )
			},100);

			force && c.center();
		}
	};

	$( c.init );
})();
