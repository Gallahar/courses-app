import { ArrowLeftIcon } from '@/assets/icons/ArrowLeftIcon'
import { Button } from '@/ui/Buttons/Button'
import { Section } from '@/ui/Containers/Section'
import { Title } from '@/ui/Typography/Title'
import { FC, PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

interface PageWrapperProps {
	title: string
	link: string
	innerWidth?: number
	outerWidth?: number
}

export const AdminPageWrapper: FC<PropsWithChildren<PageWrapperProps>> = ({
	title,
	link,
	children,
	innerWidth,
	outerWidth,
}) => {
	return (
		<Section $padding='1.6rem' $mWidth={outerWidth ?? 928}>
			<Title text={title} />
			<Section $margin='32px' $mWidth={innerWidth ?? 544}>
				<Link to={`/manage/${link}`}>
					<Button $variant='default' icon={<ArrowLeftIcon />}>
						Назад
					</Button>
				</Link>
				{children}
			</Section>
		</Section>
	)
}
