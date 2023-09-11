import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import styled from 'styled-components'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	$variant: 'filled' | 'default'
	$order?: 'row' | 'row-reverse'
	children: ReactNode
	icon?: ReactNode
}

export const Button: FC<ButtonProps> = ({ children, icon, ...rest }) => {
	return (
		<StyledButton {...rest}>
			{icon && icon}
			{children}
		</StyledButton>
	)
}

const StyledButton = styled('button')<ButtonProps>`
	font-size: ${({ theme }) => theme.fsMd};
	border-radius: ${({ theme }) => theme.borderRadius};
	padding: 1rem;
	color: ${({ theme, $variant }) =>
		$variant === 'filled' ? theme.colors.white : theme.colors.textDark};
	background-color: ${({ theme, $variant }) =>
		$variant === 'filled' ? theme.colors.lightblue : theme.colors.inputBg};
	border: ${({ theme, $variant }) =>
		$variant === 'filled' ? 'none' : `1px solid ${theme.colors.inputOutline}`};
	display: flex;
	flex-direction: ${({ $order }) => $order};
	justify-content: center;
	gap: 0.8rem;
	align-items: center;
	transition: background-color ${({ theme }) => theme.transDur} ease-in;

	&:hover {
		background-color: ${({ theme, $variant }) =>
			$variant === 'filled' ? theme.colors.blue : theme.colors.inputHover};
	}
`
