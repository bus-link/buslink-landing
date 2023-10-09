import {ArrowRight, ArrowRightSquare} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const CustomersSection = () => {
	return (
		<section className='flex flex-wrap justify-between w-full items-start py-5 md:py-20 px-8 md:px-32'>
			<div className='w-full md:w-[45%] md:h-[80%] relative bg-red-40 mt-8 md:mt-0'>
				<Image
					alt='customer_banner'
					src={'/customer_banner.svg'}
					// fill
					width={500}
					height={800}
					className='object-cover'
				/>
			</div>

			<div className='w-full md:w-[45%] flex flex-col space-y-5 text-left '>
				<h1 className='text-3xl md:text-4xl md:leading-[60px]'>
					We have thousands of worldwide happy customer 😊
				</h1>
				<p className='text-sm'>
					Coworking offers beautifully crafted workspaces where people
					can create, connect, and grow their businesses at prime
					locations in multiple cities.
				</p>
				<Link
					href='#'
					className='text-sky-600 text-xs flex items-center space-x-4'
				>
					<p>Learn More</p> <ArrowRightSquare className='h-4 w-4' />
				</Link>
			</div>
		</section>
	);
};

export default CustomersSection;
