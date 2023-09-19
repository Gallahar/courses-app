import { emailRegexp, passRegexps } from '@/config/constants'
import { userService } from '@/services/user.service'
import { AuthDto } from '@/types/dto.interface'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export const useAuthForm = (type: 'reg' | 'log') => {
	const [isLoading, setIsLoading] = useState(false)
	const nav = useNavigate()
	const { lowerCase, upperCase, word } = passRegexps

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<AuthDto>({
		mode: 'onTouched',
		reValidateMode: type === 'reg' ? 'onBlur' : 'onSubmit',
		criteriaMode: type === 'reg' ? 'all' : 'firstError',
	})

	const onSubmit = handleSubmit(async (dto) => {
		try {
			setIsLoading(true)
			if (type === 'reg') {
				await userService.register(dto)
				nav('/', { replace: true })
			} else {
				await userService.login(dto)
				nav('/', { replace: true })
			}
		} catch (e) {
			console.log(e)
		} finally {
			setIsLoading(false)
		}
	})

	let passwordField

	if (type === 'reg') {
		passwordField = {
			variant: 'password',
			placeholder: 'Введите ваш пароль',
			label: 'Пароль',
			...register('password', {
				validate: {
					minLength: (value) =>
						value.replace(/\s+/g, '').length > 7 || '8 символов',
					upperCase: (value) => upperCase.test(value) || 'Заглавные буквы',
					word: (value) => word.test(value) || 'Буквы и цифры',
					lowerCase: (value) => lowerCase.test(value) || 'Строчные буквы',
				},
			}),
		}
	} else {
		passwordField = {
			error: errors.password?.message,
			variant: 'password',
			placeholder: 'Введите ваш пароль',
			label: 'Пароль',
			...register('password', {
				required: 'это поле обязательно',
				minLength: {
					value: 4,
					message: 'должен быть длиннее 4',
				},
				maxLength: {
					value: 12,
					message: 'должен быть короче 12',
				},
			}),
		}
	}

	const emailField = {
		type: 'email',
		placeholder: 'Введите адрес электронной почты',
		label: 'Электронная почта',
		...register('email', {
			required: 'это поле обязательно',
			pattern: {
				value: emailRegexp,
				message: 'должен быть эмейлом',
			},
		}),
	}
	return {
		passwordField,
		emailField,
		onSubmit,
		isLoading,
		errors,
	}
}
