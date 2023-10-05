'use client';
import {NavLinks} from '@/data';
import Image from 'next/image';
import Link from 'next/link';
import {Fragment, useState} from 'react';
import {Button} from '../ui/button';
import {Menu} from 'lucide-react';

const NavBar = () => {
	const [showMenu, setSetshowMenu] = useState<boolean>(false);

	const toggleMenu = () => {
		setSetshowMenu(!showMenu);
	};

	return (
		<div className='relative'>
			<nav className='w-full hidden md:flex items-center justify-between py-2 px-8'>
				<Link href='/'>
					<Image
						alt='buslink-logo'
						src='/logo__2.jpg'
						width={80}
						height={80}
					/>
				</Link>

				<div className='flex items-center space-x-10'>
					{NavLinks.map((link) => (
						<Link
							key={link.id}
							href={link.href}
							className='text-sm text-slate-600 hover:text-slate-800 hover:font-semibold'
						>
							{link.title}
						</Link>
					))}
				</div>
			</nav>

			<div className={`w-full py-2 px-8  md:hidden`}>
				<Button
					type='button'
					variant={'outline'}
					className={`font-bold ${
						showMenu ? 'hidden' : 'block'
					}`}
					onClick={toggleMenu}
				>
					<Menu />
				</Button>
			</div>

			<nav
				style={{
					boxShadow: 'rgba(100, 100, 111, 0.8) 0px 7px 29px 0px;',
				}}
				className={`absolute left-0 top-0 z-10 ${
					showMenu ? 'flex' : 'hidden'
				} flex-col space-y-5 bg-white w-[350px] h-screen md:hidden px-10 shadow-l border-r border-r-slate-300`}
			>
				<div className={`flex items-center justify-between`}>
					<Link href='/'>
						<Image
							alt='buslink-logo'
							src='/logo__2.jpg'
							width={80}
							height={80}
						/>
					</Link>

					<Button
						type='button'
						variant={'outline'}
						onClick={toggleMenu}
						className='border-0 font-bold'
					>
						x
					</Button>
				</div>

				<div className='flex flex-col space-y-10'>
					{NavLinks.map((link) => (
						<Link
							key={link.id}
							href={link.href}
							className='text-sm text-slate-600 hover:text-slate-800 hover:font-semibold'
						>
							{link.title}
						</Link>
					))}
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
