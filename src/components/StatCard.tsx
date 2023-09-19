import { StyledText } from '@/ui/Typography/Text'
import { FC, ReactNode } from 'react'
import styled from 'styled-components'

interface StatCardProps {
	title: string | ReactNode
	secondCol?: string
	thirdCol?: string
	index: string
	className?: string
}

export const StatCard: FC<StatCardProps> = ({
	title,
	secondCol,
	thirdCol,
	index,
	className,
}) => {
	return (
		<CardWrapper className={className}>
			<HeadWrapper>
				<StyledText $size='fsMd'>{index}</StyledText>
				<StyledText $size='fsMd'>{title}</StyledText>
			</HeadWrapper>
			{secondCol && <StyledText $size='fsMd'>{secondCol}</StyledText>}
			{thirdCol && <StyledText $size='fsMd'>{thirdCol}</StyledText>}
		</CardWrapper>
	)
}

const CardWrapper = styled('div')`
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: ${({ theme }) => theme.borderRadius};
	padding: 1.6rem;
	display: grid;
	grid-template-columns: 70% 15% 15%;
`

const HeadWrapper = styled('div')`
	display: flex;
	gap: 3.5rem;
`
