import Image from 'next/image'
import styles from './Discount.module.scss'

import burger from '../../../public/Discount/burger.png'

const Discount = () => {
	return (
		<div className={styles.Discount}>
			<div className={`${styles.container} container`}>
				<div className={styles.wrapper}>
					<div className={styles.content}>
						<h3 className={styles.title}>Get 20% Discount</h3>
						<h4 className={styles.subTitle}>
							Get flat 20% off on your first order though The Foodmood App!
						</h4>
						<div className={styles.inner}>
							<a className={styles.link} href='#'></a>
							<a className={styles.link} href='#'></a>
						</div>
					</div>
					<div className={styles.imgWrapper}>
						<Image src={burger} alt='' width={530} height={530} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Discount
