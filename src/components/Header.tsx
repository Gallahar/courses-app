import { BurgerIcon } from '@/assets/icons/BurgerIcon'
import { QuitIcon } from '@/assets/icons/QuitIcon'
import { useUser } from '@/lib/hooks/useUser'
import { Button } from '@/ui/Buttons/Button'
import { Section } from '@/ui/Containers/Section'
import { StyledText } from '@/ui/Typography/Text'
import { observer } from 'mobx-react-lite'
import { FC, PropsWithChildren, useState } from 'react'
import UserStore from 'src/stores/UserStore'
import styled from 'styled-components'
import { MobileMenu } from './MobileMenu'

export const Header: FC<
	PropsWithChildren<{ links?: { title: string; to: string }[] }>
> = observer(({ children, links = [] }) => {
	const { email } = useUser()
	const { logoutAction } = UserStore
	const [openBurger, setOpenBurger] = useState(false)

	const closeBurgerHandler = () => {
		setTimeout(() => setOpenBurger(false), 350)
	}

	return (
		<HeaderWrapper id='header'>
			<HeaderSection $margin='0' $padding='1.6rem'>
				<BurgerMenu onClick={() => setOpenBurger(true)} $variant='default'>
					<BurgerIcon />
				</BurgerMenu>
				<StyledText $size='fsMd'>{email}</StyledText>
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
			</HeaderSection>
			{openBurger && (
				<MobileMenu
					links={links}
					onClickClose={closeBurgerHandler}
					title={email}
				/>
			)}
		</HeaderWrapper>
	)
})

const HeaderWrapper = styled('header')`
	width: 100%;
	padding: 1.2rem 0;
	background-color: ${({ theme }) => theme.colors.white};
	position: fixed;
	top: 0;
	z-index: 10;

	${({ theme }) => theme.breakPoints.sm} {
		padding: 48px 0 8px;
	}
`

const HeaderSection = styled(Section)`
	display: flex;
	justify-content: space-between;
	align-items: center;

	> p {
		display: none;
		${({ theme }) => theme.breakPoints.sm} {
			display: block;
		}
	}
`

const InfoWrapper = styled('div')`
	display: flex;
	align-items: center;
	gap: 1.6rem;

	${({ theme }) => theme.breakPoints.sm} {
		svg + span {
			display: none;
		}
		> p {
			display: none;
		}
	}
`

const BurgerMenu = styled(Button)`
	display: none;

	${({ theme }) => theme.breakPoints.sm} {
		display: flex;
	}
`
