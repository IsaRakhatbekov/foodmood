import Categories from '@/components/Categories/Categories'
import Hero from '@/components/Hero/Hero'
import '../styles/reset.scss'
import '../styles/styles.scss'
import styles from './page.module.css'

export default function Home() {
	return (
		<div className={styles.page}>
			<main>
				<Hero />
				<Categories />
			</main>
		</div>
	)
}
