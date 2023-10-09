import {ProductUserItems} from '@/data';
import Header from '../text/header';
import Image from 'next/image';

const ProductUsers = () => {
	return (
		<section className='flex flex-col space-y-10 w-full items-center py-5 md:py-20 px-8 md:px-32'>
			<div className='space-y-3'>
				<Header
					classNames='text-2xl text-center'
					text='Successful business start with great feature'
				/>
				<p className='text-base'>
					Build an incredible workplace and grow your business with
					Gusto's all-in-one platform with amazing contents.
				</p>
			</div>

			<div className='flex flex-wrap items-center justify-between gap-x-10 gap-y-5'>
				{ProductUserItems.map((item) => (
					<div
						key={item.id}
						className='flex items-start space-x-5 w-[300px]'
					>
						<Image
							width={50}
							height={50}
							alt={item.title}
							src={item.image}
						/>

						<div className='flex flex-col space-y-3'>
							<Header
								classNames='text-base font-semibold'
								text={item.title}
							/>

							<p className='-sm text-xs'>{item.description}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default ProductUsers;
