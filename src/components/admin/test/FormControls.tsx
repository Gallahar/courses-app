import { AddIcon } from '@/assets/icons/AddIcon'
import { Button } from '@/ui/Buttons/Button'
import { Loader } from '@/ui/Loader'
import { FC } from 'react'
import styled, { css, keyframes } from 'styled-components'

interface FormControls {
	onClick: () => void
	isFixed: boolean
	isLoading: boolean
}

const appear = keyframes`
0%{
    opacity: 0;
    transform: translateY(100%)
}

100%{
    opacity: 1;
    transform: translateY(0%);
}
`

const variants = {
	fixed: css`
		background-color: ${({ theme }) => theme.colors.white};
		position: fixed;
		bottom: 0;
		padding: 1.6rem 1.6rem;
		width: 100%;
		animation: ${appear} 300ms ease-in;
		> div {
			display: flex;

			${({ theme }) => theme.breakPoints.sm} {
				flex-direction: column-reverse;
			}
		}
	`,

	default: css`
		> div {
			display: inline-flex;
		}
	`,
}

export const FormControls: FC<FormControls> = ({
	onClick,
	isFixed,
	isLoading,
}) => {
	return (
		<PortalWrapper $align={isFixed ? 'fixed' : 'default'}>
			<ControlsWrapper>
				<Button
					icon={isLoading && <Loader />}
					disabled={isLoading}
					type='submit'
					form='TestForm'
					$variant='filled'
				>
					{isLoading ? 'Загрузка' : 'Сохранить'}
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
		</PortalWrapper>
	)
}

const PortalWrapper = styled('div')<{ $align: 'fixed' | 'default' }>`
	${({ $align }) => variants[$align]}
`

const ControlsWrapper = styled('div')`
	gap: 0.8rem;
	max-width: 544px;
	margin-inline: auto;
	width: 100%;
`
