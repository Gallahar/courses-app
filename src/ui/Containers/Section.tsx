import styled from 'styled-components'

export const Section = styled('section')<{ $mWidth?: number; $margin?: string ,$padding?:string }>`
	width: 100%;
	max-width: ${({ $mWidth }) => $mWidth ?? 1140}px;
	margin-top: ${({ $margin }) => $margin ?? '11.2rem'};
	padding-inline: ${({$padding})=> $padding ?? 0};
	margin-inline: auto;
`
