import { userLinks, adminLinks } from '@/config/constants'
import { Header } from '../Header'
import { NavLinks } from '../NavLinks'
import { Outlet } from 'react-router-dom'
import { useUser } from '@/lib/hooks/useUser'
import UserStore from 'src/stores/UserStore'
import { useEffect } from 'react'

export const MainLayout = () => {
	const user = useUser()
	const { fetchCourses, fetchTests } = UserStore

	useEffect(() => {
		fetchCourses()
		fetchTests()
	}, [])

	return (
		<>
			<Header links={user.isAdmin ? adminLinks : userLinks}>
				<NavLinks links={user.isAdmin ? adminLinks : userLinks} />
			</Header>
			<Outlet context={user} />
		</>
	)
}
