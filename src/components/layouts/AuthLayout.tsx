import { Container } from '@/ui/Containers/Container'
import { Outlet } from 'react-router-dom'

export const AuthLayout = () => {
	return (
		<Container style={{ alignItems: 'center' }} $variant='grid'>
			<Outlet />
		</Container>
	)
}
