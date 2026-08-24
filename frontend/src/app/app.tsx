import '@styles/index.css'
import Footer from '@components/footer'
import Header from '@components/header'
import Navbar from '@components/navbar'
import { Outlet } from 'react-router-dom'

function App() {
	return (
		<>
			<Header></Header>
			<Navbar></Navbar>
			<main>
				<Outlet />
			</main>
			<Footer></Footer>
		</>
	)
}

export default App
