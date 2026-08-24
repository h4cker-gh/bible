type HamburgerButtonProps = { onClick: VoidFunction }

function HamburgerButton({ onClick }: HamburgerButtonProps) {
	return (
		<button
			className='hamburger-button'
			onClick={() => {
				onClick()
			}}
			aria-label='Open Menu'>
			<svg
				width='100%'
				height='100%'
				viewBox='0 0 100 100'
				stroke='currentColor'
				strokeWidth='13'
				className='hamburger-icon'>
				<rect x='5' y='15' width='90' height='5' rx='5' />
				<rect x='5' y='50' width='90' height='5' rx='5' />
				<rect x='5' y='85' width='90' height='5' rx='5' />
			</svg>
		</button>
	)
}

export default HamburgerButton
