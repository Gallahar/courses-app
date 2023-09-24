import { AdminLayout } from '@/components/layouts/AdminLayout'
import { AuthLayout } from '@/components/layouts/AuthLayout'
import { MainLayout } from '@/components/layouts/MainLayout'
import { LoginPage } from '@/pages/Login'
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
import { Courses } from '@/pages/Courses'
import { Tests } from '@/pages/Tests'
import { Profile } from '@/pages/Profile'
import { Course } from '@/pages/Course'
import { Test } from '@/pages/Test'

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
				children: [
					{ element: <Profile />, path: '/' },
					{ element: <Courses />, path: 'courses' },
					{ element: <Course />, path: 'courses/:courseId' },
					{ element: <Tests />, path: 'tests' },
					{ element: <Test />, path: 'tests/:testId' },
				],
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
