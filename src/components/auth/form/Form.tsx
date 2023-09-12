import { useAuthForm } from './useForm'
import { FC } from 'react'
import { Title } from '@/ui/Typography/Title'
import { Input } from '@/ui/Inputs/Input'
import { Button } from '@/ui/Buttons/Button'
import { ActionLink } from '@/ui/Links/ActionLink'
import { Loader } from '@/ui/Loader'
import { StyledForm, FormBody, FormFooter } from './form.styles'

interface AuthFormProps {
	type: 'reg' | 'log'
	title: string
	buttonText: string
	href: string
	labelLink: string
	textLink: string
}

export const AuthForm: FC<AuthFormProps> = ({
	href,
	title,
	type,
	buttonText,
	labelLink,
	textLink,
}) => {
	const { emailField, isLoading, onSubmit, passwordField, errors } =
		useAuthForm(type)

	return (
		<StyledForm onSubmit={onSubmit}>
			<Title text={title} />
			<FormBody>
				<Input error={errors.email?.message} {...emailField} />
				<Input
					variant='password'
					error={errors.password?.message}
					{...passwordField}
				/>
			</FormBody>
			<FormFooter>
				<Button
					$order='row'
					disabled={isLoading}
					icon={isLoading && <Loader />}
					type='submit'
					$variant='filled'
				>
					{isLoading ? 'загрузка..' : buttonText}
				</Button>
				<ActionLink to={href} $variant='auth' label={labelLink}>
					{textLink}
				</ActionLink>
			</FormFooter>
		</StyledForm>
	)
}
