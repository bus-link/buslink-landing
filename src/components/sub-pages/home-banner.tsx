import Image from 'next/image';

const HomeBanner = () => {
	return (
		<section className='flex flex-wrap justify-between w-full items-start md:h-screen py-5'>
			<div className='w-full md:w-[45%] flex flex-col space-y-5 text-center md:text-left md:pt-20'>
				<h1 className='text-3xl md:text-5xl leading-[60px]'>
					Book your journey & grow your business travel smarter
				</h1>
				<p className='text-sm md:text-lg'>
					Book your travel bookings easily from your phone as a
					passenger and manage your travel tickets and routes easily
					as a travel agency.
				</p>
			</div>
			<div className='w-full md:w-[55%] h-[600px] md:h-[80%] relative bg-red-40 pb-10 mt-8 md:mt-0'>
				<Image
					alt='logo'
					fill
					// width={400}
					// height={400}
					src={'/home__art.svg'}
					className='object-cover '
				/>
			</div>
		</section>
	);
};

export default HomeBanner;
