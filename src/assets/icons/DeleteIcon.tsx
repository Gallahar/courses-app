import { FC, SVGProps } from 'react'

export const DeleteIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
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
				d='M6.525 21C6.1125 21 5.75937 20.8531 5.46563 20.5594C5.17188 20.2656 5.025 19.9125 5.025 19.5V5.25H4V3.75H8.7V3H15.3V3.75H20V5.25H18.975V19.5C18.975 19.9 18.825 20.25 18.525 20.55C18.225 20.85 17.875 21 17.475 21H6.525ZM17.475 5.25H6.525V19.5H17.475V5.25ZM9.175 17.35H10.675V7.375H9.175V17.35ZM13.325 17.35H14.825V7.375H13.325V17.35Z'
				fill='#C93838'
			/>
		</svg>
	)
}
