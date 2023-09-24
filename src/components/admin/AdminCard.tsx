import { DeleteIcon } from '@/assets/icons/DeleteIcon'
import { EditIcon } from '@/assets/icons/EditIcon'
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
					<Button icon={<EditIcon />} $variant='default'>
						Редактировать
					</Button>
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
	padding: 1.6rem;
	gap: 1.6rem;
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
`

const ActionsWrapper = styled('div')`
	display: flex;
	flex-wrap: wrap;
	gap: 0.8rem;

	${({ theme }) => theme.breakPoints.sm} {
		width: 100%;
		svg + span {
			display: none;
		}

		> button {
			margin-left: auto;
		}
	}
`
