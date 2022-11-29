import React from 'react'
import './Review.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper'

const Review = () => {
	return (
		<div className='review'>
			<div className='wrapper review__wrapper'>
				<div className='review__title title'>Review from our users</div>
				<div className='review__list'>
					<Swiper
						spaceBetween={20}
						autoplay={{
							delay: 3000,
						}}
						pagination={{
							clickable: true,
						}}
						slidesPerView={1}
						breakpoints={{
							900: {
								slidesPerView: 2,
								spaceBetween: 20,
							},
						}}
						loop={true}
						navigation={true}
						modules={[Autoplay, Pagination, Navigation]}
						className='review__slider'
					>
						<SwiperSlide>
							<div className='review__item'>
								<div className='review__item-quote'>
									“Hello Chris..I'm actually using it for
									invoicing purposes and I really like the app
									so much. It is very helpful to my small
									business . I like the way I can create
									invoice in my inbox and send to them right
									away. Very convenient. I also like the way.
								</div>
								<div className='review__item-author'>
									<div className='review__item-author-image'>
										<img
											src='https://picsum.photos/200'
											alt='review-1'
										/>
									</div>
									<div className='review__item-author-name'>
										<div className='review__item-author-name-title'>
											Julai fashion boutique
										</div>
										<div className='review__item-author-name-desc'>
											Clothing brand
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='review__item'>
								<div className='review__item-quote'>
									“As an online business owner, doing the
									inventory is tough. When I discovered
									Page365 system, the all-in-one system sales
									invoicing and inventory, it made our
									business so much easier to manage. This was
									a good find and the rate is easy on the
									pockets too.”
								</div>
								<div className='review__item-author'>
									<div className='review__item-author-image'>
										<img
											src='https://picsum.photos/200'
											alt='review-1'
										/>
									</div>
									<div className='review__item-author-name'>
										<div className='review__item-author-name-title'>
											G&A Hip Clothings
										</div>
										<div className='review__item-author-name-desc'>
											Clothings brand
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='review__item'>
								<div className='review__item-quote'>
									"Yung problem po naming is yung storage ng
									data ng customers such as delivery details.
									Masyadang matrabaho po. So dahil dun sa
									storefront and COMPLETE ordering procedure
									ni Page365, mas less mistake, was less
									effort sa order procedure"
								</div>
								<div className='review__item-author'>
									<div className='review__item-author-image'>
										<img
											src='https://picsum.photos/200'
											alt='review-1'
										/>
									</div>
									<div className='review__item-author-name'>
										<div className='review__item-author-name-title'>
											Kimchi Kingdom
										</div>
										<div className='review__item-author-name-desc'>
											Korean restaurant
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className='review__item'>
								<div className='review__item-quote'>
									“I'm a single mom of 2, OFW and doing online
									selling sa pints kahit malayo. Page365
									really helped me a lot lalo na sa page ko.
									24/7 ang work ko halos walangtime pero dahil
									kasama ko ang page365 sa pag sagot sa mga
									inquiry kahit po sobrang busy ako sa work”
								</div>
								<div className='review__item-author'>
									<div className='review__item-author-image'>
										<img
											src='https://picsum.photos/200'
											alt='review-1'
										/>
									</div>
									<div className='review__item-author-name'>
										<div className='review__item-author-name-title'>
											She is Online PH
										</div>
										<div className='review__item-author-name-desc'>
											Woman's clothing store
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</div>
		</div>
	)
}

export default Review
