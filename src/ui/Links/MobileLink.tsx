import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const MobileLink = styled(NavLink)`
	padding: 16px;
	font-size: 18px;
	line-height: 150%;
	font-weight: 500;
	border-radius: ${({ theme }) => theme.borderRadius};
	color: ${({ theme }) => theme.colors.textDark};
	transition: background-color 0.3s ease-in;
	&[aria-current='page'] {
		background-color: ${({ theme }) => theme.colors.lightGrey};
	}

	&:active {
		background-color: ${({ theme }) => theme.colors.surface};
	}
`
