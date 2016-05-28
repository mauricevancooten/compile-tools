var responsiveNav = require('responsive-nav');

document.addEventListener('DOMContentLoaded', function (){

	var nav = responsiveNav('.nav-collapse', {
		transition:400,
		insert:'after'
	});

});