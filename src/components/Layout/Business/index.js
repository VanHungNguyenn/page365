import React, { useState, useEffect } from 'react'
import './Business.scss'
import { business1, business2, business3 } from '~/constants/images'

const Business = () => {
	const [tab, setTab] = useState(1)

	useEffect(() => {
		const tabs = document.querySelectorAll('.tab-item')
		const panes = document.querySelectorAll('.tab-pane')

		const line = document.querySelector('.line')

		line.style.left = tabs[0].offsetLeft + 'px'
		line.style.width = tabs[0].offsetWidth + 'px'

		tabs.forEach((tab, index) => {
			let pane = panes[index]

			tab.addEventListener('click', () => {
				setTab(tab)

				tabs.forEach((tab) => {
					tab.classList.remove('active')
				})
				tab.classList.add('active')

				panes.forEach((pane) => {
					pane.classList.remove('active')
				})
				pane.classList.add('active')

				const line = document.querySelector('.line')
				line.style.left = `${tab.offsetLeft}px`
				line.style.width = `${tab.offsetWidth}px`
			})
		})
	}, [])

	return (
		<div className='business'>
			<div className='wrapper business__wrapper'>
				<div className='business__title title'>
					Page365s for a wide variety of businesses
				</div>
				<div className='tabs'>
					<div className={tab === 1 ? 'tab-item active' : 'tab-item'}>
						Facebook Live Seller
					</div>
					<div className={tab === 2 ? 'tab-item active' : 'tab-item'}>
						Fashion
					</div>
					<div className={tab === 3 ? 'tab-item active' : 'tab-item'}>
						Cafe
					</div>
					<div className='line'></div>
				</div>

				<div className='tab-content'>
					<div className={tab === 1 ? 'tab-pane active' : 'tab-pane'}>
						<div className='tab-pane__container'>
							<div className='tab-pane__content'>
								<h3 className='tab-pane__title'>
									Jhajing - Facebook Live Seller
								</h3>
								<p className='tab-pane__quote'>
									"Para na din akong nag hire ng 3 admin staff
									para imanage ang aking online business"
								</p>
								<div className='tab-pane__list'>
									<div className='tab-pane__list-item'>
										<i className='fa-solid fa-circle-check'></i>
										Pagkatype lang nila ng product code and
										color ng particular item ay agad silang
										nakreceive ng real time confirmation sa
										inbox nila
									</div>
									<div className='tab-pane__list-item'>
										<i className='fa-solid fa-circle-check'></i>
										Alam niyo ba pag nagavail kayo ng
										Page365s pwede nitong patakbuhin 24/7
										round the clock ang ating online
										business.
									</div>
								</div>
								<a
									href='https://jhajing.page365.net/'
									className='tab-pane__link'
									target='_blank'
									rel='noopener noreferrer'
								>
									See Jhajing's Page365s
								</a>
							</div>
							<div className='tab-pane__image'>
								<img src={business1} alt='business' />
							</div>
						</div>
					</div>
					<div className={tab === 2 ? 'tab-pane active' : 'tab-pane'}>
						<div className='tab-pane__container'>
							<div className='tab-pane__content'>
								<h3 className='tab-pane__title'>
									McGregor Enterprise
								</h3>
								<p className='tab-pane__quote'>
									Delicacies, Pastries, Sweets, at may Gadgets
									pa
								</p>
								<div className='tab-pane__list'>
									<div className='tab-pane__list-item'>
										<i className='fa-solid fa-circle-check'></i>
										This system because it simplifies your
										online business
									</div>
									<div className='tab-pane__list-item'>
										<i className='fa-solid fa-circle-check'></i>
										Lalo na ang magandang features nito na
										LIVE Selling. Isa rin sa maganda dito ay
										ang Inventory Monitoring, Ordering
										system, and Payment channel option
									</div>
									<div className='tab-pane__list-item'>
										<i className='fa-solid fa-circle-check'></i>
										Analytics on your sales, and connection
										of Page365s to all social media platform
										like FB Page, Messenger, Instagram
									</div>
								</div>
								<a
									href='https://jhajing.page365.net/'
									className='tab-pane__link'
									target='_blank'
									rel='noopener noreferrer'
								>
									Read full story
								</a>
							</div>
							<div className='tab-pane__image'>
								<img src={business2} alt='business' />
							</div>
						</div>
					</div>
					<div className={tab === 3 ? 'tab-pane active' : 'tab-pane'}>
						<div className='tab-pane__container'>
							<div className='tab-pane__content'>
								<h3 className='tab-pane__title'>
									Craftea Nutty - Tea leaf shop
								</h3>
								<p className='tab-pane__quote'>
									"Matutulog ka lang pag gising mo may benta
									ka na"
								</p>
								<div className='tab-pane__list'>
									<div className='tab-pane__list-item'>
										<i className='fa-solid fa-circle-check'></i>
										Generating invoices for us and it’s
										easier and faster to fulfill the orders!
									</div>
									<div className='tab-pane__list-item'>
										<i className='fa-solid fa-circle-check'></i>
										Storefront and complete ordering
										procedure ni Page365s, mas less mistake,
										mas less effort sa order procedure
									</div>
									<div className='tab-pane__list-item'>
										<i className='fa-solid fa-circle-check'></i>
										My admins can access it at the same time
									</div>
								</div>
								<a
									href='https://jhajing.page365.net/'
									className='tab-pane__link'
									target='_blank'
									rel='noopener noreferrer'
								>
									Visit their shop
								</a>
							</div>
							<div className='tab-pane__image'>
								<img src={business3} alt='business' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Business
