import { LoaderIcon } from '@/assets/icons/LoaderIcon'
import { FC } from 'react'
import styled, { keyframes } from 'styled-components'

interface LoaderProps {
	$size?: string
	$color?: 'blue' | 'lightblue' | 'deleteText'
}

const rotate = keyframes`
0%{
transform: rotate(0deg);
}
100%{
transform: rotate(360deg);
}
`

export const FullScreenLoader: FC<LoaderProps> = ({
	$color = 'lightblue',
	$size = '100px',
}) => {
	return (
		<LoaderWrapper>
			<Loader $color={$color} $size={$size} />
		</LoaderWrapper>
	)
}

export const Loader = styled(LoaderIcon)<LoaderProps>`
	> path {
		fill: ${({ $color, theme }) =>
			$color ? theme.colors[$color] : theme.colors.surface};
	}
	width: ${({ $size }) => $size ?? '23px'};
	height: ${({ $size }) => $size ?? '24px'};
	animation: ${rotate} 1s linear infinite;
`

const LoaderWrapper = styled('div')`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`
