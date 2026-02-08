import Image from 'next/image'
import styles from './Outlets.module.scss'

import outlet1 from '../../../public/Outlets/1.png'
import outlet2 from '../../../public/Outlets/2.png'
import outlet3 from '../../../public/Outlets/3.png'

const Outlets = () => {
	return (
		<div className={styles.Outlets}>
			<div className={`${styles.container} container`}>
				<span className={styles.upTitle}>OUR OUTLETS</span>
				<h2 className={styles.title}>Find an Outlet Near You</h2>
				<ul className={styles.list}>
					<li className={styles.item}>
						<div className={styles.imgWrapper}>
							<Image src={outlet1} alt='#' width={370} height={440} />
						</div>
						<span className={styles.icon}>
							<svg
								width='21'
								height='33'
								viewBox='0 0 21 33'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M10.2135 0C4.57168 0 0 4.59736 0 10.2734C0 20.0846 10.2135 32.875 10.2135 32.875C10.2135 32.875 20.427 20.0846 20.427 10.2734C20.427 4.59736 15.8553 0 10.2135 0ZM10.2135 15.2561C7.54242 15.2561 5.38499 13.0815 5.38499 10.4019C5.38499 7.7222 7.55098 5.53909 10.2135 5.53909C12.8846 5.53909 15.042 7.71364 15.042 10.4019C15.042 13.0815 12.8846 15.2561 10.2135 15.2561Z'
									fill='#FFCC00'
								/>
							</svg>
						</span>
						<p className={styles.itemText}>
							762 Fulton St San Francisco, California(CA), 94102
						</p>
					</li>
					<li className={styles.item}>
						<div className={styles.imgWrapper}>
							<Image src={outlet2} alt='#' width={370} height={440} />
						</div>
						<span className={styles.icon}>
							<svg
								width='21'
								height='33'
								viewBox='0 0 21 33'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M10.2135 0C4.57168 0 0 4.59736 0 10.2734C0 20.0846 10.2135 32.875 10.2135 32.875C10.2135 32.875 20.427 20.0846 20.427 10.2734C20.427 4.59736 15.8553 0 10.2135 0ZM10.2135 15.2561C7.54242 15.2561 5.38499 13.0815 5.38499 10.4019C5.38499 7.7222 7.55098 5.53909 10.2135 5.53909C12.8846 5.53909 15.042 7.71364 15.042 10.4019C15.042 13.0815 12.8846 15.2561 10.2135 15.2561Z'
									fill='#FFCC00'
								/>
							</svg>
						</span>
						<p className={styles.itemText}>
							66 Ceres St San Francisco, California(CA), 94124
						</p>
					</li>
					<li className={styles.item}>
						<div className={styles.imgWrapper}>
							<Image src={outlet3} alt='#' width={370} height={440} />
						</div>
						<span className={styles.icon}>
							<svg
								width='21'
								height='33'
								viewBox='0 0 21 33'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M10.2135 0C4.57168 0 0 4.59736 0 10.2734C0 20.0846 10.2135 32.875 10.2135 32.875C10.2135 32.875 20.427 20.0846 20.427 10.2734C20.427 4.59736 15.8553 0 10.2135 0ZM10.2135 15.2561C7.54242 15.2561 5.38499 13.0815 5.38499 10.4019C5.38499 7.7222 7.55098 5.53909 10.2135 5.53909C12.8846 5.53909 15.042 7.71364 15.042 10.4019C15.042 13.0815 12.8846 15.2561 10.2135 15.2561Z'
									fill='#FFCC00'
								/>
							</svg>
						</span>
						<p className={styles.itemText}>
							766 Sutter St San Francisco, California(CA), 94109
						</p>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Outlets
