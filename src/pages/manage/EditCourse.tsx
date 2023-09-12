import { AdminPageWrapper } from '@/components/admin/AdminPageWrapper'
import { CourseForm } from '@/components/admin/course/CourseForm'
import { FullScreenLoader } from '@/ui/Loader'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AdminStore from 'src/stores/AdminStore'

export const EditCourse = observer(() => {
	const { currentCourse, selectCourse, tests, courses, error } = AdminStore
	const { courseId } = useParams()

	useEffect(() => {
		if (courseId) selectCourse(courseId)

		return () => {
			selectCourse('')
		}
	}, [courseId, courses])

	return (
		<AdminPageWrapper
			link='courses'
			title={
				currentCourse
					? `Редактировать курс: "${currentCourse.title}"`
					: 'Загрузка'
			}
		>
			{!currentCourse && !error && (
				<FullScreenLoader $size='100px' $color='lightblue' />
			)}
			{currentCourse && (
				<CourseForm
					_id={currentCourse._id}
					title={currentCourse.title}
					text={currentCourse.text}
					addedTests={currentCourse.tests}
					tests={tests}
				/>
			)}
		</AdminPageWrapper>
	)
})
