import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import DefaultLayout from '~/components/DefaultLayout'

import Home from '~/pages/Home'

function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/' element={<DefaultLayout />}>
						<Route path='/' element={<Home />} />
					</Route>
				</Routes>
			</Router>
		</div>
	)
}

export default App
