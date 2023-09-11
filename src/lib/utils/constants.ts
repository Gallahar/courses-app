export const emailRegexp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

export const userLinks = [
	{ title: 'Главная', to: '/' },
	{ title: 'Курсы', to: '/courses' },
	{ title: 'Тесты', to: '/tests' },
	{ title: 'Профиль', to: '/profile' },
]

export const adminLinks = [
	{ title: 'Главная', to: '/' },
	{ title: 'Курсы', to: '/courses' },
	{ title: 'Тесты', to: '/tests' },
	{ title: 'Профиль', to: '/profile' },
	{ title: 'Админ панель', to: '/manage/courses' },
]

export const manageLinks = [
	{ title: 'Курсы', to: '/manage/courses' },
	{ title: 'Тесты', to: '/manage/tests' },
]
