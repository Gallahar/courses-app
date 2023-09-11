import { ThemeType } from '@/app/styles/theme'

declare module 'styled-components' {
	export interface DefaultTheme extends ThemeType {}
}
