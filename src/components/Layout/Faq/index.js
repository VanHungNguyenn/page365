import React from 'react'
import './Faq.scss'

const Faq = () => {
	return (
		<div className='faq'>
			<div className='wrapper faq__wrapper'>
				<div className='faq__title title'>
					Frequently Asked Questions
				</div>
				<div className='faq__subtitle'>
					Still have doubts? Here's everything we think you should
					know.
				</div>
				<div className='faq__list'>
					<div className='faq__item'>
						<div className='faq__item-title'>
							Do I need the credit card to register? How to
							upgrade?
						</div>
						<div className='faq__item-desc'>
							All users can register to Page365s for free forever,
							no credit card needed. Whenever you want to upgrade,
							we accept various of payment methods such as credit
							card (charge in USD) or G-Cash (contact to customer
							service).
						</div>
					</div>
					<div className='faq__item'>
						<div className='faq__item-title'>
							Does Page365s take percentage from my sales?
						</div>
						<div className='faq__item-desc'>
							No. Page365s do not charge or take percentage from
							your sales. Sales go directly to your bank account.
						</div>
					</div>
					<div className='faq__item'>
						<div className='faq__item-title'>
							How to register? How to create account for multiple
							pages?
						</div>
						<div className='faq__item-desc'>
							You can easily register to Page365s for free by
							clicking START FREE. Then, connect your Facebook and
							Facebook Pages to Page365s. Learn more
						</div>
					</div>
					<div className='faq__item'>
						<div className='faq__item-title'>
							Is my data secured with Page365s?
						</div>
						<div className='faq__item-desc'>
							Our priority mission is to secure your data at
							utmost level. Our system has the world class
							standard security level also known as High Assurance
							SSL (same level as international banks). Learn more
							about our privacy policy
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Faq
