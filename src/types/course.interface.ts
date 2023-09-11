import { Test } from './test.interface'
import { User } from './user.interface'

export interface Course {
	_id: string
	title: string
	text: string
	userCompleted: string[]
	tests: string[]
}

export interface CourseStatistics {
	_id: string
	title: string
	text: string
	userCompleted: User[]
	tests: Test[]
}
