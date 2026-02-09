'use client'
import { useEffect, useState } from 'react'
import styles from './Header.module.scss'

const Header = () => {
	const [mobileMenu, setMobileMenu] = useState(false)
	const [scrolled, setScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 0)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	useEffect(() => {
		if (mobileMenu) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}

		return () => {
			document.body.style.overflow = ''
		}
	}, [mobileMenu])

	const handleCloseMenu = () => {
		setMobileMenu(false)
	}

	return (
		<header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
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
						<ul className={styles.mobileList}>
							<li className={styles.item}>
								<a href='#' className={styles.link} onClick={handleCloseMenu}>
									HOME
								</a>
							</li>
							<li className={styles.item}>
								<a href='#' className={styles.link} onClick={handleCloseMenu}>
									OUR MENU
								</a>
							</li>
							<li className={styles.item}>
								<a href='#' className={styles.link} onClick={handleCloseMenu}>
									OFFER
								</a>
							</li>
							<li className={styles.item}>
								<a href='#' className={styles.link} onClick={handleCloseMenu}>
									ABOUT
								</a>
							</li>
							<li className={styles.item}>
								<a href='#' className={styles.link} onClick={handleCloseMenu}>
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
