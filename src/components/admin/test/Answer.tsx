import { CrossIcon } from '@/assets/icons/CrossIcon'
import { Button } from '@/ui/Buttons/Button'
import { Input, InputProps } from '@/ui/Inputs/Input'
import { forwardRef } from 'react'
import styled from 'styled-components'

interface AnswerProps extends InputProps {
	onClickRemove: () => void
}

export const Answer = forwardRef<HTMLInputElement, AnswerProps>(
	({ onClickRemove, ...rest }, ref) => {
		return (
			<AnswerWrapper>
				<Input {...rest} ref={ref} />
				<DeleteButton type='button' onClick={onClickRemove} $variant='default'>
					<CrossIcon />
				</DeleteButton>
			</AnswerWrapper>
		)
	}
)

const AnswerWrapper = styled('div')`
	width: 100%;
	display: grid;
	grid-template-columns: 90% max-content;
	gap: 0.8rem;
	align-items: flex-end;
`

const DeleteButton = styled(Button)`
	padding: 1.2rem 1.2rem;
	max-height: 48px;
`
