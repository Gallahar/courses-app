import { FC } from 'react'
import { NavLink, NavLinkProps } from 'react-router-dom'
import { styled } from 'styled-components'

export const CustomNavLink: FC<NavLinkProps> = ({ children, ...rest }) => {
	return <StyledLink {...rest}>{children}</StyledLink>
}

const StyledLink = styled(NavLink)`
	font-size: ${({ theme }) => theme.fsSm};
	color: ${({ theme }) => theme.colors.linkDefault};
	font-weight: 500;
	position: relative;
	overflow: hidden;
	padding: 0.2em 0;

	&:after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 0.1em;
		background-color: ${({ theme }) => theme.colors.blue};
		transform: translate3d(-100%, 0, 0);
		opacity: 0;
		transition: opacity ${({ theme }) => theme.transDur},
			transform ${({ theme }) => theme.transDur};
	}

	&:hover,
	&:focus,
	&[aria-current='page'] {
		color: ${({ theme }) => theme.colors.blue};
		&:after {
			transform: translate3d(0, 0, 0);
			opacity: 1;
		}
	}
`
