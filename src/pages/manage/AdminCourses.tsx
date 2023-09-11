import { AdminCard } from '@/components/admin/AdminCard'
import { AdminItems } from '@/components/admin/AdminItems'
import { FullScreenLoader } from '@/ui/Loader'
import { observer } from 'mobx-react-lite'
import AdminStore from 'src/stores/AdminStore'

export const AdminCourses = observer(() => {
	const { courses, addCourse, error, deleteCourse, isLoading } = AdminStore

	return (
		<AdminItems onClickAdd={addCourse} title='Список курсов'>
			{!courses && !error ? (
				<FullScreenLoader />
			) : (
				courses.map(({ _id, title }) => (
					<AdminCard
						onClickDelete={deleteCourse}
						_id={_id}
						title={title}
						key={_id}
						isLoading={isLoading}
					/>
				))
			)}
		</AdminItems>
	)
})
