import Categories from '@/components/Categories/Categories'
import Delivery from '@/components/Delivery/Delivery'
import Hero from '@/components/Hero/Hero'
import Outlets from '@/components/Outlets/Outlets'
import Team from '@/components/Team/Team'
import '../styles/reset.scss'
import '../styles/styles.scss'
import styles from './page.module.css'

export default function Home() {
	return (
		<div className={styles.page}>
			<main>
				<Hero />
				<Categories />
				<Outlets />
				<Delivery />
				<Team />
				{/* <Discount /> */}
				{/* <Partners /> */}
			</main>
		</div>
	)
}
