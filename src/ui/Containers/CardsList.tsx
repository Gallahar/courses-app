import styled from 'styled-components'

export const CardsList = styled('div')<{ $margin?: string }>`
	margin-top: ${({ $margin }) => $margin ?? 0};
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
`
