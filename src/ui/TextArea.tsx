import { InputHTMLAttributes, forwardRef } from 'react'
import styled from 'styled-components'

interface InputProps extends InputHTMLAttributes<HTMLTextAreaElement> {
	error?: string
	label?: string
}

export const TextArea = forwardRef<HTMLTextAreaElement, InputProps>(
	({ error, label, ...rest }, ref) => {
		return (
			<TextAreaWrapper>
				{label && label}
				<StyledTextArea {...rest} ref={ref} />
				{error && <StyledError>{error}</StyledError>}
			</TextAreaWrapper>
		)
	}
)

TextArea.displayName = 'TextArea'

const TextAreaWrapper = styled('div')`
	font-size: ${({ theme }) => theme.fsSm};
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 8px;
	position: relative;
`

const StyledTextArea = styled('textarea')`
	width: 100%;
	min-height: 192px;
	padding: 1.9rem 1.6rem;
	border-radius: ${({ theme }) => theme.borderRadius};
	font-size: inherit;
	background-color: ${({ theme }) => theme.colors.inputBg};
	outline: 1px solid ${({ theme }) => theme.colors.inputOutline};
	resize: none;
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
	font-size: ${({ theme }) => theme.fsSm};
	bottom: -20px;
`
