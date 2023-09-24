import { AddIcon } from '@/assets/icons/AddIcon'
import { Button } from '@/ui/Buttons/Button'
import { CardsList } from '@/ui/Containers/CardsList'
import { Section } from '@/ui/Containers/Section'
import { StyledText } from '@/ui/Typography/Text'
import { Title } from '@/ui/Typography/Title'
import { FC, ReactNode } from 'react'
import { styled } from 'styled-components'

interface AdminItemsProps {
	title: string
	children: ReactNode
	onClickAdd: () => void
}

export const AdminItems: FC<AdminItemsProps> = ({
	title,
	children,
	onClickAdd,
}) => {
	return (
		<StyledAdminSection $padding='1.6rem'>
			<Title text={title} />
			<Button
				onClick={onClickAdd}
				icon={<AddIcon />}
				$order='row'
				$variant='filled'
			>
				Добавить новый
			</Button>
			<ActionsContainer>
				<TextContainer>
					<StyledText $color='linkDefault' $size='fsMd'>
						{`Название ${title === 'Список курсов' ? 'курса' : 'теста'}`}
					</StyledText>
					<StyledText $color='linkDefault' $size='fsMd'>
						Действия
					</StyledText>
				</TextContainer>
				<CardsList>{children}</CardsList>
			</ActionsContainer>
		</StyledAdminSection>
	)
}

const StyledAdminSection = styled(Section)`
	display: flex;
	flex-direction: column;
	gap: 3.2rem;

	> button {
		align-self: flex-start;

		${({ theme }) => theme.breakPoints.sm} {
			align-self: unset;
		}
	}
`

const ActionsContainer = styled('div')`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
`

const TextContainer = styled('div')`
	width: 100%;
	display: flex;
	justify-content: space-between;
`
