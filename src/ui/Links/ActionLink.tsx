import { FC, ReactNode } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import { styled } from 'styled-components'

interface ActionLinkProps extends LinkProps {
	$variant: 'auth' | 'default'
	children: ReactNode
	label?: string
	$fs?: 'fsSm' | 'fsMd' | 'fsLg' | 'fsXl'
	$padding?: string
	as?: string
}

export const ActionLink: FC<ActionLinkProps> = ({
	children,
	label,
	$variant,
	as,
	...rest
}) => {
	return (
		<Wrapper as={as}>
			{label && <StyledLabel htmlFor='#link'>{label}</StyledLabel>}
			<StyledLink id='link' $variant={$variant} {...rest}>
				{children}
			</StyledLink>
		</Wrapper>
	)
}

const StyledLink = styled(Link)<ActionLinkProps>`
	font-size: ${({ theme, $fs }) => ($fs ? theme[$fs] : theme.fsSm)};
	color: ${({ theme, $variant }) =>
		$variant === 'auth' ? theme.colors.lightblue : theme.colors.linkDefault};
	font-weight: ${({ $variant }) => ($variant === 'auth' ? 400 : 500)};
	position: relative;
	overflow: hidden;
	padding: ${({ $padding }) => $padding ?? '0.2em'};

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
	&:focus {
		color: ${({ theme }) => theme.colors.blue};
		&:after {
			transform: translate3d(0, 0, 0);
			opacity: 1;
		}
	}
`

const Wrapper = styled('div')`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 4px;
`

const StyledLabel = styled('label')`
	font-size: ${({ theme }) => theme.fsSm};
	font-weight: 400;
	color: ${({ theme }) => theme.colors.textLight};
`
