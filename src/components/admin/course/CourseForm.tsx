import { Test } from '@/types/test.interface'
import { Button } from '@/ui/Buttons/Button'
import { CheckBox } from '@/ui/Inputs/CheckBox'
import { Input } from '@/ui/Inputs/Input'
import { Loader } from '@/ui/Loader'
import { StyledText } from '@/ui/Typography/Text'
import { TextArea } from '@/ui/Inputs/TextArea'
import { observer } from 'mobx-react-lite'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import AdminStore from 'src/stores/AdminStore'
import styled from 'styled-components'

interface CourseFormProps {
	_id: string
	title: string
	text: string
	addedTests: string[]
	tests: Test[]
}

interface FormValues {
	title: string
	text: string
	tests: string[]
}

export const CourseForm: FC<CourseFormProps> = observer(
	({ _id, title, text, addedTests, tests }) => {
		const {
			register,
			formState: { errors },
			handleSubmit,
		} = useForm<FormValues>({
			mode: 'onTouched',
			reValidateMode: 'onSubmit',
			defaultValues: {
				title,
				text,
				tests: addedTests,
			},
		})

		const { updateCourse, isLoading } = AdminStore

		const submitHandler = handleSubmit(async (dto) => {
			await updateCourse({ _id, dto })
		})

		return (
			<StyledForm onSubmit={submitHandler}>
				<InputsWrapper>
					<Input
						{...register('title', {
							required: 'Название не может быть пустым',
						})}
						label='Название курса'
						error={errors.title?.message}
					/>
					<TextArea
						{...register('text', { required: 'Название не может быть пустым' })}
						label='Содержание курса'
						error={errors.text?.message}
					/>
				</InputsWrapper>
				<TestsWrapper>
					<StyledText $size='fsSm'>Добавить тесты к курсу</StyledText>
					{tests.map(({ _id, title }) => (
						<CheckBox
							key={_id}
							{...register('tests')}
							label={title}
							value={_id}
							id={_id}
						/>
					))}
				</TestsWrapper>
				<Button
					$order='row'
					icon={isLoading && <Loader />}
					type='submit'
					$variant='filled'
					disabled={isLoading}
				>
					{isLoading ? 'Загрузка' : 'Сохранить'}
				</Button>
			</StyledForm>
		)
	}
)

const InputsWrapper = styled('div')`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 2.3rem;
`

const StyledForm = styled('form')`
	margin-top: 3.2rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 3.2rem;
	> button {
		align-self: flex-start;

		${({ theme }) => theme.breakPoints.sm} {
			align-self: unset;
		}
	}
`

const TestsWrapper = styled('div')`
	display: flex;
	flex-direction: column;
	max-width: fit-content;
	gap: 0.8rem;
`
