import {ArrowRight} from 'lucide-react';
import Image from 'next/image';

const FeaturesIntroSection = () => {
	return (
		<section className='flex flex-wrap justify-between w-full items-start py-5 sm:py-20 px-8 sm:px-10 md:px-32'>
			<div className='w-full sm:w-[45%] sm:h-[80%] relative bg-red-40 mt-8 sm:mt-0'>
				<Image
					alt='features_banner'
					src={'/features_banner.svg'}
					// fill
					width={500}
					height={800}
					className='object-cover'
				/>
			</div>

			<div className='w-full sm:w-[45%] flex flex-col space-y-5 text-left '>
				<h1 className='text-3xl sm:text-5xl sm:leading-[60px]'>
					Meet our exciting features that will make you wow 🤯
				</h1>
				<p className='text-sm'>
					Build an incredible workplace and grow your business with
					Gusto's all-in-one platform with amazing contents.
				</p>

				<div className='p-5 rounded-lg shadow-lg flex flex-col space-y-5'>
					<h1 className='text-lg font-semibold'>
						Organize your project content
					</h1>
					<p className='text-sm'>
						Get your blood tests delivered at let collect sample
						from the victory of the managments that supplies best
						design system guidelines ever.
					</p>
				</div>
				<div className='p-5 rounded-lg shadow-lg flex items-center justify-between bg-gray-100'>
					<p className='text-sm'>Collaborate your documents easily</p>
					<ArrowRight />
				</div>
				<div className='p-5 rounded-lg shadow-lg flex items-center justify-between bg-gray-100'>
					<p className='text-sm'>Build your team's knowledge base</p>
					<ArrowRight />
				</div>
			</div>
		</section>
	);
};

export default FeaturesIntroSection;
