import { User } from '@/types/user.interface'
import { FullScreenLoader } from '@/ui/Loader'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import UserStore from 'src/stores/UserStore'

export const ProtectedAdminRoute = observer(() => {
	const { refreshAction, user } = UserStore

	useEffect(() => {
		refreshAction()
	}, [])
	return user?.case({
		pending: () => <FullScreenLoader />,
		fulfilled: (user) => {
			if (user.isAdmin) {
				return <Outlet context={user satisfies User} />
			} else {
				return <Navigate to={'/'} />
			}
		},
		rejected: () => <Navigate to='/auth/login' />,
	})
})
