import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'

export const MobileNavLinks = () => {
	const { logout } = useAuth0()

	return (
		<>
			<Link
				to='/user-profile'
				className='flex bg-white items-center hover:text-red-500'
			>
				User Profile
			</Link>
			<Button onClick={() => logout()} className='flex items-center px-3'>
				Log Out
			</Button>
		</>
	)
}
