import {FeatureItems} from '@/data';
import Header from '../text/header';
import Image from 'next/image';
import Link from 'next/link';
import {ArrowRightSquare} from 'lucide-react';

const FeaturesSection = () => {
	return (
		<section className='flex flex-col space-y-14 justify-between w-full items-center py-20 px-8 md:px-32 bg-slate-100'>
			<div className='space-y-3'>
				<Header
					classNames='text-2xl text-center'
					text='Ultimate features you must appreciate'
				/>
				<p className='text-sm text-center'>
					Focus only on the meaning, we take care of the design. As
					soon as the meeting end you can export in one click into
					your preferred.
				</p>
			</div>

			<div className='grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-20'>
				{FeatureItems.map((feature) => (
					<div
						key={feature.id}
						className='flex flex-col items-center space-y-3'
					>
						<Image
							width={50}
							height={50}
							src={feature.image}
							alt={feature.title}
						/>

						<Header
							classNames='text-base font-semibold'
							text={feature.title}
						/>

						<p className='text-center text-xs'>
							{feature.description}
						</p>

						<Link
							href='#'
							className='text-sky-600 text-xs flex items-center space-x-4'
						>
							<p>Learn More</p> <ArrowRightSquare className='h-4 w-4' />
						</Link>
					</div>
				))}
			</div>
		</section>
	);
};

export default FeaturesSection;
