import { StatCard } from '@/components/StatCard'
import { StatHeading } from '@/components/StatHeading'
import { AdminPageWrapper } from '@/components/admin/AdminPageWrapper'
import { dateFormat } from '@/lib/utils/dateFormat'
import { FullScreenLoader } from '@/ui/Loader'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AdminStore from 'src/stores/AdminStore'
import styled from 'styled-components'

export const TestStat = observer(() => {
	const { fetchTestStat, testStat, isLoading } = AdminStore
	const { testId } = useParams()

	useEffect(() => {
		if (testId && !testStat) fetchTestStat(testId)
	}, [testId])

	return (
		<AdminPageWrapper
			outerWidth={1140}
			innerWidth={1140}
			link='tests'
			title={testStat ? `Статистика курса "${testStat.title}"` : 'Загрузка'}
		>
			<StatsWrapper>
				<StatHeading
					index={`№`}
					name='Пользователь'
					res='Результат'
					date='Дата'
				/>
				{isLoading && <FullScreenLoader />}
				{testStat &&
					testStat.results.map(({ user, result, date }, i) => (
						<StatCard
							index={i + 1 + '.'}
							name={user.email}
							res={result}
							date={dateFormat(date)}
						/>
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
