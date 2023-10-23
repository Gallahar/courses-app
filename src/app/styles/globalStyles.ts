import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

:root{
    font-size : 62.5%;
	line-height: 150%;

	${({ theme }) => theme.breakPoints.sm} {
		font-size: 56%;
	}
}

body{
  box-sizing: border-box;
  overflow-x: hidden;
  color: ${({ theme }) => theme.colors.textDark};
  background-color: ${({ theme }) => theme.colors.surface};
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  

}


*,
*::after,
*::before {
	margin: 0;
	padding: 0;
	border: none;
	box-sizing: border-box;
	scroll-behavior: smooth;
}

a,
a:visited {

	text-decoration: none;
	display: inline-block;
}

a:focus,
a:active,
a:hover {
	outline: none;
}

aside,
nav,
footer,
header,
main,
section {
	display: block;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
	font-size: inherit;
	font-weight: inherit;
	line-height: inherit;
}

img,
svg {
	vertical-align: top;
	max-width: 100%;
	height: auto;
}

input,
textarea,
button,
select _ {
	font-family: inherit;
	font-size: inherit;
	color: inherit;
}

input::-ms-clear {
	display: none;
}

button,
input[type='submit'] {
	display: inline-block;
	box-shadow: none;
	background-color: transparent;
	background: none;
	cursor: pointer;
}

input:active,
input:focus,
button:active,
button:focus {
	outline: none;
}

button::-moz-focus-inner {
	padding: 0;
	border: 0;
}

label {
	cursor: pointer;
}



`
