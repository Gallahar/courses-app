export const emailRegexp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

export const passRegexps = {
word: /^(?=\D*\d)(?=[^a-z]*[a-z])[0-9a-z]+$/i,
upperCase: /(?=[A-ZА-Я])/g,
lowerCase: /(?=[a-zа-я])/g,
}

export const userLinks = [
	{ title: 'Курсы', to: 'courses' },
	{ title: 'Тесты', to: 'tests' },
	{ title: 'Профиль', to: '/' },
]

export const adminLinks = [
	{ title: 'Курсы', to: 'courses' },
	{ title: 'Тесты', to: 'tests' },
	{ title: 'Профиль', to: '/' },
	{ title: 'Админ панель', to: '/manage/courses' },
]

export const manageLinks = [
	{ title: 'Курсы', to: '/manage/courses' },
	{ title: 'Тесты', to: '/manage/tests' },
]

export const adminTestErrors = [
	{
		title: 'Один из ответов правильный',
		error: 'concurrence',
	},
	{ title: 'Минимум 3 варианта ответа', error: 'count' },
]

export const registerErrors = [
	{
		title: '8 символов',
		error: 'minLength',
	},
	{ title: 'Заглавные буквы', error: 'upperCase' },
	{
		title: 'Цифры и буквы',
		error: 'word',
	},
	{ title: 'Строчные буквы', error: 'lowerCase' },
]
