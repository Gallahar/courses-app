import Cookies from 'js-cookie'

export const cookieService = {
	getToken() {
		const token = Cookies.get('token')
		return token ? JSON.parse(token) : null
	},

	setToken(token: string) {
		Cookies.set('token', JSON.stringify(token))
	},

	removeToken() {
		Cookies.remove('token')
	},
}
