import React from 'react'
import './ContactForm.scss'
import { contactForm } from '~/constants/images'

const ContactForm = () => {
	return (
		<div className='contact-form'>
			<div className='wrapper contact-form__wrapper'>
				<div className='contact-form__image'>
					<img src={contactForm} alt='contact form' />
				</div>
				<div className='contact-form__content'>
					<div className='contact-form__title'>Contact Us</div>
					{/* form */}
					<form className='contact-form__form'>
						<div className='contact-form__form-group'>
							<label className='contact-form__form-label'>
								Email *
							</label>
							<input
								className='contact-form__form-input'
								type='text'
								placeholder='Your email...'
							/>
						</div>
						<div className='contact-form__form-group'>
							<label className='contact-form__form-label'>
								Name *
							</label>
							<input
								className='contact-form__form-input'
								type='text'
								placeholder='Your name...'
							/>
						</div>
						<div className='contact-form__form-group'>
							<label className='contact-form__form-label'>
								Subject *
							</label>
							<input
								className='contact-form__form-input'
								type='text'
								placeholder='Your subject...'
							/>
						</div>
						<div className='contact-form__form-group'>
							<label className='contact-form__form-label'>
								Message *
							</label>
							<textarea
								className='contact-form__form-input contact-form__form-input--textarea'
								placeholder='Your message...'
								rows='4'
							/>
						</div>
						<button className='button contact-form__form-button'>
							Send message
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

export default ContactForm
