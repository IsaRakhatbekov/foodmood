import Categories from '@/components/Categories/Categories'
import Delivery from '@/components/Delivery/Delivery'
import Discount from '@/components/Discount/Discount'
import Hero from '@/components/Hero/Hero'
import Outlets from '@/components/Outlets/Outlets'
import Partners from '@/components/Partners/Partners'
import Team from '@/components/Team/Team'
import '../styles/reset.scss'
import '../styles/styles.scss'

export default function Home() {
	return (
		<div>
			<main>
				<Hero />
				<Categories />
				<Outlets />
				<Delivery />
				<Team />
				<Discount />
				<Partners />
			</main>
		</div>
	)
}
