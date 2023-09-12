import styled from "styled-components";

export const DeleteButton = styled('button')`
	padding: 1.2rem;
	border-radius: ${({ theme }) => theme.borderRadius};
	border: 1px solid ${({ theme }) => theme.colors.deleteStroke};
	background-color: ${({ theme }) => theme.colors.deleteBackground};
	transition: background-color ${({ theme }) => theme.transDur} ease-in;
	> svg {
		path {
			transition: fill ${({ theme }) => theme.transDur} ease-in;
		}
	}
	&:hover {
		background-color: ${({ theme }) => theme.colors.deleteText};
		border: 1px solid ${({ theme }) => theme.colors.deleteText};
		> svg {
			> path {
				fill: ${({ theme }) => theme.colors.white};
			}
		}
	}
`
