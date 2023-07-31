async function getData() {
	try {
		const adviceNumber = document.querySelector('.adviceNumber'),
			advice = document.getElementById('advice'),
			random = document.getElementById('random')
		
		random.addEventListener('click', async function() {
			//max: 224
			const res = await fetch('https://api.adviceslip.com/advice'),
				data = await res.json()

			const adviceText = data.slip.advice,
				adviceId = data.slip.id
			adviceNumber.textContent = `#${adviceId}`
			advice.textContent = adviceText 
		})

	} catch (error) {
		console.error(error)
	}
}

getData()


const follow = document.querySelector('.follow')

const follower = (e) =>{
	const {clientY, clientX} = e
	
	follow.animate({
		left: `${clientX}px`,
		top: `${clientY}px`
	},{duration: 2000, fill:'forwards'})
}

document.body.addEventListener('mousemove', follower)