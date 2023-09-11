import { Course } from './course.interface'
import { Test } from './test.interface'

export interface User {
	email: string
	isAdmin: boolean
	_id: string
	coursesCompeted: string[]
	testsCompleted: string[]
}

export interface Profile {
	email: string
	_id: string
	isAdmin: boolean
	coursesCompleted: Course[]
	testsCompleted: Test[]
}
