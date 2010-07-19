(function(){
	var c = window.clock = {
		line: false,
		init: function(){
			$('title').text( i18n.getTitle() )

			this.line = parseInt(
				$('#hour').find('span').eq(0).height()
			);

			this.center();

			this.update( true );

			setInterval(
				$.proxy( c.update, c ), 1000
			);
		},
		center: function(){
			var $w = $('#wrapper');

			$w.css({
				'margin-left': '-' + $w.outerWidth() / 2 + 'px',
				'margin-top': '-' + $w.outerHeight() / 2 + 'px',
			});
		},
		update: function(force){
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
		}
	};

	$( $.proxy( c.init, c ) );
})();
