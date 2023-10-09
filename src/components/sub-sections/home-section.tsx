import Image from 'next/image';

const HeaderSection = () => {
	return (
		<section className='flex flex-wrap justify-between w-full items-start sm:h-screen py-5 px-8 sm:px-10 md:px-32'>
			<div className='w-full sm:w-[45%] flex flex-col space-y-5 text-center sm:text-left sm:pt-20'>
				<h1 className='text-3xl sm:text-5xl sm:leading-[60px] mt-10 sm:mt-0'>
					Book your journey & grow your travel agency business smarter
				</h1>
				<p className='text-sm sm:text-lg'>
					Make your travel bookings easily from your phone as a
					passenger and manage your travel tickets and routes easily
					as a travel agency.
				</p>
			</div>
			<div className='w-full sm:w-[45%] h-[600px] sm:h-[80%] relative bg-red-40 pb-10 mt-8 sm:mt-0'>
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

export default HeaderSection;
