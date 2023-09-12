import { AdminPageWrapper } from '@/components/admin/AdminPageWrapper'
import { TestForm } from '@/components/admin/test/TestForm'
import { FullScreenLoader } from '@/ui/Loader'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AdminStore from 'src/stores/AdminStore'

export const EditTest = observer(() => {
	const { currentTest, selectTest, tests, error } = AdminStore
	const { testId } = useParams()

	useEffect(() => {
		if (testId) selectTest(testId)

		return () => {
			selectTest('')
		}
	}, [testId, tests])

	return (
		<AdminPageWrapper
			link='tests'
			title={
				currentTest ? `Редактировать тест: "${currentTest.title}"` : 'Загрузка'
			}
		>
			{!currentTest && !error && (
				<FullScreenLoader $size='100px' $color='lightblue' />
			)}
			{currentTest && (
				<TestForm
					_id={currentTest._id}
					questions={currentTest.questions}
					title={currentTest.title}
				/>
			)}
		</AdminPageWrapper>
	)
})
