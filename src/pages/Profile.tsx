import { StatCard } from '@/components/StatCard'
import { StatHeading } from '@/components/StatHeading'
import { dateFormat } from '@/lib/utils/dateFormat'
import { CardsList } from '@/ui/Containers/CardsList'
import { Section } from '@/ui/Containers/Section'
import { FullScreenLoader } from '@/ui/Loader'
import { StyledText } from '@/ui/Typography/Text'
import { Title } from '@/ui/Typography/Title'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import UserStore from 'src/stores/UserStore'
import styled from 'styled-components'

export const Profile = observer(() => {
	const { isLoading, profile, fetchProfile } = UserStore

	useEffect(() => {
		fetchProfile()
	}, [])

	return (
		<Section $padding='1.6rem'>
			{isLoading ? (
				<FullScreenLoader />
			) : (
				profile && (
					<Wrapper>
						<UserCard>
							<StyledText $size='fsLg'>
								{`Пользователь - ${profile.email}`}
							</StyledText>
							<StyledText $color='linkDefault' $size='fsSm'>
								{profile.isAdmin ? 'администратор' : 'студент'}
							</StyledText>
						</UserCard>
						{profile.coursesCompleted.length > 0 ? (
							<StatsContainer>
								<Title text='Пройденные курсы' />
								<CardsList>
									<StatHeading index='№' title='Название курса' />
									{profile.coursesCompleted.map(({ _id, title }, i) => (
										<StatCard key={_id} index={`${i + 1}.`} title={title} />
									))}
								</CardsList>
							</StatsContainer>
						) : (
							<Title text='Нету пройденных курсов' />
						)}
						{profile.testsCompleted.length > 0 ? (
							<StatsContainer>
								<Title text='Пройденные тесты' />
								<CardsList>
									<StatHeading
										index='№'
										title='Название теста'
										secondCol='Результат'
										thirdCol='Дата'
									/>
									{profile.testsCompleted.map(({ test, result, date }, i) => (
										<StatCard
											key={date}
											index={`${i + 1}.`}
											title={test}
											secondCol={result}
											thirdCol={dateFormat(date)}
										/>
									))}
								</CardsList>
							</StatsContainer>
						) : (
							<Title text='Нету пройденных тестов' />
						)}
					</Wrapper>
				)
			)}
		</Section>
	)
})

const Wrapper = styled('div')`
	display: flex;
	flex-direction: column;
	gap: 4.8rem;
`

const UserCard = styled('div')`
	width: 100%;
	max-width: 600px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-inline: auto;
	border-radius: ${({ theme }) => theme.borderRadius};
	background-color: ${({ theme }) => theme.colors.white};
	padding: 1.6rem;
`

const StatsContainer = styled('div')`
	display: flex;
	flex-direction: column;
	gap: 3.2rem;
`
