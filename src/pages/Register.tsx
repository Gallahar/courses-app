import { AuthForm } from '@/components/auth/form/Form'

export const RegisterPage = () => {
	return (
		<AuthForm
			key='reg'
			buttonText='Зарегистрироваться'
			href='/auth/login'
			labelLink='Есть аккаунт?'
			textLink='Войти'
			type='reg'
			title='Регистрация'
		/>
	)
}
