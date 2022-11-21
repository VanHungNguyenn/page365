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
					Page365 for a wide variety of businesses
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
						<div className='tab-pane__content'>
							<h3 className='tab-pane__title'>
								Jhajing - Facebook Live Seller
							</h3>
							<p className='tab-pane__quote'>
								"Para na din akong nag hire ng 3 admin staff
								para imanage ang aking online business"
							</p>
						</div>
						<div className='tab-pane__image'>
							<img src={business1} alt='business' />
						</div>
					</div>
					<div className={tab === 2 ? 'tab-pane active' : 'tab-pane'}>
						<h2>Angular</h2>
						<p>
							Angular is an application design framework and
							development platform for creating efficient and
							sophisticated single-page apps.
						</p>
					</div>
					<div className={tab === 3 ? 'tab-pane active' : 'tab-pane'}>
						<h2>Ember</h2>
						<p>
							Ember.js is a productive, battle-tested JavaScript
							framework for building modern web applications. It
							includes everything you need to build rich UIs that
							work on any device.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Business
