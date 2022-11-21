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
									away. Very convenient”
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
									“Hello Chris..I'm actually using it for
									invoicing purposes and I really like the app
									so much. It is very helpful to my small
									business . I like the way I can create
									invoice in my inbox and send to them right
									away. Very convenient”
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
									“Hello Chris..I'm actually using it for
									invoicing purposes and I really like the app
									so much. It is very helpful to my small
									business . I like the way I can create
									invoice in my inbox and send to them right
									away. Very convenient”
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
									“Hello Chris..I'm actually using it for
									invoicing purposes and I really like the app
									so much. It is very helpful to my small
									business . I like the way I can create
									invoice in my inbox and send to them right
									away. Very convenient”
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
					</Swiper>
				</div>
			</div>
		</div>
	)
}

export default Review
