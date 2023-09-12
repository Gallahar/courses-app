import { FC, HtmlHTMLAttributes } from 'react'
import styled from 'styled-components'

interface TitleProps extends HtmlHTMLAttributes<HTMLHeadElement> {
	text: string
}

export const Title: FC<TitleProps> = ({ text, ...rest }) => {
	return <StyledHeading {...rest}>{text}</StyledHeading>
}

const StyledHeading = styled('h2')`
	text-align: center;
	font-size: ${({ theme }) => theme.fsXl};
	color: ${({ theme }) => theme.colors.textDark};
	line-height: 150%;
`
