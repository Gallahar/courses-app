import { InputHTMLAttributes, forwardRef, useState } from 'react'
import { PassHideIcon } from '@/assets/icons/PassHideIcon'
import { PassShowIcon } from '@/assets/icons/PassShowIcon'
import styled from 'styled-components'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	error?: string
	label?: string
	variant?: 'password' | 'field'
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ error, label, variant, ...rest }, ref) => {
		const [type, setType] = useState(variant ? 'password' : 'text')

		return (
			<InputWrapper as={variant ? 'div' : 'label'}>
				{label && label}
				<StyledInput type={type} {...rest} ref={ref} />
				{error && <StyledError>{error}</StyledError>}
				{variant && type === 'text' && (
					<PassHideIcon onClick={() => setType('password')} />
				)}
				{variant && type === 'password' && (
					<PassShowIcon onClick={() => setType('text')} />
				)}
			</InputWrapper>
		)
	}
)

Input.displayName = 'INput'

const InputWrapper = styled('div')`
	font-size: ${({ theme }) => theme.fsSm};
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 0.8rem;
	position: relative;
`

const StyledInput = styled('input')`
	width: 100%;
	padding: 1.2rem 1.6rem;
	line-height: 150%;
	border-radius: ${({ theme }) => theme.borderRadius};
	font-size: inherit;
	background-color: ${({ theme }) => theme.colors.inputBg};
	outline: 1px solid ${({ theme }) => theme.colors.inputOutline};
	transition: all ${({ theme }) => theme.transDur} ease-in;
	&:hover {
		background-color: ${({ theme }) => theme.colors.inputHover};
	}
	&:focus {
		outline: 1px solid ${({ theme }) => theme.colors.lightblue};
	}
`
const StyledError = styled('p')`
	position: absolute;
	color: ${({ theme }) => theme.colors.deleteText};
	font-size: 1rem;
	bottom: -20px;
`
