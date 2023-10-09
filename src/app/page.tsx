import BlogSection from '@/components/sub-sections/blog-section';
import HeaderSection from '@/components/sub-sections/home-section';
import ProductUsers from '@/components/sub-sections/product-users';
import FeaturesSection from '@/components/sub-sections/features-section';
import CustomersSection from '@/components/sub-sections/customers-section';
import SubscribeSection from '@/components/sub-sections/subscribe-section';
import FeaturesIntroSection from '@/components/sub-sections/features-intro-section';

export default function Home() {
	return (
		<main className='flex flex-col w-full'>
			<HeaderSection />

			<ProductUsers />

			<FeaturesIntroSection />

			<FeaturesSection />

			<CustomersSection />

			<BlogSection />

			<SubscribeSection />
		</main>
	);
}
