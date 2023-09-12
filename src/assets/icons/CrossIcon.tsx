import { FC, SVGProps } from 'react'

export const CrossIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
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
				d='M6.2248 18.8248L5.1748 17.7748L10.9498 11.9998L5.1748 6.2248L6.2248 5.1748L11.9998 10.9498L17.7748 5.1748L18.8248 6.2248L13.0498 11.9998L18.8248 17.7748L17.7748 18.8248L11.9998 13.0498L6.2248 18.8248Z'
				fill='black'
			/>
		</svg>
	)
}