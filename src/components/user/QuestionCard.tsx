import { Button } from '@/ui/Buttons/Button'
import { CheckBox } from '@/ui/Inputs/CheckBox'
import { StyledText } from '@/ui/Typography/Text'
import { ChangeEvent, FC, useState } from 'react'
import styled from 'styled-components'

interface QuestionCardProps {
	currentIndex: number
	questionsLength: number
	question: string
	answers: string[]
	correctAnswer: string
	onClickNext: (variant: string, correctAnswer: string) => void
}

export const QuestionCard: FC<QuestionCardProps> = ({
	question,
	answers,
	correctAnswer,
	currentIndex,
	questionsLength,
	onClickNext,
}) => {
	const [chosenAnswer, setChosenAnswer] = useState('')

	const handleChooseAnswer = (e: ChangeEvent<HTMLInputElement>) => {
		setChosenAnswer(e.target.value)
	}

	return (
		<QuestionWrapper>
			<QuestionHeading>
				<StyledText $size='fsMd'>{question}</StyledText>
				<StyledText $size='fsMd'>{`Вопрос: ${currentIndex}/${questionsLength}`}</StyledText>
			</QuestionHeading>
			<AnswersList>
				{answers.map((answer, i) => (
					<li key={answer + i}>
						<CheckBox
							id={answer + i}
							label={answer}
							checked={answer === chosenAnswer}
							onChange={handleChooseAnswer}
							value={answer}
							type='radio'
						/>
					</li>
				))}
			</AnswersList>
			<NextButtonWrapper>
				<Button
					onClick={() => onClickNext(chosenAnswer, correctAnswer)}
					$variant='filled'
				>
					{currentIndex === questionsLength ? 'Завершить' : 'Следующий вопрос'}
				</Button>
			</NextButtonWrapper>
		</QuestionWrapper>
	)
}

const QuestionWrapper = styled('div')`
	margin-top: 3.2rem;
	width: 100%;
	padding: 2.4rem 3.2rem;
	border-radius: ${({ theme }) => theme.borderRadius};
	background-color: ${({ theme }) => theme.colors.white};
`

const QuestionHeading = styled('div')`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: flex-start;
	${({ theme }) => theme.breakPoints.sm} {
		gap: 2rem;
	}
`

const AnswersList = styled('ol')`
	margin-top: 3.2rem;
	display: grid;
	grid-template-columns: max-content;
	gap: 1.6rem;
	font-size: 2rem;
	padding-left: 3.2rem;
	${({ theme }) => theme.breakPoints.sm} {
		grid-template-columns: 1fr;
		padding-left: 2rem;
	}
`

const NextButtonWrapper = styled('div')`
	margin-top: 1.2rem;
	width: 100%;
	display: flex;
	justify-content: flex-end;
	width: 100%;

	${({ theme }) => theme.breakPoints.sm} {
		justify-content: stretch;
		> button {
			width: 100%;
		}
	}
`
