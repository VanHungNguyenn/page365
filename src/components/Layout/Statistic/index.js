import React from 'react'
import './Statistic.scss'
import { statisticContentList } from '~/constants/contents.js'

const Statistics = () => {
	return (
		<div className='statistic'>
			<div className='wrapper statistic__wrapper'>
				<div className='statistic__title title'>Our statistics</div>
				<div className='statistic__list'>
					{statisticContentList.map((item, index) => (
						<div className='statistic__item' key={index}>
							<div className='statistic__item-title'>
								{item.title}
							</div>
							<div className='statistic__item-number'>
								{item.number}
							</div>
							<div className='statistic__item-desc'>
								{item.desc}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Statistics
