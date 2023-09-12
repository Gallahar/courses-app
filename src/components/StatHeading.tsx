import { styled } from 'styled-components'
import { StatCard } from './StatCard'

export const StatHeading = styled(StatCard)`
	padding: 0 1.6rem;
	background-color: unset;
	p {
		color: ${({ theme }) => theme.colors.linkDefault};
	}
`
