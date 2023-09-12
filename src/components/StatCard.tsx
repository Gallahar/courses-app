import { StyledText } from '@/ui/Typography/Text'
import { FC } from 'react'
import styled from 'styled-components'

interface StatCardProps {
	name: string
	res?: string
	date?: string
	index: string
	className?: string
}

export const StatCard: FC<StatCardProps> = ({
	name,
	res,
	date,
	index,
	className,
}) => {
	return (
		<CardWrapper className={className}>
			<HeadWrapper>
				<StyledText $size='fsMd'>{index}</StyledText>
				<StyledText $size='fsMd'>{name}</StyledText>
			</HeadWrapper>
			{res && <StyledText $size='fsMd'>{res}</StyledText>}
			{date && <StyledText $size='fsMd'>{date}</StyledText>}
		</CardWrapper>
	)
}

const CardWrapper = styled('div')`
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: ${({ theme }) => theme.borderRadius};
	padding: 1.6rem;
	display: grid;
	grid-template-columns: 60% 20% 20%;
`

const HeadWrapper = styled('div')`
	display: flex;
	gap: 3.5rem;
`
