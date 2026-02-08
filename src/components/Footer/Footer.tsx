import styles from './Footer.module.scss'

const Footer = () => {
	return (
		<div className={styles.Footer}>
			<div className={`${styles.container} container`}>
				<ul className={styles.list}>
					<li className={styles.item}>
						<a className={styles.logo} href='#'>
							FOODMOOD
						</a>
						<p className={styles.text}>
							Vivamus convallis fermen sollicitudin et, vitae elit in vel
							ultrices sed in urna ipsum ullamcorper auctor.
						</p>
						<div className={styles.iconsWrapper}>
							<div className={styles.icons}>
								<svg
									width='26'
									height='22'
									viewBox='0 0 26 22'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M25.2764 2.13472C24.3391 2.60517 23.3223 2.94056 22.2474 3.11975C23.3201 2.40721 24.1172 1.32088 24.4577 0.0536308C23.4541 0.714726 22.3322 1.21292 21.1261 1.51005C20.1032 0.517646 18.6841 -0.066262 17.1475 0.00587943C14.1975 0.14438 11.918 2.64852 12.0565 5.59907C12.0761 6.01718 12.1423 6.42251 12.2521 6.8099C7.80156 6.79529 3.76483 4.85363 0.978093 1.74505C0.555251 2.55529 0.335098 3.48527 0.381108 4.46526C0.468114 6.31848 1.48789 7.90964 2.96638 8.80014C2.08973 8.81322 1.25437 8.6114 0.515127 8.24509C0.515641 8.26731 0.516708 8.29004 0.517775 8.31277C0.639277 10.9007 2.58221 12.973 5.04946 13.3498C4.60693 13.4924 4.13798 13.5801 3.65063 13.603C3.30599 13.6192 2.96984 13.6016 2.64075 13.554C3.42067 15.6444 5.46588 17.0968 7.80529 17.0299C6.0442 18.5487 3.78126 19.511 1.27789 19.6285C0.847095 19.6488 0.420394 19.6434 -4.80931e-05 19.6133C2.43603 21.0188 5.28536 21.7708 8.30199 21.6291C18.1289 21.1678 23.1198 12.7753 22.7883 5.71556C22.7774 5.48404 22.7618 5.25327 22.741 5.02434C23.7492 4.2237 24.611 3.23976 25.2764 2.13472Z'
										fill='black'
									/>
								</svg>
							</div>
							<div className={styles.icons}>
								<svg
									width='12'
									height='26'
									viewBox='0 0 12 26'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M11.8787 8.27774H7.83324V5.6245C7.83324 4.62808 8.49364 4.39578 8.95877 4.39578C9.42285 4.39578 11.8136 4.39578 11.8136 4.39578V0.0153457L7.88192 0C3.51736 0 2.52412 3.26707 2.52412 5.3578V8.27774H0V12.7915H2.52412C2.52412 18.5843 2.52412 25.564 2.52412 25.564H7.83324C7.83324 25.564 7.83324 18.5155 7.83324 12.7915H11.4157L11.8787 8.27774Z'
										fill='black'
									/>
								</svg>
							</div>
							<div className={styles.icons}>
								<svg
									width='30'
									height='30'
									viewBox='0 0 30 30'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M14.9204 8.83618C11.2167 8.83618 8.14795 11.8521 8.14795 15.6087C8.14795 19.3653 11.1638 22.3812 14.9204 22.3812C18.6771 22.3812 21.6929 19.3124 21.6929 15.6087C21.6929 11.905 18.6241 8.83618 14.9204 8.83618ZM14.9204 19.9473C12.5395 19.9473 10.5818 17.9896 10.5818 15.6087C10.5818 13.2277 12.5395 11.27 14.9204 11.27C17.3014 11.27 19.2591 13.2277 19.2591 15.6087C19.2591 17.9896 17.3014 19.9473 14.9204 19.9473Z'
										fill='black'
									/>
									<path
										d='M21.9577 10.2118C22.8052 10.2118 23.4921 9.52488 23.4921 8.67746C23.4921 7.83004 22.8052 7.14307 21.9577 7.14307C21.1103 7.14307 20.4233 7.83004 20.4233 8.67746C20.4233 9.52488 21.1103 10.2118 21.9577 10.2118Z'
										fill='black'
									/>
									<path
										d='M25.9258 4.70911C24.5501 3.28054 22.5925 2.53979 20.3703 2.53979H9.47079C4.86761 2.53979 1.79883 5.60858 1.79883 10.2118V21.0583C1.79883 23.3334 2.53957 25.2911 4.02105 26.7197C5.44962 28.0954 7.35438 28.7832 9.5237 28.7832H20.3173C22.5925 28.7832 24.4972 28.0424 25.8729 26.7197C27.3015 25.344 28.0422 23.3864 28.0422 21.1112V10.2118C28.0422 7.98953 27.3015 6.08477 25.9258 4.70911ZM25.7142 21.1112C25.7142 22.7514 25.1322 24.0742 24.1798 24.9737C23.2274 25.8731 21.9046 26.3493 20.3173 26.3493H9.5237C7.93639 26.3493 6.61364 25.8731 5.66126 24.9737C4.70888 24.0213 4.23269 22.6985 4.23269 21.0583V10.2118C4.23269 8.62445 4.70888 7.3017 5.66126 6.34932C6.56073 5.44985 7.93639 4.97366 9.5237 4.97366H20.4232C22.0105 4.97366 23.3332 5.44985 24.2856 6.40223C25.1851 7.35461 25.7142 8.67736 25.7142 10.2118V21.1112Z'
										fill='black'
									/>
								</svg>
							</div>
						</div>
					</li>
					<li className={styles.item}>
						<h4 className={styles.title}>ABOUT US</h4>
						<a className={styles.links} href='#'>
							Our Story
						</a>
						<a className={styles.links} href='#'>
							Our Locations
						</a>
						<a className={styles.links} href='#'>
							Current Deals
						</a>
						<a className={styles.links} href='#'>
							Contact Us
						</a>
					</li>
					<li className={styles.item}>
						<h4 className={styles.title}>OUR MENU</h4>
						<a className={styles.links} href='#'>
							Pizza
						</a>
						<a className={styles.links} href='#'>
							Pasta
						</a>
						<a className={styles.links} href='#'>
							Dessert
						</a>
						<a className={styles.links} href='#'>
							Take & Bake
						</a>
					</li>
					<li className={styles.item}>
						<h4 className={styles.title}>OUR LOCATION</h4>
						<a className={styles.links} href='#'>
							The FOODMOOD Rome
						</a>
						<a className={styles.links} href='#'>
							The FOODMOOD Madrid
						</a>
						<a className={styles.links} href='#'>
							The FOODMOOD Paris
						</a>
						<a className={styles.links} href='#'>
							The FOODMOOD Miami
						</a>
					</li>
				</ul>
				<div className={styles.copyright}>
					<span>Copyright © 2022 The Pizzeria</span>
					<span>Powered by The FOODMOOD</span>
				</div>
			</div>
		</div>
	)
}

export default Footer
