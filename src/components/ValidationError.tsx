import { FailureIcon } from '@/assets/icons/FailureIcon'
import { SuccessIcon } from '@/assets/icons/SuccessIcon'
import { FC } from 'react'
import { MultipleFieldErrors } from 'react-hook-form'
import styled from 'styled-components'

interface ValidationErrorsProps {
	title?: string
	errors: {
		title: string
		error: string
	}[]
	errorObject?: MultipleFieldErrors
}

export const ValidationErrors: FC<ValidationErrorsProps> = ({
	errors,
	title,
	errorObject,
}) => {
	return (
		<>
			{title && <ErrorText>{title}</ErrorText>}
			<ErrorsContainer $column={errors.length / 2}>
				{errors.map(({ title, error }) => (
					<ErrorWrapper key={title}>
						{errorObject?.[error] ? <FailureIcon /> : <SuccessIcon />}
						<ErrorText>{title}</ErrorText>
					</ErrorWrapper>
				))}
			</ErrorsContainer>
		</>
	)
}

const ErrorsContainer = styled('div')<{ $column: number }>`
	display: grid;
	gap: 0.4rem 3.2rem;
	grid-template-columns: repeat(${({ $column }) => $column}, max-content);
`

const ErrorWrapper = styled('div')`
	display: flex;
	align-items: center;
	gap: 0.8rem;
`

const ErrorText = styled('p')`
	line-height: 150%;
	font-weight: 400;
	font-size: 1.4rem;
	color: ${({ theme }) => theme.colors.linkDefault};
`
