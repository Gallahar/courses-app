import { LoaderIcon } from '@/assets/icons/LoaderIcon'
import { FC, HTMLAttributes } from 'react'
import styled, { keyframes } from 'styled-components'

interface LoaderProps {
	$size?: string
	$color?: 'blue' | 'lightblue' | 'deleteText' | 'surface'
}

const rotate = keyframes`
0%{
transform: rotate(0deg);
}
100%{
transform: rotate(360deg);
}
`

const loader = keyframes`
0%{
	stroke-dasharray: 1px,200px;
	stroke-dashoffset: 0px;
}
50%{
	stroke-dasharray: 100px,200px;
	stroke-dashoffset: -15px;

}
100%{
	stroke-dasharray: 100px,200px;
	stroke-dashoffset: -125px;
}
`

export const FullScreenLoader: FC<
	LoaderProps & HTMLAttributes<HTMLDivElement>
> = ({ $color = 'lightblue', $size = '100px' }) => {
	return (
		<LoaderWrapper>
			<RotateWrapper $color={$color} $size={$size}>
				<LoaderSvg />
			</RotateWrapper>
		</LoaderWrapper>
	)
}

export const Loader: FC<LoaderProps & HTMLAttributes<HTMLDivElement>> = ({
	$color = 'surface',
	$size = '23px',
}) => {
	return (
		<RotateWrapper $color={$color} $size={$size}>
			<LoaderSvg />
		</RotateWrapper>
	)
}

const RotateWrapper = styled('span')<LoaderProps>`
	width: ${({ $size }) => $size ?? '23px'};
	height: ${({ $size }) => $size ?? '24px'};
	animation: ${rotate} 1s linear infinite;
	color: ${({ $color, theme }) =>
		$color ? theme.colors[$color] : theme.colors.surface};
`

export const LoaderSvg = styled(LoaderIcon)`
	width: 100%;
	height: 100%;
	circle {
		stroke: currentColor;
		stroke-dasharray: 80px, 200px;
		stroke-dashoffset: 0px;
		stroke-linecap: round;
		animation: 1.4s ease-in-out 0s infinite normal none running ${loader};
	}
`

const LoaderWrapper = styled('div')`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
`
