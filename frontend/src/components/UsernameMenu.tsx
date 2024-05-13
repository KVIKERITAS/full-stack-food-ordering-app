import { useAuth0 } from '@auth0/auth0-react'
import { CircleUserRound } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Separator } from './ui/separator'

export const UsernameMenu = () => {
	const { user, logout } = useAuth0()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className='flex items-center px-3 hover:text-red-500 gap-2'>
				<CircleUserRound className='text-red-500' />
				{user?.email}
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem>
					<Link to='/manage-restaurant' className='hover:text-red-500'>
						Manage Restaurant
					</Link>
				</DropdownMenuItem>
				<DropdownMenuItem>
					<Link to='/user-profile' className='hover:text-red-500'>
						User Profile
					</Link>
				</DropdownMenuItem>
				<Separator />
				<DropdownMenuItem>
					<Button
						onClick={() => logout()}
						className='flex flex-1'
						variant='default'
					>
						Log Out
					</Button>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
