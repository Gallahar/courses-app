import { AddIcon } from '@/assets/icons/AddIcon'
import { Button } from '@/ui/Buttons/Button'
import { FC } from 'react'
import styled, { css } from 'styled-components'

interface FormControls {
	onClick: () => void
	questionsLength: number
}

export const FormControls: FC<FormControls> = ({
	onClick,
	questionsLength,
}) => {
	console.log(questionsLength)
	return (
		<div className={questionsLength > 2 ? 'fixed' : 'default'}>
			<ControlsWrapper>
				<Button type='submit' form='TestForm' $variant='filled'>
					Сохранить
				</Button>
				<Button
					onClick={onClick}
					$variant='default'
					icon={<AddIcon fill='#353535' />}
					type='button'
				>
					Добавить вопрос
				</Button>
			</ControlsWrapper>
		</div>
	)
}

const ControlsWrapper = styled('div')`
	
	gap: 0.8rem;
	max-width: 544px;
	margin-inline: auto;
	width: 100%;
`

