import styled from 'styled-components'

export const Section = styled('section')<{ $mWidth?: number; $margin?: string }>`
	width: 100%;
	max-width: ${({ $mWidth }) => $mWidth ?? 1140}px;
	margin-top: ${({ $margin }) => $margin ?? '48px'};
	margin-inline: auto;
`
