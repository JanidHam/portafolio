import $ from 'jquery'

(() => {
	
	$('#btnMenu').on('click', () => {
		$('#navbarMenu').toggleClass('header-menu-list--show')
	})

}())