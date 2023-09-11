import { Course } from './course.interface'
import { Test } from './test.interface'

export interface AuthDto {
	email: string
	password: string
}

export interface UpdateCourseDto {
	_id: string
	dto: Pick<Course, 'title' | 'text'> & { tests: string[] }
}

export interface UpdateTestDto {
	_id: string
	dto: Omit<Test, '_id'>
}

export interface CompleteTestDto {
	_id: string
	result: string
}
