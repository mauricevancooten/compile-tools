var button, text, visible

button = document.querySelector('.show')
text = document.querySelector('.enquiries')
visible = false

text.classList.add('accessibly-hidden')
button.addEventListener('click', function() {
	if (visible) {
		text.classList.add('accessibly-hidden')
	} else {
		text.classList.remove('accessibly-hidden')
	}
	visible = !visible
})
