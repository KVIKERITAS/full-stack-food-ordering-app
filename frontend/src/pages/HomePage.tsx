import download from '../assets/download.png'
import landing from '../assets/landing.png'

const HomePage = () => {
	return (
		<div className='flex flex-col gap-12'>
			<div className='bg-white rounded-lg shadow-md py-9 flex flex-col gap-5 text-center -mt-16'>
				<h1 className='text-5xl font-bold tracking-tight'>
					Fastest Food <span className='text-red-500'>Delivery Service</span> In
					Town
				</h1>
				<span className='text-xl'>Food is just a click away!</span>
			</div>
			<div className='grid md:grid-cols-2 gap-5'>
				<img src={landing} />
				<div className='flex flex-col items-center justify-center gap-4 text-center'>
					<span className='font-bold text-3xl tracking-tighter'>
						<span className='text-red-500'>Download</span> Our App TODAY!
					</span>
					<span>
						Download the FOODY App for even faster ordering and personalized
						recommendations
					</span>
					<img src={download} className='cursor-pointer' />
				</div>
			</div>
		</div>
	)
}

export default HomePage
