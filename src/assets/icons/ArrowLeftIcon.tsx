import { FC, SVGProps } from 'react'

export const ArrowLeftIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
	return (
		<svg
			{...props}
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M6.85 12.75L13.05 18.95L12 20L4 12L12 4L13.05 5.05L6.85 11.25H20V12.75H6.85Z'
				fill='#353535'
			/>
		</svg>
	)
}
