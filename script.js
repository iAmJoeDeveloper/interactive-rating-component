let ratingButtons = document.querySelectorAll('.container-numbers__button')
let score = document.getElementById('card2__score')
let card1 = document.getElementById('card1')
let card2 = document.getElementById('card2')
let submitBtn = document.getElementById('submit')
let value = 0

submitBtn.addEventListener('submit', function (event) {
	event.preventDefault()
})

let send = () => {
	submitBtn.addEventListener('click', function () {
		score.textContent = value
		card1.classList.add('card--hide')
		card2.classList.remove('card--hide')
	})
}

let handleHover = (event) => {
	ratingButtons.forEach((element) => {
		element.classList.remove('selected')
	})

	event.target.classList.add('selected')

	value = event.target.textContent
	send()
}

ratingButtons.forEach((element) => {
	element.addEventListener('click', handleHover)
})
