import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import DefaultLayout from '~/components/DefaultLayout'

import Home from '~/pages/Home'
import Privacy from '~/pages/Privacy'
import Pricing from '~/pages/Pricing'
import Contact from '~/pages/Contact'
import Page404 from '~/pages/Page404'

function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/' element={<DefaultLayout />}>
						<Route path='/' element={<Home />} />
						<Route path='/privacy' element={<Privacy />} />
						<Route path='/pricing' element={<Pricing />} />
						<Route path='/contact' element={<Contact />} />
						<Route path='*' element={<Page404 />} />
					</Route>
					{/* 404 */}
				</Routes>
			</Router>
		</div>
	)
}

export default App
