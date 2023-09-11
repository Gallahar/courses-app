import { router } from '@/app/router/router'
import { cookieService } from '@/lib/utils/cookieService'
import { userService } from '@/services/user.service'
import { User } from '@/types/user.interface'
import { makeAutoObservable } from 'mobx'
import { IPromiseBasedObservable, fromPromise } from 'mobx-utils'

class UserStore {
	user?: IPromiseBasedObservable<User>

	constructor() {
		makeAutoObservable(this)
	}

	refreshAction = () => {
		this.user = fromPromise(userService.refresh())
	}

	logoutAction = () => {
		cookieService.removeToken()
		this.user = undefined
		router.navigate('/auth/login')
	}
}

export default new UserStore()
