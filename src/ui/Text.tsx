import { styled } from 'styled-components'

interface TextProps {
	$size: 'fsSm' | 'fsMd' | 'fsLg' | 'fsXl'
	$color?: 'linkDefault'
}

export const StyledText = styled('p')<TextProps>`
	font-size: ${({ theme, $size }) => theme[$size]};
	color: ${({ theme, $color }) =>
		$color ? theme[$color] : theme.colors.textDark};
`
