import styled from 'styled-components'

interface SectionProps {
	$mWidth?: number
	$margin?: string
	$padding?: string
}

export const Section = styled('section')<SectionProps>`
	width: 100%;
	max-width: ${({ $mWidth }) => $mWidth ?? 1140}px;
	margin-top: ${({ $margin }) => $margin ?? '11.2rem'};
	padding-inline: ${({ $padding }) => $padding ?? 0};
	margin-inline: auto;
	${({ theme }) => theme.breakPoints.sm} {
		margin-top: ${({ $margin }) => $margin ?? '13.6rem'};
	}
`
