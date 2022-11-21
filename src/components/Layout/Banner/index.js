import React from 'react'
import './Banner.scss'
import { banner, ggplay, appstore } from '~/constants/images'

const Banner = () => {
	return (
		<div className='banner'>
			<div className='wrapper banner__wrapper'>
				<div className='banner__content'>
					<h1 className='banner__title'>Order Management System</h1>
					<h4 className='banner__subtitlte'>
						Crafted for Online Sellers
					</h4>
					<p className='banner__description'>
						Sell effortlessly on Facebook and Instagram
					</p>
					<button className='button button--large banner__button'>
						Start here
					</button>
					{/* google play and app store */}
					<div className='banner__app'>
						<div className='banner__app-ggplay'>
							<img src={ggplay} alt='google play' />
						</div>
						<div className='banner__app-appstore'>
							<img src={appstore} alt='app store' />
						</div>
					</div>
				</div>
				<div className='banner__image'>
					<img
						src={banner}
						alt='banner'
						className='banner__image-img'
					/>
				</div>
			</div>
		</div>
	)
}

export default Banner
