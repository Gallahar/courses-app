import { manageLinks } from '@/config/constants'
import { Header } from '../Header'
import { NavLinks } from '../NavLinks'
import { Outlet } from 'react-router-dom'
import { AdminNavigation } from '../admin/AdminNavigation'
import { observer } from 'mobx-react-lite'
import AdminStore from 'src/stores/AdminStore'
import { useEffect } from 'react'

export const AdminLayout = observer(() => {
	const { fetchCourses, fetchTests } = AdminStore

	useEffect(() => {
		fetchCourses()
		fetchTests()
	}, [])

	return (
		<>
			<Header>
				<AdminNavigation>
					<NavLinks links={manageLinks} />
				</AdminNavigation>
			</Header>
			<Outlet />
		</>
	)
})
