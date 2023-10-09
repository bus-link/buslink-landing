import {cn} from '@/lib/utils';

interface HeaderProps {
	text: string;
	classNames?: string;
}

const Header: React.FC<HeaderProps> = ({text, classNames}) => {
	return <h1 className={cn('text-[40px]', classNames)}>{text}</h1>;
};

export default Header;
