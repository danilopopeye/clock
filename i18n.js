(function(){
	window.i18n = {
		getTitle: function(){
		  return this[ this.user ].title;
		},
		number: function(n){
			if( typeof n !== 'number' || n > 99 ){
				return '';
			}

			var self = this[ this.user ];

			if( n < 10 ){
				return self.number[ n ];
			} else if ( n % 10 == 0 ){
				return self.decimal[ n / 10 ];
			} else if ( n < 20  ){
				return self.other[ n ];
			}

			n = n.toString();

			return self.decimal[ n[0] ] + self.decimal[0] + self.number[ n[1] ];
		},
		"pt-BR": {
			title: "Relógio",
			text: {
				h: "hora",
				m: "minuto",
				s: "segundo"
			},
			number: [ 'zero','um','dois','tres','quatro','cinco','seis','sete','oito','nove' ],
			decimal: [ ' e ','dez','vinte','trinta','quarenta','cinquenta','sessenta','setenta','oitenta','noventa' ],
			other: {
				11: 'onze',
				12: 'doze',
				13: 'treze',
				14: 'quatorze',
				15: 'quinze',
				16: 'dezesseis',
				17: 'dezessete',
				18: 'dezoito',
				19: 'dezenove'
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
	i18n.user = "pt-BR" || navigator.userLanguage || window.navigator.language || "en-US";
})();
