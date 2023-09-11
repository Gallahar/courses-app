import { CompleteTestDto, UpdateTestDto } from '@/types/dto.interface'
import { Test, TestStatistics } from '@/types/test.interface'
import { axios } from '@/api/axios'

export const testService = {
	async findAll(): Promise<Test[]> {
		return (await axios.get('/test/find')).data
	},
	async findById(id: string): Promise<Test> {
		return (await axios.get(`/test/${id}`)).data
	},
	async findByIdStatistics(id: string): Promise<TestStatistics> {
		return (await axios.get(`/test/statistics/${id}`)).data
	},

	async findAllAdmin(): Promise<Test[]> {
		return (await axios.get('/test/find-admin')).data
	},

	async complete(dto: CompleteTestDto): Promise<void> {
		return (await axios.post('/test/complete', dto)).data
	},

	async create(): Promise<Test> {
		return (await axios.post('/test/create')).data
	},
	async update(dto: UpdateTestDto): Promise<Test> {
		return (await axios.post('/test/update', dto)).data
	},
	async delete(id: string): Promise<void> {
		return (await axios.delete(`/test/${id}`)).data
	},
}
