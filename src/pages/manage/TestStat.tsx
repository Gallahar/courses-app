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
		if (testId) fetchTestStat(testId)
	}, [testId])

	return (
		<AdminPageWrapper
			outerWidth={1140}
			innerWidth={1140}
			link='tests'
			title={testStat ? `Статистика теста "${testStat.title}"` : ''}
		>
			<StatsWrapper>
				<StatHeading
					index={`№`}
					title='Пользователь'
					secondCol='Результат'
					thirdCol='Дата'
				/>
				{isLoading && <FullScreenLoader />}
				{testStat &&
					testStat.results.map(({ user, result, date }, i) => (
						<StatCard
							key={date}
							index={i + 1 + '.'}
							title={user.email}
							secondCol={result}
							thirdCol={dateFormat(date)}
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
