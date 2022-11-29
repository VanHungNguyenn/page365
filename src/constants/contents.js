import feature1 from '~/images/feature1.png'
import feature2 from '~/images/feature2.png'
import feature3 from '~/images/feature3.png'

import pricing1 from '~/images/pricing1.png'
import pricing2 from '~/images/pricing2.png'
import pricing3 from '~/images/pricing3.png'
import pricing4 from '~/images/pricing4.png'
import pricing5 from '~/images/pricing5.png'

const featureContentList = [
	{
		img: feature1,
		title: 'Free Online Store',
		desc: 'Auto-generated online stores in a few clicks. Transfers your Facebook page and Instagram into a clean and beautiful storefront with the Facebook chat widget embedded.',
		link: '',
	},
	{
		img: feature2,
		title: 'Online bill',
		desc: 'Facilitate transactions from start to finish with a system that keeps all transactions recorded, manages updates, and posts notifications on product details, prices, payment information, and delivery details.',
		link: '',
	},
	{
		img: feature3,
		title: 'Facebook Live selling',
		desc: 'Automatically create order when customers type MINE and product code during. Not bother during  Facebook Live sell. Connect to stock system and notify customers when product is run out',
		link: '',
	},
]

const statisticContentList = [
	{
		title: 'Updated Users Count',
		number: '563K',
		desc: 'Users in Southeast Asia',
	},
	{
		title: 'Messages',
		number: '424M',
		desc: 'Messages sent from Page365s to Messenger, Instagram DM, Line Official Account',
	},
	{
		title: 'Online Bills',
		number: '36.9M',
		desc: 'Order Invoices made by Businesses through Page365s',
	},
]

const pricingContentList = [
	{
		img: pricing1,
		title: 'Free',
		price: '0',
		desc: 'All basic functions for FB and IG sellers',
		features: [
			'1 admin',
			'20 orders/month',
			'Online bill',
			'Inventory management',
		],
	},
	{
		img: pricing2,
		title: 'Solo',
		price: '690',
		desc: 'Best for small growing online sellers',
		features: [
			'2 admin',
			'800 orders/month',
			'Online billing',
			'Inventory management',
			'Manage FB comments',
			'Auto MINE invoicing for Photo Post, Messenger, & IG DM',
			'Broadcasting system',
		],
	},
	{
		img: pricing3,
		title: 'Pro',
		price: '1,290',
		desc: 'Best for live sellers, professional sellers',
		features: [
			'4 admins',
			'2,000 orders/month',
			'Improve Facebook Ads',
			'Inventory management',
			'Auto MINE invoicing for All FB/IG Post, Messenger, IG DM & LIVE',
			'Broadcasting system',
		],
	},
	{
		img: pricing4,
		title: 'ProLive',
		price: '2,990',
		desc: 'Best for professional online live sellers',
		features: [
			'8 admins',
			'8,000 orders/month',
			'Improve Facebook Ads',
			'Manage Admin',
			'Online billing',
			'Inventory management',
			'Auto MINE invoicing for All FB/IG Post, Messenger, IG DM & LIVE',
			'Export every report',
			'Broadcasting system',
		],
	},
	{
		img: pricing5,
		title: 'SME',
		price: '4,790',
		desc: 'Best for small and medium enterprise',
		features: [
			'15 admins',
			'20,000 orders/month',
			'Improve Facebook Ads',
			'Manage Admin',
			'Online billing',
			'Inventory management',
			'Auto MINE invoicing for All FB/IG Post, Messenger, IG DM & LIVE',
			'Export every report',
			'Unli-Broadcasting',
			'Private server/domain',
		],
	},
]

export { featureContentList, statisticContentList, pricingContentList }
