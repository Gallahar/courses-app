import { InputHTMLAttributes, forwardRef } from 'react'
import styled from 'styled-components'

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
	label?: string
}

export const CheckBox = forwardRef<HTMLInputElement, CheckBoxProps>(
	({ label, id, className, ...rest }, ref) => {
		return (
			<Wrapper className={className}>
				<Input type='checkbox' id={id} {...rest} ref={ref} />
				<label htmlFor={id}>
					<div>
						<svg
							width='16'
							height='16'
							viewBox='0 0 16 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M6.30023 11.9L2.56689 8.16665L3.28356 7.44998L6.30023 10.4667L12.7002 4.06665L13.4169 4.78332L6.30023 11.9Z'
								stroke='#FFF'
							/>
						</svg>
					</div>
					{label}
				</label>
			</Wrapper>
		)
	}
)

const Wrapper = styled('div')`
	max-width: fit-content;
`

const Input = styled('input')`
	display: none;
	pointer-events: none;

	& + label {
		display: flex;
		align-items: center;
		gap: 0.8rem;
		padding: 0.8rem;
		font-size: 1.6rem;
		font-weight: 400;
		line-height: 150%;
		user-select: none;
		color: ${({ theme }) => theme.colors.textDark};
		background-color: ${({ theme }) => theme.colors.surface};
		border-radius: ${({ theme }) => theme.borderRadius};
		transition: all 300ms ease-in;
		svg {
			path {
				fill: none;
				stroke-dasharray: 70;
				stroke-dashoffset: 70;
				transition: stroke-dashOffset 500ms ease-in-out;
			}
		}

		> div {
			width: 24px;
			height: 24px;
			display: flex;
			justify-content: center;
			align-items: center;
			border-radius: 4px;
			border: 1px solid ${({ theme }) => theme.colors.inputOutline};
			background-color: ${({ theme }) => theme.colors.white};
			transition: border 300ms ease-in;
		}

		&:hover {
			background-color: ${({ theme }) => theme.colors.white};
			> div {
				border: 1px solid ${({ theme }) => theme.colors.lightblue};
			}
		}
	}

	&:checked {
		& + label {
			background-color: #e9ebf3;
			svg {
				path {
					stroke-dashoffset: 0;
				}
			}
			> div {
				background-color: ${({ theme }) => theme.colors.lightblue};
				border: 1px solid ${({ theme }) => theme.colors.lightblue};
			}
		}
	}
`
