import hero from '../assets/hero.jpg'

export const Hero = () => {
	return (
		<div>
			<img src={hero} className='w-full max-h-[600px] object-cover' />
		</div>
	)
}
