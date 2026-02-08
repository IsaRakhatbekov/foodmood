import Image from 'next/image'
import styles from './Team.module.scss'

import img1 from '../../../public/Team/1.png'
import img2 from '../../../public/Team/2.png'
import img3 from '../../../public/Team/3.png'
import img4 from '../../../public/Team/4.png'

const Team = () => {
	return (
		<div className={styles.Team}>
			<div className={`${styles.container} container`}>
				<span className={styles.upTitle}>TEAM MEMBERS</span>
				<h2 className={styles.title}>Meet Our Best Team</h2>
				<ul className={styles.list}>
					<li className={styles.item}>
						<div className={styles.imgWrapper}>
							<Image src={img1} alt='#' width={280} height={350} />
						</div>
						<h4 className={styles.innerTitle}>Alizeh Anderson</h4>
						<p className={styles.text}>Senior Chef</p>
					</li>
					<li className={styles.item}>
						<div className={styles.imgWrapper}>
							<Image src={img2} alt='#' width={280} height={350} />
						</div>
						<h4 className={styles.innerTitle}>Angelina John</h4>
						<p className={styles.text}>Master Chef</p>
					</li>
					<li className={styles.item}>
						<div className={styles.imgWrapper}>
							<Image src={img3} alt='#' width={280} height={350} />
						</div>
						<h4 className={styles.innerTitle}>Andre Smith</h4>
						<p className={styles.text}>Professor</p>
					</li>
					<li className={styles.item}>
						<div className={styles.imgWrapper}>
							<Image src={img4} alt='#' width={280} height={350} />
						</div>
						<h4 className={styles.innerTitle}>Christina Chi</h4>
						<p className={styles.text}>Psychologist</p>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Team
