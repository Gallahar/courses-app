import { courseService } from '@/services/course.service'
import { testService } from '@/services/test.service'
import { Course, CourseStatistics } from '@/types/course.interface'
import { UpdateCourseDto, UpdateTestDto } from '@/types/dto.interface'
import { Test, TestStatistics } from '@/types/test.interface'
import { AxiosError } from 'axios'
import { makeAutoObservable, runInAction } from 'mobx'

class AdminStore {
	error = ''
	isLoading = false
	courses: Course[] = []
	tests: Test[] = []
	currentCourse?: Course
	currentTest?: Test
	courseStat?: CourseStatistics
	testStat?: TestStatistics

	constructor() {
		makeAutoObservable(this)
	}

	fetchCourses = async () => {
		try {
			this.isLoading = true
			const res = await courseService.findAllAdmin()
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

	addCourse = async () => {
		try {
			const course = await courseService.create()
			runInAction(() => {
				this.courses.push(course)
			})
		} catch (error) {
			if (error instanceof AxiosError) {
				this.error = error.message
			}
		}
	}

	deleteCourse = async (id: string) => {
		try {
			this.isLoading = true
			await courseService.delete(id)
			runInAction(() => {
				this.courses = this.courses.filter((course) => course._id !== id)
				this.isLoading = false
			})
		} catch (error) {
			if (error instanceof AxiosError) {
				this.error = error.message
				this.isLoading = false
			}
		}
	}

	updateCourse = async (dto: UpdateCourseDto) => {
		try {
			this.isLoading = true
			const res = await courseService.update(dto)
			runInAction(() => {
				this.courses = this.courses.map((course) =>
					course._id === res._id ? res : course
				)
				this.isLoading = false
			})
		} catch (error) {
			if (error instanceof AxiosError) {
				this.error = error.message
			}
			this.isLoading = false
		}
	}

	selectCourse = (id: string) => {
		this.currentCourse = this.courses.find((course) => course._id === id)
	}

	fetchCourseStat = async (id: string) => {
		if (this.courseStat?._id !== id) {
			this.courseStat = undefined

			try {
				this.isLoading = true
				const res = await courseService.findByIdStatistics(id)
				runInAction(() => {
					this.courseStat = res
					this.isLoading = false
				})
			} catch (error) {
				if (error instanceof AxiosError) {
					this.error = error.message
				}
				this.isLoading = false
			}
		} else {
			return
		}
	}

	//course actions end

	fetchTests = async () => {
		try {
			this.isLoading = true
			const res = await testService.findAllAdmin()
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

	addTest = async () => {
		try {
			const test = await testService.create()
			this.tests.push(test)
		} catch (error) {
			if (error instanceof AxiosError) {
				this.error = error.message
			}
		}
	}

	deleteTest = async (id: string) => {
		try {
			this.isLoading = true
			await testService.delete(id)
			runInAction(() => {
				this.tests = this.tests.filter((test) => test._id !== id)
				this.isLoading = false
			})
		} catch (error) {
			if (error instanceof AxiosError) {
				this.error = error.message
				this.isLoading = false
			}
		}
	}

	updateTest = async (dto: UpdateTestDto) => {
		try {
			this.isLoading = true
			const res = await testService.update(dto)
			runInAction(() => {
				this.tests = this.tests.map((test) =>
					test._id === res._id ? res : test
				)
				this.isLoading = false
			})
		} catch (error) {
			if (error instanceof AxiosError) {
				this.error = error.message
			}
			this.isLoading = false
		}
	}

	selectTest = (id: string) => {
		this.currentTest = this.tests.find((test) => test._id === id)
	}

	fetchTestStat = async (id: string) => {
		if (this.testStat?._id !== id) {
			this.testStat = undefined

			try {
				this.isLoading = true
				const res = await testService.findByIdStatistics(id)
				runInAction(() => {
					this.testStat = res
					this.isLoading = false
				})
			} catch (error) {
				if (error instanceof AxiosError) {
					this.error = error.message
				}
				this.isLoading = false
			}
		} else {
			return
		}
	}
}

export default new AdminStore()
