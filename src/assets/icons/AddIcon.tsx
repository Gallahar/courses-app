import { FC, SVGProps } from 'react'

export const AddIcon: FC<SVGProps<SVGSVGElement>> = ({ fill, ...rest }) => {
	return (
		<svg
			{...rest}
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M11.25 12.75H5V11.25H11.25V5H12.75V11.25H19V12.75H12.75V19H11.25V12.75Z'
				fill={fill ?? 'white'}
			/>
		</svg>
	)
}
