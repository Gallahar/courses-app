import { cookieService } from '@/lib/utils/cookieService'
import { User } from '@/types/user.interface'
import axiosInstance, {
	AxiosError,
	AxiosResponse,
	InternalAxiosRequestConfig,
} from 'axios'
import { toast } from 'react-toastify'

const axios = axiosInstance.create({
	baseURL: import.meta.env.VITE_PUBLIC_API_URL,
	withCredentials: true,
	responseType: 'json',
})

axios.interceptors.request.use(
	async (
		config: InternalAxiosRequestConfig
	): Promise<InternalAxiosRequestConfig> => {
		const token = cookieService.getToken()
		if (token) {
			config.headers.token = token
		}
		return config
	}
)

const onRejectedResponse = async (
	error: AxiosError<{ message: string }>
): Promise<AxiosError> => {
	if (error.response) {
		if ('message' in error.response.data) {
			toast.error(error.response.data.message)
		}
	}

	throw error
}

const onFulfilledResponse = async (
	response: AxiosResponse<{ token?: string; user?: User }>
): Promise<AxiosResponse> => {
	if (response.data && response.data.token) {
		cookieService.setToken(response.data.token)
	}
	return response
}

axios.interceptors.response.use(onFulfilledResponse, onRejectedResponse)

export { axios }
