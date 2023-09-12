import { StatCard } from '@/components/StatCard'
import { StatHeading } from '@/components/StatHeading'
import { AdminPageWrapper } from '@/components/admin/AdminPageWrapper'
import { FullScreenLoader } from '@/ui/Loader'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AdminStore from 'src/stores/AdminStore'
import styled from 'styled-components'

export const CourseStat = observer(() => {
	const { fetchCourseStat, courseStat, isLoading } = AdminStore
	const { courseId } = useParams()

	useEffect(() => {
		if (courseId && !courseStat) fetchCourseStat(courseId)
	}, [courseId])

	return (
		<AdminPageWrapper
			link='courses'
			title={courseStat ? `Статистика курса "${courseStat.title}"` : 'Загрузка'}
		>
			<StatsWrapper>
				<StatHeading index={`№`} name='Пользователь' />
				{isLoading && <FullScreenLoader />}
				{courseStat &&
					courseStat.userCompleted.map(({ email }, i) => (
						<StatCard key={email} index={i + 1 + '.'} name={email} />
					))}
			</StatsWrapper>
		</AdminPageWrapper>
	)
})

const StatsWrapper = styled('div')`
	margin-top: 3.2rem;
	display: flex;
	flex-direction: column;
	gap: 0.8rem;
`
