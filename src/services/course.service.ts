import { axios } from '@/api/axios'
import { Course, CourseStatistics } from '@/types/course.interface'
import { UpdateCourseDto } from '@/types/dto.interface'

export const courseService = {
	async findAll(): Promise<Course[]> {
		return (await axios.get('/course/find')).data
	},
	async findById(id: string): Promise<CourseStatistics> {
		return (await axios.get(`/course/${id}`)).data
	},
	async complete(dto: { _id: string }): Promise<void> {
		return (await axios.post('/course/complete', dto)).data
	},

	async findAllAdmin(): Promise<Course[]> {
		return (await axios.get('/course/find-admin')).data
	},

	async findByIdStatistics(id: string): Promise<CourseStatistics> {
		return (await axios.get(`/course/statistics/${id}`)).data
	},

	async create(): Promise<Course> {
		return (await axios.post('/course/create')).data
	},
	async update(dto: UpdateCourseDto): Promise<Course> {
		return (await axios.post('/course/update', dto)).data
	},
	async delete(id: string): Promise<void> {
		return (await axios.delete(`/course/${id}`)).data
	},
}
