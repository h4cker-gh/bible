import CloseButton from './close-button'
import { Link } from 'react-router-dom'

function Navbar() {
	return (
		<nav id='navbar'>
			<CloseButton
				onClick={() => {
					document
						.getElementById('navbar')
						?.toggleAttribute('data-show')
				}}></CloseButton>
			<Link to='/'>Home</Link>
			<Link to='/bible'>Bíblia</Link>
			<Link to='/plugins'>Plugins</Link>
			<Link to='/settings'>Configurações</Link>
		</nav>
	)
}

export default Navbar
