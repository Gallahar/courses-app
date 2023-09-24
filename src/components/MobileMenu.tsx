import { ArrowLeftIcon } from '@/assets/icons/ArrowLeftIcon'
import { CrossIcon } from '@/assets/icons/CrossIcon'
import { QuitIcon } from '@/assets/icons/QuitIcon'
import UserStore from '@/stores/UserStore'
import { Button } from '@/ui/Buttons/Button'
import { MobileLink } from '@/ui/Links/MobileLink'
import { StyledText } from '@/ui/Typography/Text'
import { FC, PropsWithChildren, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import styled, { keyframes } from 'styled-components'

interface MobileMenuProps {
	onClickClose: () => void
	title: string
	links: { title: string; to: string }[]
}

export const MobileMenu: FC<PropsWithChildren<MobileMenuProps>> = ({
	onClickClose,
	title,
	links,
}) => {
	const { logoutAction } = UserStore
	const { pathname } = useLocation()
	const [slideOut, setSlideOut] = useState(false)

	const closeHandler = () => {
		onClickClose()
		setSlideOut(true)
	}

	return (
		<MenuWrapper $isClosed={slideOut}>
			<MenuHeading>
				<Link
					style={{
						visibility: pathname?.includes('manage') ? 'visible' : 'hidden',
					}}
					to={'/'}
				>
					<Button $variant='default'>
						<ArrowLeftIcon />
					</Button>
				</Link>
				<StyledText $size='fsMd'>{title}</StyledText>
				<Button onClick={closeHandler} $variant='default'>
					<CrossIcon />
				</Button>
			</MenuHeading>
			<LinksWrapper>
				{links.map(({ title, to }) => (
					<MobileLink onClick={closeHandler} to={to}>
						{title}
					</MobileLink>
				))}
			</LinksWrapper>
			<Button
				onClick={logoutAction}
				icon={<QuitIcon />}
				$order='row-reverse'
				$variant='default'
			>
				Выйти
			</Button>
		</MenuWrapper>
	)
}

const slideIn = keyframes`
0%{
    transform: translateX(-100%);
}

100%{
    transform: translateX(0%);
}
`

const MenuWrapper = styled('div')<{ $isClosed: boolean }>`
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	z-index: 12;
	padding: 48px 16px;
	background-color: ${({ theme }) => theme.colors.white};
	display: flex;
	flex-direction: column;
	gap: 32px;
	animation: ${slideIn} 350ms ease-in;
	transform: ${({ $isClosed }) => `translateX(${$isClosed ? '-100%' : '0%'})`};
	transition: transform 350ms ease-out;

	> button {
		margin-top: auto;
		align-self: flex-start;
	}
`
const MenuHeading = styled('div')`
	display: grid;
	grid-template-columns: repeat(3, max-content);
	justify-content: space-between;
	align-items: center;
	width: 100%;
`

const LinksWrapper = styled('nav')`
	display: flex;
	flex-direction: column;
	gap: 8px;
`
