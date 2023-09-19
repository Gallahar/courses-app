import styled from 'styled-components'

export const StyledForm = styled('form')`
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: ${({ theme }) => theme.borderRadius};
	width: 100%;
	padding: 3.2em;
	text-align: center;
`

export const FormBody = styled('div')`
	margin-top: 6.4rem;
	display: flex;
	flex-direction: column;
	gap: 3.2rem;
`

export const FormFooter = styled('div')`
	margin-top: 3.2rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1.6rem;
`
