import { Course } from './course.interface'

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
	dto: {
		title: string
		questions: {
			question: string
			answers: string[]
			correctAnswer: string
		}[]
	}
}

export interface CompleteTestDto {
	_id: string
	result: string
}
