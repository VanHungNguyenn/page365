import React from 'react'
import image from '~/images/404.png'

const Page404 = () => {
	return (
		<>
			<div
				className='wrapper'
				style={{
					minHeight: '70vh',
					padding: '5rem 0',
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
					className='404-image'
				>
					<img
						style={{
							width: '100%',
							maxWidth: '50rem',
						}}
						src={image}
						alt='404'
					/>
				</div>
				<button className='button'>
					<a href='/'>Go Home</a>
				</button>
			</div>
		</>
	)
}

export default Page404
