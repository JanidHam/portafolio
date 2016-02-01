import $ from 'jquery'

(() => {
	
	$('#btnMenu').on('click', () => {
		$('#navbarMenu').toggleClass('header-menu-list--show')
	})

	let $link = $(`
		<link rel="stylesheet" type="text/css" 
		href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css"
		>
	`)

	$('head').append($link)
	
}())