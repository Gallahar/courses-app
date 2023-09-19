import { FC, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

export interface ThemeType {
	colors: {
		textDark: string
		textLight: string
		inputBg: string
		inputHover: string
		inputOutline: string
		white: string
		blue: string
		lightblue: string
		surface: string
		deleteStroke: string
		deleteText: string
		deleteBackground: string
		linkDefault: string
	}
	borderRadius: string
	fsSm: string
	fsMd: string
	fsLg: string
	fsXl: string
	transDur: string
}

const theme: ThemeType = {
	colors: {
		textDark: '#353535',
		textLight: '#C3C3C3',
		inputBg: '#FAFAFA',
		inputHover: '#F2F2F2',
		inputOutline: '#E8E8E8',
		white: '#FFF',
		blue: '#3B56B4',
		lightblue: '#5971C8',
		surface: '#F4F4F4',
		deleteStroke: '#DCB3B3',
		deleteText: '#C93838',
		deleteBackground: '#EBD3D3',
		linkDefault: '#757575',
	},
	borderRadius: '8px',
	fsSm: '1.6rem',
	fsMd: '1.8rem',
	fsLg: '2.4rem',
	fsXl: '3.2rem',
	transDur: '300ms',
}

interface ThemeProps {
	children: ReactNode
}

export const Theme: FC<ThemeProps> = ({ children }) => {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
