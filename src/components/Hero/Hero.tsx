import styles from './Hero.module.scss'

const Hero = () => {
	return (
		<div className={styles.Hero}>
			<div className={`${styles.container} container`}>
				<span className={styles.upTitle}>Only $15.00</span>
				<h1 className={styles.title}>AUTHENTIC ITALIAN PIZZA</h1>
				<div className={styles.wrapper}>
					<div className={styles.circle}>
						<span className={styles.percent}>20%</span>
						<span className={styles.discount}>DISCOUNT</span>
					</div>
					<p className={styles.text}>
						On your first order, if you order online through our App!
					</p>
				</div>
				<button className={styles.btn}>ORDER ONLINE</button>
			</div>
		</div>
	)
}

export default Hero
