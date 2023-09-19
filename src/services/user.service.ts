import { axios } from '@/api/axios'
import { AuthDto } from '@/types/dto.interface'
import { Profile, User } from '@/types/user.interface'

type UserResponse = {
	user: User
	token: string
}

export const userService = {
	async login(dto: AuthDto): Promise<UserResponse> {
		return (await axios.post('/auth/login', dto)).data
	},

	async register(dto: AuthDto): Promise<UserResponse> {
		return (await axios.post('/auth/register', dto)).data
	},

	async refresh(): Promise<User> {
		return (await axios.get('/auth/refresh')).data
	},

	async profile(): Promise<Profile> {
		return (await axios.get('auth/profile')).data
	},
}
