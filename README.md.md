# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/solutions/simple-component-using-html-css-and-javascript-Hk5pzbrNc)
- Live Site URL: [Add live site URL here](https://iamjoedeveloper.github.io/interactive-rating-component/)

## My process

I started watching the sketches to understand and think about anatomy that the component could has
When I had a clear idea I started to create and structure the html file in a semantic way, when I finished I wrote the classes in detail using the BEM method.
after that, I wrote css styles testing how they looked until I found the closest possible sizes and the closest possible apareance.

### Built with

- HTML5
- CSS
- Javascript

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

My major learning was about how to manage the DOM. It was very interesting be thinking and testing how to add or remove clases based on the event and it was also my first time writing mobile styles using media queries. I hope learn too much more with next challenges.

```

```

```

```

```js
let ratingButtons = document.querySelectorAll('.container-numbers__button')
let score = document.getElementById('card2__score')
let card1 = document.getElementById('card1')
let card2 = document.getElementById('card2')
let submitBtn = document.getElementById('submit')
let value = 0

let handleHover = (event) => {
	ratingButtons.forEach((element) => {
		element.classList.remove('selected')
	})

	event.target.classList.add('selected')

	value = event.target.textContent
}

submitBtn.addEventListener('click', function () {
	score.textContent = value
	card1.classList.add('card--hide')
	card2.classList.remove('card--hide')
})

ratingButtons.forEach((element) => {
	element.addEventListener('click', handleHover)
})
```

### Continued development

I want to continue learning about responsive design.

### Useful resources

- [PureRef](https://www.pureref.com) - This helped me to compare the sketches with my design and find sizes.
- [Stack Over Flow](https://es.stackoverflow.com/) - This helped me when I ran into rocks on the trail.

## Author

- Website - [JoeDev](https://www.Joejs.dev)
- Frontend Mentor - [@joedev](https://www.frontendmentor.io/profile/iAmJoeDeveloper)
- Twitter - [@iAmJoeDeveloper](https://twitter.com/iAmJoeDeveloper)
