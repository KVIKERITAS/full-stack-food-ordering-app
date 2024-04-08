import { Link } from 'react-router-dom'
import { MainNav } from './MainNav'
import { MobileNav } from './MobileNav'

const Header = () => {
	return (
		<div className='py-6'>
			<div className='container mx-auto flex justify-between items-center'>
				<Link to='/' className='text-3xl font-bold tracking-tight'>
					F<span className='text-red-500'>OO</span>DY
				</Link>
				<div className='md:hidden'>
					<MobileNav />
				</div>
				<div className='hidden md:block'>
					<MainNav />
				</div>
			</div>
		</div>
	)
}

export default Header
