import Link from 'next/link';
import Image from 'next/image';
import {AboutUsLinks, InformationLinks, NavLinks} from '@/data';

const Footer = () => {
	return (
		<footer className='border-t-2 h-[200px] w-full px-8 flex flex-wrap items-start justify-between'>
			<div className="flex flex-col gap-y-5">
            <Link href='/'>
				<Image
					alt='buslink-logo'
					src='/logo__2.jpg'
					width={80}
					height={80}
				/>
			</Link>

            <p className='text-sm'>Copyright &copy; 2023 Buslink</p>
            </div>

			<div className='flex flex-wrap items-start md:space-x-10'>
				<div className='flex flex-col items-start space-y-5 pt-8 pb-10'>
					<h1>About Us</h1>

					{AboutUsLinks.map((link) => (
						<Link
							key={link.id}
							href={link.href}
							className='text-sm text-slate-600 hover:text-slate-800 hover:font-semibold'
						>
							{link.title}
						</Link>
					))}
				</div>

				<div className='flex flex-col items-start space-y-5 pt-8 pb-10'>
					<h1>Our Information</h1>

					{InformationLinks.map((link) => (
						<Link
							key={link.id}
							href={link.href}
							className='text-sm text-slate-600 hover:text-slate-800 hover:font-semibold'
						>
							{link.title}
						</Link>
					))}
				</div>
			</div>
		</footer>
	);
};

export default Footer;
