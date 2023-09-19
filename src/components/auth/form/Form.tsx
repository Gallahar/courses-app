import { useAuthForm } from './useForm'
import { FC } from 'react'
import { Title } from '@/ui/Typography/Title'
import { Input } from '@/ui/Inputs/Input'
import { Button } from '@/ui/Buttons/Button'
import { ActionLink } from '@/ui/Links/ActionLink'
import { Loader } from '@/ui/Loader'
import { StyledForm, FormBody, FormFooter } from './form.styles'
import { ValidationErrors } from '@/components/ValidationError'
import { ErrorMessage } from '@hookform/error-message'
import { registerErrors } from '@/config/constants'

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
				<Input {...passwordField}>
					{type === 'reg' && (
						<ErrorMessage
							errors={errors}
							name='password'
							render={({ messages }) => {
								return (
									<ValidationErrors
										title='Ваш пароль должен включать :'
										errorObject={messages}
										errors={registerErrors}
									/>
								)
							}}
						/>
					)}
				</Input>
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
