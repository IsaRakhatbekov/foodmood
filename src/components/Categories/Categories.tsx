import Image from 'next/image'
import styles from './Categories.module.scss'

import food1 from '../../../public/Categories/1.png'
import food2 from '../../../public/Categories/2.png'
import food3 from '../../../public/Categories/3.png'
import food4 from '../../../public/Categories/4.png'

const Categories = () => {
	return (
		<div className={styles.Categories}>
			<div className={`${styles.container} container`}>
				<span className={styles.upTitle}>TOP FOODS</span>
				<h2 className={styles.title}>Our Categories</h2>
				<ul className={styles.foodType}>
					<li className={styles.foodItem}>
						<div className={styles.imgWrapper}>
							<Image src={food1} alt='food' width={250} height={250} />
						</div>
						<h3 className={styles.foodTitle}>Pizza</h3>
						<p className={styles.foodText}>20 Restaurants Foods</p>
					</li>
					<li className={styles.foodItem}>
						<div className={styles.imgWrapper}>
							<Image src={food2} alt='food' width={250} height={250} />
						</div>
						<h3 className={styles.foodTitle}>Pasta</h3>
						<p className={styles.foodText}>15 Restaurants Foods</p>
					</li>
					<li className={styles.foodItem}>
						<div className={styles.imgWrapper}>
							<Image src={food3} alt='food' width={250} height={250} />
						</div>
						<h3 className={styles.foodTitle}>Shakes</h3>
						<p className={styles.foodText}>20 Restaurants Foods</p>
					</li>
					<li className={styles.foodItem}>
						<div className={styles.imgWrapper}>
							<Image src={food4} alt='food' width={250} height={250} />
						</div>
						<h3 className={styles.foodTitle}>Burgers</h3>
						<p className={styles.foodText}>25 Restaurants Foods</p>
					</li>
				</ul>
			</div>
			<div className={styles.delivery}>
				<div className={`${styles.container} container`}>
					<ul className={styles.deliveryWrapper}>
						<li className={styles.deliveryItem}>
							<div className={styles.iconWrapper}>
								<svg
									width='36'
									height='26'
									viewBox='0 0 36 26'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M31.0909 6.5H26.1818V0H3.27273C1.46455 0 0 1.45437 0 3.25V21.125H3.27273C3.27273 23.8144 5.47364 26 8.18182 26C10.89 26 13.0909 23.8144 13.0909 21.125H22.9091C22.9091 23.8144 25.11 26 27.8182 26C30.5264 26 32.7273 23.8144 32.7273 21.125H36V13L31.0909 6.5ZM8.18182 23.5625C6.82364 23.5625 5.72727 22.4738 5.72727 21.125C5.72727 19.7763 6.82364 18.6875 8.18182 18.6875C9.54 18.6875 10.6364 19.7763 10.6364 21.125C10.6364 22.4738 9.54 23.5625 8.18182 23.5625ZM30.2727 8.9375L33.4882 13H26.1818V8.9375H30.2727ZM27.8182 23.5625C26.46 23.5625 25.3636 22.4738 25.3636 21.125C25.3636 19.7763 26.46 18.6875 27.8182 18.6875C29.1764 18.6875 30.2727 19.7763 30.2727 21.125C30.2727 22.4738 29.1764 23.5625 27.8182 23.5625Z'
										fill='#FFCC00'
									/>
								</svg>
							</div>
							<h3 className={styles.deliveryTitle}>
								Free Shipping on First Order
							</h3>
							<p className={styles.deliveryText}>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
								eiusmod
							</p>
						</li>
						<li className={styles.deliveryItem}>
							<div className={styles.iconWrapper}>
								<svg
									width='38'
									height='35'
									viewBox='0 0 38 35'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M35.9469 18.3708C36.6413 19.0652 37.0348 20.0065 37.0348 20.9864C37.0348 21.9663 36.6413 22.9076 35.9469 23.602C35.2525 24.2964 34.3112 24.6899 33.3313 24.6899H3.70348C2.72129 24.6899 1.77921 24.2964 1.08481 23.602C0.390409 22.9076 0 21.9663 0 20.9864C0 20.0065 0.390409 19.0652 1.08481 18.3708C1.77921 17.6764 2.72129 17.2829 3.70348 17.2829H33.3313C34.3112 17.2829 35.2525 17.6764 35.9469 18.3708ZM35.4377 27.5215C35.6692 27.753 35.8003 28.0693 35.8003 28.3934V29.6279C35.8003 30.8701 35.2834 32.1972 34.3575 33.123C33.4316 34.0489 32.1046 34.5658 30.8624 34.5658H6.17247C4.86314 34.5658 3.60704 34.0489 2.68117 33.123C1.75452 32.1972 1.23449 30.8701 1.23449 29.6279V28.3934C1.23449 28.0693 1.36489 27.753 1.59636 27.5215C1.82782 27.29 2.14185 27.1589 2.46899 27.1589H34.5658C34.8899 27.1589 35.2062 27.29 35.4377 27.5215ZM2.65339 14.567C2.30928 14.3973 2.00837 14.1581 1.77227 13.8572C1.53617 13.5563 1.3726 13.2091 1.29236 12.8387C1.21212 12.4607 1.21906 12.0749 1.31088 11.7045C3.00754 5.01668 10.0688 0 18.5174 0C26.966 0 34.0257 5.01668 35.7232 11.7045C35.8158 12.0749 35.8235 12.4607 35.7386 12.8387C35.6614 13.2091 35.4994 13.5563 35.2602 13.8572C34.9593 14.1581 34.7279 14.3973 34.3807 14.567C34.0412 14.7291 33.6631 14.8139 33.2773 14.8139H3.75518C3.37403 14.8139 2.99673 14.7291 2.65339 14.567ZM27.5215 6.5351C27.29 6.76657 27.1589 7.08291 27.1589 7.40697C27.1589 7.65386 27.2283 7.89305 27.3672 8.09365C27.5061 8.29426 27.6295 8.45629 27.9227 8.54887C28.1465 8.57202 28.3934 8.66461 28.6325 8.61831C28.8717 8.57202 29.0955 8.45629 29.2652 8.27883C29.4427 8.10908 29.5584 7.88533 29.6047 7.64615C29.651 7.40697 29.5584 7.16007 29.5353 6.93631C29.4427 6.64312 29.2807 6.51967 29.0801 6.38079C28.8794 6.24191 28.6403 6.10303 28.3934 6.10303C28.0693 6.10303 27.753 6.30364 27.5215 6.5351ZM17.6455 4.06534C17.4141 4.29681 17.2829 4.61084 17.2829 4.93798C17.2829 5.18179 17.3524 5.42406 17.4912 5.62466C17.6301 5.82527 17.7536 5.9873 18.0468 6.07988C18.2705 6.10303 18.5174 6.19562 18.7566 6.14932C18.9958 6.10303 19.2195 5.9873 19.3893 5.80984C19.5667 5.6401 19.6825 5.41634 19.7288 5.1787C19.7751 4.93952 19.6825 4.69108 19.6593 4.46578C19.5667 4.23972 19.4047 4.04683 19.2041 3.9118C19.0035 3.77601 18.7643 3.63404 18.5174 3.63404C18.1934 3.63404 17.877 3.83388 17.6455 4.06534ZM7.7696 6.5351C7.53813 6.76657 7.40696 7.08291 7.40696 7.40697C7.40696 7.65386 7.4764 7.89305 7.61529 8.09365C7.75417 8.29426 7.87762 8.45629 8.17081 8.54887C8.39456 8.57202 8.64146 8.66461 8.88064 8.61831C9.11983 8.57202 9.34358 8.45629 9.51332 8.27883C9.69078 8.10908 9.80651 7.88533 9.85281 7.64615C9.8991 7.40697 9.80651 7.16007 9.78337 6.93631C9.69078 6.64312 9.52875 6.51967 9.32815 6.38079C9.12754 6.24191 8.88836 6.10303 8.64146 6.10303C8.3174 6.10303 8.00106 6.30364 7.7696 6.5351Z'
										fill='#FFCC00'
									/>
								</svg>
							</div>
							<h3 className={styles.deliveryTitle}>Variety of Dishes</h3>
							<p className={styles.deliveryText}>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
								eiusmod
							</p>
						</li>
						<li className={styles.deliveryItem}>
							<div className={styles.iconWrapper}>
								<svg
									width='41'
									height='41'
									viewBox='0 0 41 41'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M20.1908 0C9.03703 0 0 9.03703 0 20.1908C0 31.3446 9.03703 40.3817 20.1908 40.3817C31.3446 40.3817 40.3817 31.3446 40.3817 20.1908C40.3817 9.03703 31.3446 0 20.1908 0ZM27.7209 25.4828L26.0926 27.5182C25.9857 27.6518 25.8536 27.763 25.7038 27.8455C25.5539 27.9281 25.3893 27.9803 25.2192 27.9992C25.0492 28.0181 24.8771 28.0033 24.7128 27.9557C24.5485 27.9081 24.3952 27.8286 24.2616 27.7217L18.8068 23.6738C18.4257 23.3686 18.118 22.9817 17.9066 22.5415C17.6952 22.1014 17.5855 21.6194 17.5856 21.1312V8.46713C17.5856 8.12164 17.7228 7.79032 17.9671 7.54602C18.2114 7.30173 18.5427 7.16449 18.8882 7.16449H21.4935C21.839 7.16449 22.1703 7.30173 22.4146 7.54602C22.6589 7.79032 22.7961 8.12164 22.7961 8.46713V20.1908L27.5182 23.651C27.6518 23.7579 27.7631 23.8901 27.8456 24.04C27.9281 24.19 27.9803 24.3547 27.9991 24.5249C28.018 24.695 28.0031 24.8672 27.9553 25.0315C27.9076 25.1959 27.8279 25.3492 27.7209 25.4828Z'
										fill='#FFCC00'
									/>
								</svg>
							</div>
							<h3 className={styles.deliveryTitle}>Thirty Minutes Delivery</h3>
							<p className={styles.deliveryText}>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
								eiusmod
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Categories
