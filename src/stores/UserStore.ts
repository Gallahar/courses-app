import { router } from '@/app/router/router'
import { cookieService } from '@/lib/utils/cookieService'
import { courseService } from '@/services/course.service'
import { testService } from '@/services/test.service'
import { userService } from '@/services/user.service'
import { Course, CourseStatistics } from '@/types/course.interface'
import { AuthDto, CompleteTestDto } from '@/types/dto.interface'
import { Test, TestStatistics } from '@/types/test.interface'
import { Profile, User } from '@/types/user.interface'
import { AxiosError } from 'axios'
import { makeAutoObservable, runInAction } from 'mobx'
import { IPromiseBasedObservable, fromPromise } from 'mobx-utils'

class UserStore {
	isCompleteProceed = false
	isLoading = false
	error = ''
	user?: IPromiseBasedObservable<User>
	courses: Course[] = []
	course?: CourseStatistics
	tests: TestStatistics[] = []
	test?: Test
	profile?: Profile

	constructor() {
		makeAutoObservable(this)
	}

	registerUser = (dto: AuthDto) => {
		this.user = fromPromise(userService.register(dto).then((data) => data.user))
		router.navigate('/')
	}

	loginUser = (dto: AuthDto) => {
		this.user = fromPromise(userService.login(dto).then((data) => data.user))
		router.navigate('/')
	}

	refreshAction = () => {
		this.user = fromPromise(userService.refresh())
	}

	logoutAction = () => {
		cookieService.removeToken()
		this.user = undefined
		router.navigate('/auth/login')
	}

	fetchCourses = async () => {
		try {
			this.isLoading = true
			const res = await courseService.findAll()
			runInAction(() => {
				this.courses = res
				this.isLoading = false
			})
		} catch (error) {
			if (error instanceof AxiosError) {
				this.error = error.message
				this.isLoading = false
			}
		}
	}

	fetchCourseById = async (id: string) => {
		try {
			this.isLoading = true
			const res = await courseService.findById(id)

			runInAction(() => {
				this.course = res
				this.isLoading = false
			})
		} catch (error) {
			if (error instanceof AxiosError) {
				this.error = error.message
				this.isLoading = false
			}
		}
	}

	fetchTests = async () => {
		try {
			this.isLoading = true
			const res = await testService.findAll()
			runInAction(() => {
				this.tests = res
				this.isLoading = false
			})
		} catch (error) {
			if (error instanceof AxiosError) {
				this.error = error.message
				this.isLoading = false
			}
		}
	}

	fetchTestById = async (id: string) => {
		try {
			this.isLoading = true
			const res = await testService.findById(id)
			runInAction(() => {
				this.test = res
				this.isLoading = false
			})
		} catch (error) {
			if (error instanceof AxiosError) {
				this.error = error.message
			}
			this.isLoading = false
		}
	}

	completeTest = async (dto: CompleteTestDto) => {
		try {
			this.isCompleteProceed = true
			await testService.complete(dto)
			runInAction(() => {
				this.isCompleteProceed = false
			})
		} catch (error) {
			if (error instanceof AxiosError) {
				this.error = error.message
			}
			this.isCompleteProceed = false
		}
	}

	fetchProfile = async () => {
		try {
			this.isLoading = true
			const res = await userService.profile()
			runInAction(() => {
				this.profile = res
				this.isLoading = false
			})
		} catch (error) {
			if (error instanceof AxiosError) {
				this.error = error.message
				this.isLoading = false
			}
		}
	}
}

export default new UserStore()
