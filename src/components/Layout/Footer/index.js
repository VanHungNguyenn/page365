import React from 'react'
import './Footer.scss'
import { NavLink } from 'react-router-dom'

const Footer = () => {
	return (
		<footer className='footer'>
			<div className='wrapper footer__wrapper'>
				<div className='footer__list'>
					<div className='footer__sitemap'>
						<div className='footer__sitemap__item'>
							<NavLink to='/'>Home</NavLink>
						</div>
						<div className='footer__sitemap__item'>
							<NavLink to='/pricing'>Pricing</NavLink>
						</div>
						<div className='footer__sitemap__item'>
							<NavLink to='/privacy'>Privacy</NavLink>
						</div>
						{/* <div className='footer__sitemap__item'>
							<NavLink to='/blogs'>Blogs</NavLink>
						</div> */}
						<div className='footer__sitemap__item'>
							<NavLink to='/contact'>Contact</NavLink>
						</div>
					</div>
					<div className='footer__contact'>
						<div className='footer__contact__item'>
							<i className='fas fa-map-marker-alt'></i>
							13 Station Rd, Knebworth, Hertfordshire, UK, SG3 6AP
						</div>
						<div className='footer__contact__item'>
							<i className='fas fa-phone-alt'></i>
							07977 050554
						</div>
						<div className='footer__contact__socials'>
							<a
								href='https://www.facebook.com/softbaked'
								target='_blank'
								rel='noreferrer'
							>
								<i className='fab fa-facebook-f'></i>
							</a>
							<a
								href='https://www.instagram.com/softbaked'
								target='_blank'
								rel='noreferrer'
							>
								<i className='fab fa-instagram'></i>
							</a>
							<a
								href='https://www.linkedin.com/company/softbaked'
								target='_blank'
								rel='noreferrer'
							>
								<i className='fab fa-linkedin-in'></i>
							</a>
							<a
								href='https://www.youtube.com/channel/UCZ8Y4Z8Z4Z8Z4Z8Z4Z8Z4Z8'
								target='_blank'
								rel='noreferrer'
							>
								<i className='fab fa-youtube'></i>
							</a>
						</div>
					</div>
				</div>
				<div className='footer__rights'>
					© 2022, 13 Station Rd. All rights reserved.
				</div>
			</div>
		</footer>
	)
}

export default Footer
