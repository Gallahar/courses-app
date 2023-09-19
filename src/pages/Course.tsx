import { StatCard } from '@/components/StatCard'
import { StatHeading } from '@/components/StatHeading'
import { useUser } from '@/lib/hooks/useUser'
import { courseService } from '@/services/course.service'
import { Button } from '@/ui/Buttons/Button'
import { CardsList } from '@/ui/Containers/CardsList'
import { Section } from '@/ui/Containers/Section'
import { ActionLink } from '@/ui/Links/ActionLink'
import { FullScreenLoader } from '@/ui/Loader'
import { StyledText } from '@/ui/Typography/Text'
import { Title } from '@/ui/Typography/Title'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import UserStore from 'src/stores/UserStore'
import styled from 'styled-components'

export const Course = observer(() => {
	const { courseId } = useParams()
	const { course, fetchCourseById, isLoading } = UserStore
	const user = useUser()

	useEffect(() => {
		if (courseId) {
			fetchCourseById(courseId)
		}
	}, [courseId])

	return (
		<Section $padding='1.6rem'>
			{isLoading ? (
				<FullScreenLoader />
			) : (
				course && (
					<>
						<Title text={`Курс "${course.title}"`} />
						<Section $mWidth={544} $margin='3.2rem'>
							<Title $fs='fsLg' text='Тесты по данному курсу' />
							<CardsList $margin='3.2rem'>
								<StatHeading index='№' title='Название теста' />
								{course.tests.map(({ _id, title }, i) => (
									<StatCard
										key={_id}
										index={`${i + 1}.`}
										title={
											<ActionLink
												as='span'
												$fs='fsMd'
												$padding='0'
												to={`/tests/${_id}`}
												$variant='default'
											>
												{title}
											</ActionLink>
										}
									/>
								))}
							</CardsList>
							{!course.userCompleted.some(({ _id }) => _id === user._id) && (
								<Section $margin='1.2rem'>
									<Button
										onClick={() =>
											courseService.complete({ _id: courseId ?? '' })
										}
										$variant='filled'
									>
										Я прошел курс
									</Button>
								</Section>
							)}
							<CourseInfo>
								<StyledText $size='fsSm'>{course.text}</StyledText>
							</CourseInfo>
						</Section>
					</>
				)
			)}
		</Section>
	)
})

const CourseInfo = styled('div')`
	background-color: ${({ theme }) => theme.colors.white};
	margin-top: 4.8rem;
	font-weight: 400;
	padding: 2.4rem 3.2rem;
	white-space: pre-line;
`
