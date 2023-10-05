import NavBar from '@/components/navigation/nav-bar';
import './globals.css';
import type {Metadata} from 'next';
import {Poppins} from 'next/font/google';
import Footer from '@/components/navigation/footer';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['500', '600', '700', '800'],
});

export const metadata: Metadata = {
	title: 'Buslink',
	description: 'Travel booking made easy.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang='en'>
			<body className={poppins.className}>
				<NavBar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
