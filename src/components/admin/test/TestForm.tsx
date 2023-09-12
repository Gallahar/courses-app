import { Question } from '@/types/test.interface'
import { Button } from '@/ui/Buttons/Button'
import { Input } from '@/ui/Inputs/Input'
import { FC } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'
import AdminStore from 'src/stores/AdminStore'
import { styled } from 'styled-components'
import { Answer } from './Answer'
import { AddIcon } from '@/assets/icons/AddIcon'
import { DeleteButton } from '@/ui/Buttons/DeleteButton'
import { DeleteIcon } from '@/assets/icons/DeleteIcon'
import { FormControls } from './FormControls'
import { createPortal } from 'react-dom'

interface TestFormProps {
	_id: string
	title: string
	questions: Question[]
}

interface FormFields {
	title: string
	questions: {
		question: string
		answers: string[]
		correctAnswer: string
	}[]
}

export const TestForm: FC<TestFormProps> = ({ _id, questions, title }) => {
	const { updateTest } = AdminStore

	const {
		register,
		formState: { errors },
		control,
		handleSubmit,
		getValues,
	} = useForm<FormFields>({
		defaultValues: {
			title,
			questions,
		},
	})

	const { fields, update, append, remove } = useFieldArray({
		name: 'questions',
		control,
		rules: {
			required: 'Добавьте хотя бы один вопрос',
		},
	})

	const onSubmit = handleSubmit((data) => {
		console.log(data)
	})

	return (
		<StyledForm id='TestForm' onSubmit={onSubmit}>
			<Input
				error={errors.title?.message}
				{...register('title', { required: 'название обязательно' })}
			/>
			{fields.map((field, index) => (
				<QuestionWrapper key={field.id}>
					<Input
						label='Вопрос'
						{...register(`questions.${index}.question`, {
							required: 'вопрос обязателен',
						})}
					/>
					<Input
						error={
							errors.questions
								? errors.questions[index]?.correctAnswer?.message
								: ''
						}
						label='Правильный ответ'
						{...register(`questions.${index}.correctAnswer`, {
							required: 'Правильный ответ обязателен',
							validate: (value, formValues) =>
								formValues.questions[index].answers.includes(value) ||
								'Должен совпадать с одним из вариантов',
						})}
					/>
					{field.answers.map((answer, i) => (
						<Answer
							key={answer + i}
							label={`Вариант ответа ${i + 1}`}
							onClickRemove={() =>
								update(index, {
									...getValues(`questions.${index}`),
									answers: field.answers.filter((_, id) => id !== i),
								})
							}
							{...register(`questions.${index}.answers.${i}`, {
								required: 'вариант обязателен',
							})}
						/>
					))}
					<QuestionControls>
						<Button
							icon={<AddIcon fill='#353535' />}
							type='button'
							onClick={() =>
								update(index, {
									...getValues(`questions.${index}`),
									answers: [...field.answers, ''],
								})
							}
							$variant='default'
						>
							Добавить ответ
						</Button>
						<DeleteButton type='button' onClick={() => remove(index)}>
							<DeleteIcon />
						</DeleteButton>
					</QuestionControls>
				</QuestionWrapper>
			))}
			{fields.length > 2 ? (
				createPortal(
					<FormControls
						questionsLength={fields.length}
						onClick={() =>
							append({ answers: [], correctAnswer: '', question: '' })
						}
					/>,
					document.getElementById('header') as HTMLElement
				)
			) : (
				<FormControls
					questionsLength={fields.length}
					onClick={() =>
						append({ answers: [], correctAnswer: '', question: '' })
					}
				/>
			)}
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
