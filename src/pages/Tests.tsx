import { StatCard } from '@/components/StatCard'
import { StatHeading } from '@/components/StatHeading'
import { CardsList } from '@/ui/Containers/CardsList'
import { Section } from '@/ui/Containers/Section'
import { ActionLink } from '@/ui/Links/ActionLink'
import { FullScreenLoader } from '@/ui/Loader'
import { Title } from '@/ui/Typography/Title'
import { observer } from 'mobx-react-lite'
import UserStore from 'src/stores/UserStore'
import { styled } from 'styled-components'

export const Tests = observer(() => {
	const { tests, isLoading } = UserStore

	return (
		<Section $padding='1.6rem'>
			<Title text='Список тестов' />
			<CoursesCardsList>
				{isLoading && <FullScreenLoader />}

				{tests.length > 0 && (
					<>
						<StatHeading
							index='№'
							title='Название теста'
							secondCol='Вопросов'
							thirdCol='Пройден раз'
						/>
						{tests.map(({ _id, title, questions, results }, i) => (
							<StatCard
								key={_id}
								index={`${i + 1}.`}
								title={
									<ActionLink
										as='span'
										$padding='0'
										$fs='fsMd'
										to={_id}
										$variant='default'
									>
										{title}
									</ActionLink>
								}
								secondCol={`${questions.length}`}
								thirdCol={`${results.length}`}
							/>
						))}
					</>
				)}
			</CoursesCardsList>
		</Section>
	)
})

const CoursesCardsList = styled(CardsList)`
	margin-top: 3.2rem;
`
