import React from 'react'
import './Trusted.scss'
import { meta, trustedList } from '~/constants/images'

const Trusted = () => {
	return (
		<div className='trusted'>
			<div className='wrapper trusted__wrapper'>
				<div className='trusted__title'>
					The official Facebook Business Partner <br />
					Trusted by over 500,000 online sellers
				</div>
				<div className='trusted__banner'>
					<img src={meta} alt='trusted banner' />
				</div>
				<div className='trusted__logos'>
					{trustedList.map((item, index) => (
						<div className='trusted__logo' key={index}>
							<img src={item} alt='trusted logo' />
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Trusted
