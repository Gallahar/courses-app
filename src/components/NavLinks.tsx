import { CustomNavLink } from '@/ui/NavLink'
import { FC } from 'react'
import { styled } from 'styled-components'

interface NavLinksProps {
	links: { title: string; to: string }[]
}

export const NavLinks: FC<NavLinksProps> = ({ links }) => {
	return (
		<LinksWrapper>
			{links.map(({ title, to }) => (
				<CustomNavLink key={title} to={to}>
					{title}
				</CustomNavLink>
			))}
		</LinksWrapper>
	)
}

const LinksWrapper = styled('nav')`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 3.2rem;
`
