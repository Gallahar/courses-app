import { QuitIcon } from '@/assets/icons/QuitIcon'
import { useUser } from '@/lib/hooks/useUser'
import { Button } from '@/ui/Button'
import { Container } from '@/ui/Container'
import { StyledText } from '@/ui/Text'
import { observer } from 'mobx-react-lite'
import { FC, PropsWithChildren } from 'react'
import UserStore from 'src/stores/UserStore'
import styled from 'styled-components'

export const Header: FC<PropsWithChildren> = observer(({ children }) => {
	const { email } = useUser()
	const { logoutAction } = UserStore

	return (
		<HeaderWrapper>
			<Container $variant='flex'>
				{children}
				<InfoWrapper>
					<StyledText $size='fsSm'>{email}</StyledText>
					<Button
						onClick={logoutAction}
						$order='row-reverse'
						icon={<QuitIcon />}
						$variant='default'
					>
						Выйти
					</Button>
				</InfoWrapper>
			</Container>
		</HeaderWrapper>
	)
})

const HeaderWrapper = styled('header')`
	width: 100%;
	padding: 1.2rem 0;
	background-color: ${({ theme }) => theme.colors.white};
	position: sticky;
	top: 0;
	z-index: 10;
`

const InfoWrapper = styled('div')`
	display: flex;
	align-items: center;
	gap: 1.6rem;
`
