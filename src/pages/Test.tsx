import { QuestionCard } from '@/components/user/QuestionCard'
import { Button } from '@/ui/Buttons/Button'
import { Section } from '@/ui/Containers/Section'
import { FullScreenLoader } from '@/ui/Loader'
import { StyledText } from '@/ui/Typography/Text'
import { Title } from '@/ui/Typography/Title'
import { observer } from 'mobx-react-lite'
import { useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import UserStore from 'src/stores/UserStore'
import styled from 'styled-components'

export const Test = observer(() => {
	const { testId } = useParams()
	const { fetchTestById, test, isLoading, completeTest, isCompleteProceed } =
		UserStore
	const [quizStart, setQuizStart] = useState(false)
	const [questionIndex, setQuestionIndex] = useState(0)
	const correctAnswerCount = useRef(0)

	const handleNext = (variant: string, correctAnswer: string) => {
		if (variant === correctAnswer) {
			correctAnswerCount.current += 1
		}

		setQuestionIndex((index) => index + 1)
		if (!test) return
		if (questionIndex === test.questions.length - 1) {
			completeTest({
				_id: test._id,
				result: `${correctAnswerCount.current}/${test.questions.length}`,
			})
		}
	}

	useEffect(() => {
		if (testId) {
			fetchTestById(testId)
		}
	}, [testId])

	return (
		<Section $padding='1.6rem'>
			{isLoading ? (
				<FullScreenLoader />
			) : (
				test && (
					<>
						<Title text={`Тест "${test.title}"`} />
						{!quizStart && (
							<ButtonWrapper>
								<Button onClick={() => setQuizStart(true)} $variant='filled'>
									Начать
								</Button>
							</ButtonWrapper>
						)}
						{quizStart && questionIndex < test.questions.length ? (
							<QuestionCard
								onClickNext={handleNext}
								answers={test.questions[questionIndex].answers}
								correctAnswer={test.questions[questionIndex].correctAnswer}
								currentIndex={questionIndex + 1}
								question={test.questions[questionIndex].question}
								questionsLength={test.questions.length}
							/>
						) : (
							!isCompleteProceed &&
							questionIndex === test.questions.length && (
								<ResultWrapper>
									<StyledText $size='fsLg'>
										{`Ваш результат: ${correctAnswerCount.current}/${test.questions.length}`}
									</StyledText>
									<Link to={'/profile'}>
										<Button $variant='filled'>Все результаты</Button>
									</Link>
								</ResultWrapper>
							)
						)}
						{isCompleteProceed && (
							<FullScreenLoader style={{ marginTop: '3.2rem' }} />
						)}
					</>
				)
			)}
		</Section>
	)
})

const ButtonWrapper = styled('div')`
	margin-top: 3.2rem;
	display: flex;
	justify-content: center;
`

const ResultWrapper = styled('div')`
	margin-top: 3.2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 3.2rem;
`
