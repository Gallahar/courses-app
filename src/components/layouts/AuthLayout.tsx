import { Section } from '@/ui/Containers/Section'
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'

export const AuthLayout = () => {
	return (
		<AuthSection $mWidth={544} $margin='0' $padding='1.6rem'>
			<Outlet />
		</AuthSection>
	)
}

const AuthSection = styled(Section)`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
`
