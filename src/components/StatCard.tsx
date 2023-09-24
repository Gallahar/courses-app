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

	${({ theme }) => theme.breakPoints.sm} {
		grid-template-columns: 50% 25% 25%;
		gap: 0.8rem;
		p {
			font-size: 15px;
			text-overflow: ellipsis;
			white-space: nowrap;
			overflow: hidden;

			&:hover {
				text-overflow: clip;
				overflow: unset;
				white-space: normal;
			}
		}
	}
`

const HeadWrapper = styled('div')`
	display: flex;
	gap: 3.5rem;

	${({ theme }) => theme.breakPoints.sm} {
		gap: 1.7rem;

		a:after {
			content: none;
		}
		a:hover{
			text-decoration: underline;
		}
	}
`
