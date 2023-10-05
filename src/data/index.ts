interface NavLink {
    id: number;
    href: string;
    title: string;
}



export const NavLinks: NavLink[] = [
    {
        id: 1,
        href: '/',
        title: 'Home'
    },
    {
        id: 2,
        href: '#',
        title: 'Services'
    },
    {
        id: 3,
        href: '#',
        title: 'About'
    },
    {
        id: 4,
        href: '#',
        title: 'Contact Us'
    },
]

export const AboutUsLinks: NavLink[] = [
    {
        id: 1,
        href: '#',
        title: 'Support Center'
    },
    {
        id: 2,
        href: '#',
        title: 'Customer Support'
    },
    {
        id: 3,
        href: '#',
        title: 'About Us'
    },
    {
        id: 4,
        href: '#',
        title: 'Copyright'
    },
]

export const InformationLinks: NavLink[] = [
    {
        id: 1,
        href: '#',
        title: 'Return Policy'
    },
    {
        id: 2,
        href: '#',
        title: 'Privacy Policy'
    },
    {
        id: 3,
        href: '#',
        title: 'Terms & Conditions'
    },
]
