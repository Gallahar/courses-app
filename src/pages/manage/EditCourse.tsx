import { ArrowLeftIcon } from '@/assets/icons/ArrowLeftIcon'
import { CourseForm } from '@/components/admin/course/CourseForm'
import { Button } from '@/ui/Button'
import { FullScreenLoader } from '@/ui/Loader'
import { Section } from '@/ui/Section'
import { Title } from '@/ui/Title'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import AdminStore from 'src/stores/AdminStore'

export const EditCourse = observer(() => {
	const { currentCourse, selectCourse, tests, courses } = AdminStore
	const { courseId } = useParams()

	useEffect(() => {
		if (courseId) selectCourse(courseId)
	}, [courseId, courses])

	return (
		<Section $mWidth={928}>
			<Title
				text={
					currentCourse
						? `Редактировать курс: "${currentCourse.title}"`
						: 'Произошла ошибка'
				}
			/>
			<Section $margin='32px' $mWidth={544}>
				<Link style={{ display: 'inline-block' }} to={'/manage/courses'}>
					<Button $variant='default' icon={<ArrowLeftIcon />}>
						Назад
					</Button>
				</Link>
				{!currentCourse ? (
					<FullScreenLoader $size='100px' $color='lightblue' />
				) : (
					<CourseForm
						_id={currentCourse._id}
						title={currentCourse.title}
						text={currentCourse.text}
						addedTests={currentCourse.tests}
						tests={tests}
					/>
				)}
			</Section>
		</Section>
	)
})
