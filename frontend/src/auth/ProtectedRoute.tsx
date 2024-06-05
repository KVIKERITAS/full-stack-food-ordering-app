import { Spinner } from '@/components/Spinner'
import { useAuth0 } from '@auth0/auth0-react'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
	const { isAuthenticated, isLoading } = useAuth0()

	if (isLoading)
		return (
			<div className='w-full h-screen flex items-center justify-center'>
				<Spinner className='h-8 w-8' />
			</div>
		)

	if (isAuthenticated) return <Outlet />

	return <Navigate to='/' replace />
}

export default ProtectedRoute
