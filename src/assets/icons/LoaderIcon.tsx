import { FC, SVGProps } from 'react'

export const LoaderIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			{...props}
			width='40'
			height='40'
			viewBox='22 22 44 44'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<circle cx={44} cy={44} r={20.2} fill='none' strokeWidth={3.6} />
		</svg>
	)
}
