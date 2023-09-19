import { User } from './user.interface'

export interface Test {
	_id: string
	title: string
	questions: Question[]
}

export type TestStatistics = Test & { results: Result[] }

export interface UserTestStat {
	_id: string
	test: string
	result: string
	date: string
}

export interface Question {
	_id: string
	question: string
	answers: string[]
	correctAnswer: string
}

interface Result {
	user: User
	result: string
	date: string
}
