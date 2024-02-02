import { User } from '@/types/user.interface'
import { FullScreenLoader } from '@/ui/Loader'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import UserStore from 'src/stores/UserStore'

export const ProtectedUserRoute = observer(() => {
	const { refreshAction, user } = UserStore

	useEffect(() => {
		if (!user) {
			refreshAction()
		}
	}, [])

	return user?.case({
		pending: () => <FullScreenLoader />,
		fulfilled: (user) => <Outlet context={user satisfies User} />,
		rejected: () => <Navigate to='/auth/login' />,
	})
})
