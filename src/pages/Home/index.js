import React from 'react'
import Banner from '~/components/Layout/Banner'
import Feature from '~/components/Layout/Feature'
import Statistic from '~/components/Layout/Statistic'
import Trusted from '~/components/Layout/Trusted'
import Review from '~/components/Layout/Review'
import Faq from '~/components/Layout/Faq'
import Business from '~/components/Layout/Business'

const Home = () => {
	return (
		<>
			<Banner />
			<Trusted />
			<Feature />
			<Review />
			<Statistic />
			<Business />
			<Faq />
		</>
	)
}

export default Home
