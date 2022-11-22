import React, { useState } from 'react'
import './Pricing.scss'
import { pricingContentList } from '~/constants/contents'
import Faq from '~/components/Layout/Faq'

const Pricing = () => {
	const [showPricingDetails, setShowPricingDetails] = useState(false)

	return (
		<>
			<div className='pricing'>
				<div className='wrapper pricing__wrapper'>
					<h1 className='pricing__title title'>Plan and Pricing</h1>
					<div className='pricing__subtitle'>
						Choose plan suits your business size
					</div>
					<div className='pricing__plans'>
						{pricingContentList.map((item, index) => {
							return (
								<div className='pricing__plan' key={index}>
									<div className='pricing__plan-image'>
										<img src={item.img} alt='plan' />
									</div>
									<div className='pricing__plan-title'>
										{item.title}
									</div>
									<div className='pricing__plan-price'>
										${item.price}
									</div>
									<div className='pricing__plan-desc'>
										{item.desc}
									</div>
									<div className='pricing__plan-features'>
										{item.features.map((feature, index) => {
											return (
												<div className='pricing__plan-feature'>
													<i className='fa-solid fa-check'></i>
													{feature}
												</div>
											)
										})}
									</div>
									<button className='pricing__plan-button button button--100'>
										Get Free Monthly
									</button>
								</div>
							)
						})}
					</div>
					<button
						className='button pricing__button-more'
						onClick={() =>
							setShowPricingDetails(!showPricingDetails)
						}
					>
						More pricing details
					</button>
					{showPricingDetails && (
						<table className='pricing__table'>
							<thead className='pricing__table-head'>
								<tr className='pricing__table-row'>
									<th>Features</th>
									<th>Free</th>
									<th>Solo</th>
									<th>Pro</th>
									<th>ProLive</th>
									<th>SME</th>
								</tr>
							</thead>
							<tbody className='pricing__table-body'>
								<tr className='pricing__table-row'>
									<td>Facebook (Comment, Inbox)</td>
									<td>
										<i className='fa-solid fa-check'></i>
									</td>
									<td>
										<i className='fa-solid fa-check'></i>
									</td>
									<td>
										<i className='fa-solid fa-check'></i>
									</td>
									<td>
										<i className='fa-solid fa-check'></i>
									</td>
									<td>
										<i className='fa-solid fa-check'></i>
									</td>
								</tr>
								<tr className='pricing__table-row'>
									<td>Facebook (LIVE, video)</td>
									<td>
										<i className='fa-solid fa-times'></i>
									</td>
									<td>
										<i className='fa-solid fa-times'></i>
									</td>
									<td>
										<i className='fa-solid fa-check'></i>
									</td>
									<td>
										<i className='fa-solid fa-check'></i>
									</td>
									<td>
										<i className='fa-solid fa-check'></i>
									</td>
								</tr>
								<tr className='pricing__table-row'>
									<td>Facebook Ads*</td>
									<td>
										<i className='fa-solid fa-times'></i>
									</td>
									<td>
										<i className='fa-solid fa-times'></i>
									</td>
									<td>
										<i className='fa-solid fa-check'></i>
									</td>
									<td>
										<i className='fa-solid fa-check'></i>
									</td>
									<td>
										<i className='fa-solid fa-check'></i>
									</td>
								</tr>
								<tr className='pricing__table-row'>
									<td>Instagram (Comment, DM)</td>
									<td>
										<i className='fa-solid fa-check'></i>
									</td>
									<td>
										<i className='fa-solid fa-check'></i>
									</td>
									<td>
										<i className='fa-solid fa-check'></i>
									</td>
									<td>
										<i className='fa-solid fa-check'></i>
									</td>
									<td>
										<i className='fa-solid fa-check'></i>
									</td>
								</tr>
								<tr className='pricing__table-row'>
									<td>Page365 store (Website)</td>
									<td>
										<i className='fa-solid fa-check'></i>
									</td>
									<td>
										<i className='fa-solid fa-check'></i>
									</td>
									<td>
										<i className='fa-solid fa-check'></i>
									</td>
									<td>
										<i className='fa-solid fa-check'></i>
									</td>
									<td>
										<i className='fa-solid fa-check'></i>
									</td>
								</tr>
								<tr className='pricing__table-row'>
									<td>Mobile app</td>
									<td>
										<i className='fa-solid fa-check'></i>
									</td>
									<td>
										<i className='fa-solid fa-check'></i>
									</td>
									<td>
										<i className='fa-solid fa-check'></i>
									</td>
									<td>
										<i className='fa-solid fa-check'></i>
									</td>
									<td>
										<i className='fa-solid fa-check'></i>
									</td>
								</tr>
								<tr className='pricing__table-row'>
									<td>Chat manager</td>
									<td>
										<i className='fa-solid fa-check'></i>
									</td>
									<td>
										<i className='fa-solid fa-check'></i>
									</td>
									<td>
										<i className='fa-solid fa-check'></i>
									</td>
									<td>
										<i className='fa-solid fa-check'></i>
									</td>
									<td>
										<i className='fa-solid fa-check'></i>
									</td>
								</tr>
								<tr className='pricing__table-row'>
									<td>Chat category</td>
									<td>
										<i className='fa-solid fa-check'></i>
									</td>
									<td>
										<i className='fa-solid fa-check'></i>
									</td>
									<td>
										<i className='fa-solid fa-check'></i>
									</td>
									<td>
										<i className='fa-solid fa-check'></i>
									</td>
									<td>
										<i className='fa-solid fa-check'></i>
									</td>
								</tr>
								<tr className='pricing__table-row'>
									<td>Auto-reply (FAQ)</td>
									<td>
										<i className='fa-solid fa-check'></i>
									</td>
									<td>
										<i className='fa-solid fa-times'></i>
									</td>
									<td>
										<i className='fa-solid fa-check'></i>
									</td>
									<td>
										<i className='fa-solid fa-check'></i>
									</td>
									<td>
										<i className='fa-solid fa-check'></i>
									</td>
								</tr>
							</tbody>
						</table>
					)}
				</div>
			</div>
			<Faq />
		</>
	)
}

export default Pricing
