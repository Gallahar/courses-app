import { DeleteIcon } from '@/assets/icons/DeleteIcon'
import { Button } from '@/ui/Buttons/Button'
import { DeleteButton } from '@/ui/Buttons/DeleteButton'
import { Loader } from '@/ui/Loader'
import { StyledText } from '@/ui/Typography/Text'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface AdminCardProps {
	title: string
	_id: string
	onClickDelete: (id: string) => void
	isLoading: boolean
}

export const AdminCard: FC<AdminCardProps> = ({
	_id,
	onClickDelete,
	title,
	isLoading,
}) => {
	return (
		<CardWrapper>
			<StyledText $size='fsMd'>{title}</StyledText>
			<ActionsWrapper>
				<Link to={`edit/${_id}`}>
					<Button $variant='default'>Редактировать</Button>
				</Link>
				<Link to={_id}>
					<Button $variant='default'>Статистика</Button>
				</Link>
				<DeleteButton disabled={isLoading} onClick={() => onClickDelete(_id)}>
					{isLoading ? (
						<Loader $size='22px' $color='deleteText' />
					) : (
						<DeleteIcon />
					)}
				</DeleteButton>
			</ActionsWrapper>
		</CardWrapper>
	)
}

const CardWrapper = styled('div')`
	background-color: ${({ theme }) => theme.colors.white};
	border-radius: ${({ theme }) => theme.borderRadius};
	padding: 0.8rem 1.6rem;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

const ActionsWrapper = styled('div')`
	display: flex;
	gap: 0.8rem;
`
