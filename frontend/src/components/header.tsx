import HamburgerButton from './hamburger-button';
function Header() {
	return (
		<header id='header'>
			<HamburgerButton onClick={() => {
                document.getElementById('navbar')?.toggleAttribute('data-show')
            }}></HamburgerButton>
		</header>
	)
}

export default Header
