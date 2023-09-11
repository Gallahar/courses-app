import { userLinks, adminLinks } from '@/lib/utils/constants'
import { Header } from '../Header'
import { NavLinks } from '../NavLinks'
import { Outlet } from 'react-router-dom'
import { useUser } from '@/lib/hooks/useUser'
import { Section } from '@/ui/Section'

export const MainLayout = () => {
	const { isAdmin } = useUser()
	return (
		<>
			<Header>
				<NavLinks links={isAdmin ? adminLinks : userLinks} />
			</Header>
			<Section>
				<Outlet />
			</Section>
		</>
	)
}
