import { ArrowLeftIcon } from '@/assets/icons/ArrowLeftIcon'
import { Button } from '@/ui/Buttons/Button'
import { StyledText } from '@/ui/Typography/Text'
import { FC, PropsWithChildren } from 'react'
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'

export const AdminNavigation: FC<PropsWithChildren> = ({ children }) => {
	const nav = useNavigate()

	return (
		<NavContainer>
			<Button
				icon={<ArrowLeftIcon />}
				$order='row'
				$variant='default'
				onClick={() => nav('/')}
			>
				На главную
			</Button>
			<StyledText $size='fsSm'>Админ панель</StyledText>
			<Divider />
			{children}
		</NavContainer>
	)
}

const NavContainer = styled('nav')`
	display: flex;
	align-items: center;
	gap: 1.6rem;

	${({ theme }) => theme.breakPoints.sm} {
		display: none;
	}
`

const Divider = styled('div')`
	background-color: ${({ theme }) => theme.colors.textDark};
	height: 2.4rem;
	width: 0.1rem;
`
