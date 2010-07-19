(function(){
	window.i18n = {
		getTitle: function(){
		  return this[ this.user ].title;
		},
		getHour: function(h){
			console.info( this, arguments );
		},
		"pt-BR": {
			title: "Relógio",
			text: {
				h: "hora",
				m: "minuto",
				s: "segundo"
			}
			
		},
		"en-US": {
			title: "Clock",
			text: {
				h: "hour",
				m: "minute",
				s: "second"
			}
		}
	};

	// if fail set en-US
	i18n.user = navigator.userLanguage || window.navigator.language || "en-US";
})();
