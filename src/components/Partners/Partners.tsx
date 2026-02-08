import Image from 'next/image'
import styles from './Partners.module.scss'

import partners1 from '../../../public/Partners/1.png'
import partners2 from '../../../public/Partners/2.png'
import partners3 from '../../../public/Partners/3.png'
import partners4 from '../../../public/Partners/4.png'

const Partners = () => {
	return (
		<div className={styles.Partners}>
			<div className={`${styles.container} container`}>
				<ul className={styles.list}>
					<li className={styles.partnersItem}>
						<Image src={partners1} alt='' width={250} height={200} />
					</li>
					<li className={styles.partnersItem}>
						<Image src={partners2} alt='' width={250} height={200} />
					</li>
					<li className={styles.partnersItem}>
						<Image src={partners3} alt='' width={250} height={200} />
					</li>
					<li className={styles.partnersItem}>
						<Image src={partners4} alt='' width={250} height={200} />
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Partners
