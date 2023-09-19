import { Question } from '@/types/test.interface'
import { useRef, useEffect, useCallback } from 'react'
import { useForm, useFieldArray, FieldArrayWithId } from 'react-hook-form'
import AdminStore from 'src/stores/AdminStore'

export interface TestFormProps {
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

export const useTestForm = ({ _id, title, questions }: TestFormProps) => {
	const { updateTest, isLoading } = AdminStore
	const prevHeight = useRef(300)
	const lastQuestionRef = useRef<HTMLDivElement>(null)
	const {
		register,
		formState: { errors },
		control,
		handleSubmit,
		getValues,
	} = useForm<FormFields>({
		criteriaMode: 'all',
		defaultValues: {
			title,
			questions,
		},
		mode: 'all',
		reValidateMode: 'onBlur',
	})

	const { fields, update, append, remove } = useFieldArray({
		name: 'questions',
		control,
		rules: {
			required: 'Добавьте хотя бы один вопрос',
		},
	})

	useEffect(() => {
		if (!lastQuestionRef.current) return
		if (lastQuestionRef.current.parentElement === null) return
		if (
			lastQuestionRef.current.parentElement.clientHeight > prevHeight.current
		) {
			lastQuestionRef.current.scrollIntoView()
		}
		prevHeight.current = lastQuestionRef.current.parentElement.clientHeight
	}, [fields.length, prevHeight.current])

	const addQuestion = () =>
		append({ answers: [], correctAnswer: '', question: '' })

	const removeQuestion = (questionIdx: number) => remove(questionIdx)

	const addAnswer = (
		field: FieldArrayWithId<FormFields>,
		questionIdx: number
	) =>
		update(questionIdx, {
			...getValues(`questions.${questionIdx}`),
			answers: [...field.answers, ''],
		})

	const removeAnswer = (
		field: FieldArrayWithId<FormFields>,
		questionIdx: number,
		answerIdx: number
	) => {
		update(questionIdx, {
			...getValues(`questions.${questionIdx}`),
			answers: field.answers.filter((_, id) => id !== answerIdx),
		})
	}

	const onSubmit = handleSubmit((dto) => {
		updateTest({ _id, dto })
	})

	const titleField = {
		label: 'Название теста',
		error: errors.title?.message,
		...register('title', { required: 'название обязательно' }),
	}
	const questionField = useCallback(
		(index: number) => {
			return {
				error: errors.questions?.[index]?.question?.message,
				label: `Вопрос ${index + 1}`,
				...register(`questions.${index}.question`, {
					required: 'вопрос обязателен',
				}),
			}
		},
		[errors.questions]
	)

	const rightAnswerField = useCallback((index: number) => {
		return {
			label: 'Правильный ответ',
			...register(`questions.${index}.correctAnswer`, {
				required: 'Правильный ответ обязателен',
				validate: {
					concurrence: (value, formValues) =>
						(formValues.questions[index].answers.includes(value) &&
							value !== '') ||
						'Один из ответов правильный',
					count: (_, formValues) =>
						formValues.questions[index].answers.length >= 3 ||
						'Минимум 3 варианта ответа',
				},
			}),
		}
	}, [])

	const answerVariantField = useCallback(
		(
			questionIdx: number,
			answerIdx: number,
			answer: string,
			field: FieldArrayWithId<FormFields>
		) => {
			return {
				error: errors.questions?.[questionIdx]?.answers?.[answerIdx]?.message,
				key: answer + answerIdx,
				label: `Вариант ответа ${answerIdx + 1}`,
				onClickRemove: () => removeAnswer(field, questionIdx, answerIdx),
				...register(`questions.${questionIdx}.answers.${answerIdx}`, {
					required: 'вариант обязателен',
				}),
			}
		},
		[errors.questions]
	)

	const isFixed =
		fields.length > 2 || fields.some((field) => field.answers.length >= 3)

	const inputFields = {
		titleField,
		questionField,
		rightAnswerField,
		answerVariantField,
	}

	return {
		onSubmit,
		lastQuestionRef,
		fields,
		addQuestion,
		addAnswer,
		removeQuestion,
		errors,
		isLoading,
		inputFields,
		isFixed,
	}
}
