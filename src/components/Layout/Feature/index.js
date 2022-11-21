import React from 'react'
import './Feature.scss'
import { featureContentList } from '~/constants/contents.js'
import { feature } from '~/constants/images.js'

const Feature = () => {
	return (
		<div className='feature'>
			<div className='wrapper feature__wrapper'>
				<h2 className='feature__heading title'>
					All-in-one for Facebook and Instagram sellers
				</h2>
				<div className='feature__banner'>
					<img src={feature} alt='feature img' />
				</div>
				<div className='feature__title'>
					Facebook chatbot & Instagram integration
				</div>
				<p className='feature__desc'>
					Page365 Chatbot can detect 8 frequency questions from the
					Facebook page comment, Messenger, and Instagram.
				</p>
				<button className='button button--large mb-5'>
					Learn more
				</button>
				<div className='feature__list'>
					{featureContentList.map((item, index) => (
						<div className='feature__item' key={index}>
							<div className='feature__item-image'>
								<img src={item.img} alt='feature item' />
							</div>
							<div className='feature__item-title'>
								{item.title}
							</div>
							<div className='feature__item-desc'>
								{item.desc}
							</div>
							<button className='button feature__item-button'>
								Learn more
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Feature
