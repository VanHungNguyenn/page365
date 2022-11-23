import React from 'react'
import './Contact.scss'
import { contact } from '~/constants/images'
import ContactForm from '~/components/Layout/ContactForm'

const Contact = () => {
	return (
		<>
			<div className='contact'>
				<div className='wrapper contact__wrapper'>
					<div className='contact__hero'>
						<div className='contact__hero-content'>
							<h4 className='contact__hero-title'>
								We'd love to hear from you!
							</h4>
							<div className='contact__hero-desc'>
								Any questions for Page365? Need Tutorial?
								<br />
								Feel free to reach out to us.
							</div>
							<div className='contact__hero-socials'>
								<a
									className='contact__hero-social'
									href='https://www.facebook.com/page365'
									target='_blank'
									rel='noopener noreferrer'
								>
									<i className='fa-brands fa-facebook-f'></i>
								</a>
								<a
									className='contact__hero-social'
									href='https://www.instagram.com/page365'
									target='_blank'
									rel='noopener noreferrer'
								>
									<i className='fa-brands fa-twitter'></i>
								</a>
								<a
									className='contact__hero-social'
									href='https://www.instagram.com/page365'
									target='_blank'
									rel='noopener noreferrer'
								>
									<i className='fa-brands fa-instagram'></i>
								</a>
								<a
									className='contact__hero-social'
									href='https://www.instagram.com/page365'
									target='_blank'
									rel='noopener noreferrer'
								>
									<i className='fa-brands fa-linkedin-in'></i>
								</a>
							</div>
						</div>
						<div className='contact__hero-image'>
							<img src={contact} alt='contact' />
						</div>
					</div>
				</div>
			</div>
			<ContactForm />
		</>
	)
}

export default Contact
