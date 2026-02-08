import Image from 'next/image'
import styles from './Delivery.module.scss'

import delivery1 from '../../../public/Delivery/1.png'
import delivery2 from '../../../public/Delivery/2.png'
import big from '../../../public/Delivery/big.png'

const Delivery = () => {
	return (
		<div className={styles.Delivery}>
			<div className={`${styles.container} container`}>
				<div className={styles.wrapper}>
					<div className={styles.content}>
						<span className={styles.upTitle}>PIZZA DELIVERY</span>
						<h2 className={styles.title}>Get Started Today!</h2>
						<p className={styles.textBold}>
							Everything you need to build an amazing food restaurant responsive
							website.
						</p>
						<p className={styles.text}>
							Hendrerit in vulputate velit esse molestie consequat, vel illum
							dolore eu feugiat nulla facilisis at vero eros et accumsan et
							iusto odio dignissim qui blandit praesent luptatum zzril delenit
							augue duis.
						</p>
						<ul className={styles.list}>
							<li className={styles.item}>
								<div className={styles.itemImg}>
									<Image src={delivery1} alt='#' width={100} height={100} />
								</div>
								<h3 className={styles.itemTitle}>Food Order</h3>
								<p className={styles.itemText}>
									Food is the necessity of life. It provides nutrition,
									sustenance growth to human body.
								</p>
							</li>
							<li className={styles.item}>
								<div className={styles.itemImg}>
									<Image src={delivery2} alt='#' width={100} height={100} />
								</div>
								<h3 className={styles.itemTitle}>Promote Restaurant</h3>
								<p className={styles.itemText}>
									Food can be classified into cereals, pulses, nuts and
									oilseeds, vegetable
								</p>
							</li>
						</ul>
					</div>
					<div className={styles.imgWrapper}>
						<Image src={big} alt='#' width={585} height={585} />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Delivery
