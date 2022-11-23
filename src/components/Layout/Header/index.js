import React, { useState, useEffect } from 'react'
import './Header.scss'
import { Link, NavLink } from 'react-router-dom'

import { logo } from '~/constants/images'

const Header = () => {
	const [toggleMenu, setToggleMenu] = useState(false)

	const handleToggleMenu = () => {
		setToggleMenu(!toggleMenu)
	}

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth > 1024) {
				setToggleMenu(false)
			}
		}

		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])

	return (
		<header className='header'>
			<div className='wrapper header__wrapper'>
				<Link to='/' className='header__logo'>
					<img src={logo} alt='Logo' />
				</Link>
				<div className={`header__menu ${toggleMenu ? 'active' : ''}`}>
					<ul className='header__nav-list'>
						<li className='header__nav-item'>
							<NavLink to='/' className='header__nav-link'>
								Home
							</NavLink>
						</li>
						{/* <li className='header__nav-item'>
							<div className='header__nav-link'>Feature</div>
							<ul className='header__subnav-list'>
								<li className='header__subnav-item'>
									<NavLink
										to='/feature/feature-1'
										className='header__subnav-link'
									>
										Feature 1
									</NavLink>
								</li>
								<li className='header__subnav-item'>
									<NavLink
										to='/feature/feature-2'
										className='header__subnav-link'
									>
										Feature 2
									</NavLink>
								</li>
								<li className='header__subnav-item'>
									<NavLink
										to='/feature/feature-3'
										className='header__subnav-link'
									>
										Feature 3
									</NavLink>
								</li>
								<li className='header__subnav-item'>
									<NavLink
										to='/feature/feature-4'
										className='header__subnav-link'
									>
										Feature 4
									</NavLink>
								</li>
							</ul>
						</li> */}
						<li className='header__nav-item'>
							<NavLink to='/pricing' className='header__nav-link'>
								Pricing
							</NavLink>
						</li>
						<li className='header__nav-item'>
							<NavLink to='/privacy' className='header__nav-link'>
								Privacy
							</NavLink>
						</li>
						{/* <li className='header__nav-item'>
							<NavLink to='/blogs' className='header__nav-link'>
								Blogs
							</NavLink>
						</li> */}
						<li className='header__nav-item'>
							<NavLink to='/Contact' className='header__nav-link'>
								Contact
							</NavLink>
						</li>
					</ul>
					<div className='header__buttons'>
						<button className='button  button--transparent header__buttons-login'>
							Login
						</button>
						<button className='button '>Start here</button>
					</div>
				</div>
				<div className='header__bar' onClick={handleToggleMenu}>
					{toggleMenu ? (
						// font awesome times
						<i className='fas fa-times'></i>
					) : (
						// font awesome bars
						<i className='fa-solid fa-bars'></i>
					)}
				</div>
			</div>
		</header>
	)
}

export default Header
