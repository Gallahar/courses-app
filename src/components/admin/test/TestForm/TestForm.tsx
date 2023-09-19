import { Button } from '@/ui/Buttons/Button'
import { Input } from '@/ui/Inputs/Input'
import { FC } from 'react'
import { styled } from 'styled-components'
import { Answer } from '../Answer'
import { AddIcon } from '@/assets/icons/AddIcon'
import { DeleteButton } from '@/ui/Buttons/DeleteButton'
import { DeleteIcon } from '@/assets/icons/DeleteIcon'
import { FormControls } from '../FormControls'
import { createPortal } from 'react-dom'
import { TestFormProps, useTestForm } from './useTestForm'
import { ValidationErrors } from '@/components/ValidationError'
import { ErrorMessage } from '@hookform/error-message'
import { adminTestErrors } from '@/config/constants'

export const TestForm: FC<TestFormProps> = ({ _id, questions, title }) => {
	const {
		addQuestion,
		addAnswer,
		errors,
		lastQuestionRef,
		onSubmit,
		fields,
		removeQuestion,
		isLoading,
		inputFields,
		isFixed,
	} = useTestForm({ _id, questions, title })

	const { answerVariantField, questionField, rightAnswerField, titleField } =
		inputFields

	return (
		<StyledForm id='TestForm' onSubmit={onSubmit}>
			<Input {...titleField} />
			{fields.map((field, index) => {
				return (
					<QuestionWrapper key={field.id}>
						<Input {...questionField(index)} />
						<Input {...rightAnswerField(index)}>
							<ErrorMessage
								errors={errors}
								name={`questions.${index}.correctAnswer`}
								render={({ messages }) => {
									return (
										<ValidationErrors
											errorObject={messages}
											errors={adminTestErrors}
										/>
									)
								}}
							/>
						</Input>
						{field.answers.map((answer, i) => (
							<Answer {...answerVariantField(index, i, answer, field)} />
						))}
						<QuestionControls>
							<Button
								icon={<AddIcon fill='#353535' />}
								type='button'
								onClick={() => addAnswer(field, index)}
								$variant='default'
							>
								Добавить ответ
							</Button>
							<DeleteButton type='button' onClick={() => removeQuestion(index)}>
								<DeleteIcon />
							</DeleteButton>
						</QuestionControls>
					</QuestionWrapper>
				)
			})}
			{isFixed ? (
				createPortal(
					<FormControls
						isLoading={isLoading}
						isFixed={isFixed}
						onClick={addQuestion}
					/>,
					document.getElementById('header') as HTMLElement
				)
			) : (
				<FormControls
					isLoading={isLoading}
					isFixed={isFixed}
					onClick={addQuestion}
				/>
			)}
			<div ref={lastQuestionRef} />
		</StyledForm>
	)
}

const StyledForm = styled('form')`
	width: 100%;
	margin-top: 3.2rem;
	display: inline-flex;
	flex-direction: column;
	gap: 3.2rem;
	> button {
		align-self: flex-start;
	}
	padding-bottom: 9rem;
`

const QuestionWrapper = styled('section')`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 2.4rem;
	> button {
		align-self: flex-start;
	}
`

const QuestionControls = styled('div')`
	display: inline-flex;
	gap: 0.8rem;
`
