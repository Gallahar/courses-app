import { AdminLayout } from '@/components/layouts/AdminLayout'
import { AuthLayout } from '@/components/layouts/AuthLayout'
import { MainLayout } from '@/components/layouts/MainLayout'
import { LoginPage } from '@/pages/Login'
import { MainPage } from '@/pages/Main'
import { RegisterPage } from '@/pages/Register'
import { AdminCourses } from '@/pages/manage/AdminCourses'
import { createBrowserRouter } from 'react-router-dom'
import { ProtectedAdminRoute } from './ProtectedAdminRoute'
import { AdminTests } from '@/pages/manage/AdminTests'
import { ProtectedUserRoute } from './ProtectedUserRoute'
import { EditCourse } from '@/pages/manage/EditCourse'
import { CourseStat } from '@/pages/manage/CourseStat'
import { TestStat } from '@/pages/manage/TestStat'
import { EditTest } from '@/pages/manage/EditTest'

export const router = createBrowserRouter([
	{
		element: <AuthLayout />,
		path: '/auth',
		children: [
			{ element: <LoginPage />, path: 'login' },
			{ element: <RegisterPage />, path: 'register' },
		],
	},
	{
		element: <ProtectedUserRoute />,
		children: [
			{
				element: <MainLayout />,
				path: '/',
				children: [{ element: <MainPage />, path: '/' }],
			},
		],
	},
	{
		element: <ProtectedAdminRoute />,
		children: [
			{
				element: <AdminLayout />,
				path: '/manage',
				children: [
					{
						element: <AdminCourses />,
						path: 'courses',
					},
					{ element: <EditCourse />, path: 'courses/edit/:courseId' },
					{ element: <CourseStat />, path: 'courses/:courseId' },
					{ element: <AdminTests />, path: 'tests' },
					{ element: <EditTest />, path: 'tests/edit/:testId' },
					{ element: <TestStat />, path: 'tests/:testId' },
				],
			},
		],
	},
])
