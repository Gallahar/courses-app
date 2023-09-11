import { emailRegexp } from '@/lib/utils/constants'
import { userService } from '@/services/user.service'
import { AuthDto } from '@/types/dto.interface'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

export const useAuthForm = (type: 'reg' | 'log') => {
	const [isLoading, setIsLoading] = useState(false)
	const nav = useNavigate()

	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<AuthDto>({
		mode: 'onBlur',
		reValidateMode: 'onChange',
	})

	const onSubmit = handleSubmit(async (dto) => {
		try {
			setIsLoading(true)
			if (type === 'reg') {
				await userService.register(dto)
				nav('/')
			} else {
				await userService.login(dto)
				nav('/')
			}
		} catch (e) {
			console.log(e)
		} finally {
			setIsLoading(false)
		}
	})

	const passwordField = {
		placeholder: 'Введите ваш пароль',
		label: 'Пароль',
		...register('password', {
			required: 'это поле обязательно',
			minLength: {
				value: 6,
				message: 'должен быть длиннее 6',
			},
			maxLength: {
				value: 12,
				message: 'должен быть короче 12',
			},
		}),
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
