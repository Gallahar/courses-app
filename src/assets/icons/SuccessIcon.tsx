import { FC, SVGProps } from 'react'

export const SuccessIcon: FC<SVGProps<SVGSVGElement>> = ({ fill, ...rest }) => {
	return (
		<svg
			{...rest}
			width='16'
			height='16'
			viewBox='0 0 16 16'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				d='M7.01634 11.0335L11.733 6.31683L10.9663 5.56683L7.01634 9.51683L5.01634 7.51683L4.26634 8.26683L7.01634 11.0335ZM7.99967 14.6668C7.08856 14.6668 6.22745 14.4918 5.41634 14.1418C4.60523 13.7918 3.8969 13.3141 3.29134 12.7085C2.68579 12.1029 2.20801 11.3946 1.85801 10.5835C1.50801 9.77238 1.33301 8.91127 1.33301 8.00016C1.33301 7.07794 1.50801 6.21127 1.85801 5.40016C2.20801 4.58905 2.68579 3.8835 3.29134 3.2835C3.8969 2.6835 4.60523 2.2085 5.41634 1.8585C6.22745 1.5085 7.08856 1.3335 7.99967 1.3335C8.9219 1.3335 9.78856 1.5085 10.5997 1.8585C11.4108 2.2085 12.1163 2.6835 12.7163 3.2835C13.3163 3.8835 13.7913 4.58905 14.1413 5.40016C14.4913 6.21127 14.6663 7.07794 14.6663 8.00016C14.6663 8.91127 14.4913 9.77238 14.1413 10.5835C13.7913 11.3946 13.3163 12.1029 12.7163 12.7085C12.1163 13.3141 11.4108 13.7918 10.5997 14.1418C9.78856 14.4918 8.9219 14.6668 7.99967 14.6668Z'
				fill='#419257'
			/>
		</svg>
	)
}
