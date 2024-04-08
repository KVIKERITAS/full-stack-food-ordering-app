import { useAuth0 } from '@auth0/auth0-react'
import { UsernameMenu } from './UsernameMenu'
import { Button } from './ui/button'

export const MainNav = () => {
	const { loginWithRedirect, isAuthenticated } = useAuth0()

	return (
		<span className='flex space-x-2 items-center'>
			{isAuthenticated ? (
				<UsernameMenu />
			) : (
				<Button
					variant='outline'
					className='px-10 py-5'
					onClick={async () => await loginWithRedirect()}
				>
					Log In
				</Button>
			)}
		</span>
	)
}
