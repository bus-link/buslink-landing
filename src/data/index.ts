interface NavLink {
	id: number;
	href: string;
	title: string;
}

interface ProductUserItem {
	id: number;
	image: string;
	title: string;
	description: string;
}

export const NavLinks: NavLink[] = [
	{
		id: 1,
		href: '/',
		title: 'Home',
	},
	{
		id: 2,
		href: '#',
		title: 'Services',
	},
	{
		id: 3,
		href: '#',
		title: 'About',
	},
	{
		id: 4,
		href: '#',
		title: 'Contact Us',
	},
];

export const AboutUsLinks: NavLink[] = [
	{
		id: 1,
		href: '#',
		title: 'Support Center',
	},
	{
		id: 2,
		href: '#',
		title: 'Customer Support',
	},
	{
		id: 3,
		href: '#',
		title: 'About Us',
	},
	{
		id: 4,
		href: '#',
		title: 'Copyright',
	},
];

export const InformationLinks: NavLink[] = [
	{
		id: 1,
		href: '#',
		title: 'Return Policy',
	},
	{
		id: 2,
		href: '#',
		title: 'Privacy Policy',
	},
	{
		id: 3,
		href: '#',
		title: 'Terms & Conditions',
	},
];

export const ProductUserItems: ProductUserItem[] = [
	{
		id: 1,
		image: '/art__1.svg',
		title: 'For Individuals',
		description:
			'Get your info tests delivered at home collect a sample from the your pogress tests.',
	},
	{
		id: 2,
		image: '/art__2.svg',
		title: 'For Teams',
		description:
			'Get your info tests delivered at home collect a sample from the your pogress tests.',
	},
	{
		id: 3,
		image: '/art__3.svg',
		title: 'For Organizations',
		description:
			'Get your info tests delivered at home collect a sample from the your pogress tests.',
	},
];

export const FeatureItems: ProductUserItem[] = [
	{
		id: 1,
		image: '/art__4.svg',
		title: 'Ultimate Email Subscription',
		description:
			'Get your info tests delivered at home collect a sample from the your task.',
	},
	{
		id: 2,
		image: '/art__5.svg',
		title: 'Bolt Performance',
		description:
			'Get your info tests delivered at home collect a sample from the your task.',
	},
	{
		id: 3,
		image: '/art__6.svg',
		title: 'Secure Transaction',
		description:
			'Get your info tests delivered at home collect a sample from the your task.',
	},
	{
		id: 4,
		image: '/art__7.svg',
		title: 'Multiple Options',
		description:
			'Get your info tests delivered at home collect a sample from the your task.',
	},
	{
		id: 5,
		image: '/art__8.svg',
		title: '5 Star Rating service',
		description:
			'Get your info tests delivered at home collect a sample from the your task.',
	},
	{
		id: 6,
		image: '/art__9.svg',
		title: 'Integrated with Shopify',
		description:
			'Get your info tests delivered at home collect a sample from the your task.',
	},
];

export const BlogItems: ProductUserItem[] = [
	{
		id: 1,
		title: '',
		image: '/blog_1.jpg',
		description:
			'How to work with prototype design with adobe xd featuring tools',
	},
	{
		id: 2,
		title: '',
		image: '/blog_2.jpg',
		description:
			'Create multiple artboard by using figma prototyping development',
	},
	{
		id: 3,
		title: '',
		image: '/blog_3.jpg',
		description:
			'Convert your web layout theming easily with sketch zeplin extension',
	},
];
