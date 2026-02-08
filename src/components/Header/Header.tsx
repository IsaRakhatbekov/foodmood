'use client'
import { useState } from 'react'
import styles from './Header.module.scss'

const Header = () => {
	const [mobileMenu, setMobileMenu] = useState(false)

	return (
		<header className={styles.header}>
			<div className={`${styles.container} container`}>
				<nav className={styles.nav}>
					<a href='#' className={styles.logoWrapper}>
						FOODMOOD
					</a>
					<div className={styles.rightSide}>
						<ul className={styles.list}>
							<li className={styles.item}>
								<a href='#' className={styles.link}>
									HOME
								</a>
							</li>
							<li className={styles.item}>
								<a href='#' className={styles.link}>
									OUR MENU
								</a>
							</li>
							<li className={styles.item}>
								<a href='#' className={styles.link}>
									OFFER
								</a>
							</li>
							<li className={styles.item}>
								<a href='#' className={styles.link}>
									ABOUT
								</a>
							</li>
							<li className={styles.item}>
								<a href='#' className={styles.link}>
									CONTACT
								</a>
							</li>
						</ul>
						<button className={styles.btn}>DOWNLOAD APP</button>
						<button
							className={`${styles.burgerMenuBtn} ${mobileMenu ? styles.burgerMenuBtnActive : ''}`}
							onClick={() => setMobileMenu(!mobileMenu)}
						>
							<span></span>
						</button>
					</div>

					<div
						className={`${styles.mobileMenu} ${mobileMenu ? styles.mobileMenuActive : ''}`}
					>
						<ul className={styles.list}>
							<li className={styles.item}>
								<a href='#' className={styles.link}>
									HOME
								</a>
							</li>
							<li className={styles.item}>
								<a href='#' className={styles.link}>
									OUR MENU
								</a>
							</li>
							<li className={styles.item}>
								<a href='#' className={styles.link}>
									OFFER
								</a>
							</li>
							<li className={styles.item}>
								<a href='#' className={styles.link}>
									ABOUT
								</a>
							</li>
							<li className={styles.item}>
								<a href='#' className={styles.link}>
									CONTACT
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</header>
	)
}

export default Header
