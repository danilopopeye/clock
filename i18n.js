(function(){
	window.i18n = {
		getHour: function(h){
			console.info( this, arguments );
		},
		"pt-BR": {
			text: {
				"h": "hora",
				"m": "minuto",
				"s": "segundo"
			},
			
		},
		"en-US": {
			"text": {
				"h": "hour",
				"m": "minute",
				"s": "second"
			}
		}
	};

	// if fail set en-US
	i18n.user = navigator.userLanguage || window.navigator.language || "en-US";
})();
