import { FC, HTMLAttributes, ReactNode } from 'react'
import { css, styled } from 'styled-components'

const variants = {
	grid: css`
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		gap: 3.2rem;
	`,

	flex: css`
		display: flex;
		justify-content: space-between;
		align-items: center;
	`,
}

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
	children: ReactNode
	$variant: 'flex' | 'grid'
}

export const Container: FC<ContainerProps> = ({ children, ...rest }) => {
	return <StyledContainer {...rest}>{children}</StyledContainer>
}

const StyledContainer = styled('div')<{ $variant: 'flex' | 'grid' }>`
	${({ $variant }) => variants[$variant]};
	width: 100%;
	height: 100%;
	max-width: 1140px;
	margin-inline: auto;
`
