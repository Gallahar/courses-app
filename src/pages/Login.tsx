import { AuthForm } from '@/components/auth/form/Form'

export const LoginPage = () => {
	return (
		<AuthForm
			buttonText='Войти'
			href='/auth/register'
			labelLink='Нету аккаунта?'
			textLink='Зарегистрироваться'
			type='log'
			title='Вход'
		/>
	)
}
