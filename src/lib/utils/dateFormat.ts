export const dateFormat = (dateStr: string) => {
	const date = new Date(dateStr)

	return date.toLocaleDateString('ru-RU', {
		month: 'short',
		weekday: 'short',
		hour: '2-digit',
		minute: '2-digit',
	})
}

