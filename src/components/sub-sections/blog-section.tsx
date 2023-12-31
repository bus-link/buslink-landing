import {BlogItems} from '@/data';
import Header from '../text/header';
import Image from 'next/image';
import {MessageCircle} from 'lucide-react';

const BlogSection = () => {
	return (
		<section className='flex flex-col space-y-14 justify-between w-full items-center py-20 px-8 sm:px-10 md:px-32'>
			<div className='space-y-3'>
				<Header
					classNames='text-2xl text-center'
					text='Popular blog post we update everyday'
				/>
				<p className='text-sm text-center'>
					Focus only on the meaning, we take care of the design. As
					soon as the meeting end you can export in one click.
				</p>
			</div>

			<div className='flex flex-wrap items-start justify-between w-full'>
				{BlogItems.map((blog) => (
					<div
						key={blog.id}
						className='flex flex-col justify-between items-start w-full sm:w-[300px] cursor-pointer mb-10 sm:mb-0'
					>
						<div className='w-full h-[200px] rounded-lg '>
							<Image
								// fill
								width={800}
								height={600}
								src={blog.image}
								alt={blog.description}
								className='object-cover rounded-lg h-full w-full'
							/>
						</div>

						<div className='space-y-3 pt-10'>
							<p className='text-sm'>{blog.description}</p>

							<div className='flex items-center space-x-3'>
								<MessageCircle className='h-4 w-4 text-slate-400' />{' '}
								<p className='text-xs text-slate-400'>
									10 Comments
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default BlogSection;
