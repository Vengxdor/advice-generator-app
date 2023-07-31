/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./**/*.{html,js}'],
	theme: {
		extend: {
      
			colors:{
				cyan: 'hsl(193, 38%, 86%)',
				neon: ' hsl(150, 100%, 66%)',
				gray: '#313a49',
				darkGray: 'hsl(217, 19%, 24%)',
				darkBlue: 'hsl(218, 23%, 16%)',
				background: 'rgb(25 25 25)',
			},
			
      

		},
	},
	plugins: [],
}


/*
  
  - Light Cyan: hsl(193, 38%, 86%)
- X hsl(150, 100%, 66%)


- Grayish Blue: hsl(217, 19%, 38%)
- Dark Grayish Blue: hsl(217, 19%, 24%)
- Dark Blue: hsl(218, 23%, 16%)

 */