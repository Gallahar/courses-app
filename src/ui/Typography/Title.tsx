import { FC, HtmlHTMLAttributes } from 'react'
import styled from 'styled-components'

interface TitleProps extends HtmlHTMLAttributes<HTMLHeadingElement> {
	text: string
	$fs?: 'fsSm' | 'fsMd' | 'fsLg' | 'fsXl'
}

export const Title: FC<TitleProps> = ({ text, ...rest }) => {
	return <StyledHeading {...rest}>{text}</StyledHeading>
}

const StyledHeading = styled('h2')<Omit<TitleProps, 'text'>>`
	text-align: center;
	font-size: ${({ theme, $fs }) => ($fs ? theme[$fs] : theme.fsXl)};
	color: ${({ theme }) => theme.colors.textDark};
	line-height: 150%;

	${({ theme }) => theme.breakPoints.sm} {
		font-size: 22px;
	}
`
