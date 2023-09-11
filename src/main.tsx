import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router/router'
import { Theme } from './app/styles/theme'
import { GlobalStyles } from './app/styles/globalStyles'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Theme>
			<GlobalStyles />
			<RouterProvider router={router} />
		</Theme>
	</StrictMode>
)
