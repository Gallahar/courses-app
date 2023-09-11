import { AdminCard } from '@/components/admin/AdminCard'
import { AdminItems } from '@/components/admin/AdminItems'
import { FullScreenLoader } from '@/ui/Loader'
import { observer } from 'mobx-react-lite'
import AdminStore from 'src/stores/AdminStore'

export const AdminTests = observer(() => {
	const { tests, addTest,error, isLoading, deleteTest } = AdminStore

	return (
		<AdminItems onClickAdd={addTest} title='Список тестов'>
			{!tests && !error ? (
				<FullScreenLoader />
			) : (
				tests.map(({ _id, title }) => (
					<AdminCard
						onClickDelete={deleteTest}
						_id={_id}
						title={title}
						key={_id}
						isLoading={isLoading}
					/>
				))
			)}
		</AdminItems>
	)
})
