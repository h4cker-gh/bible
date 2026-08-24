import { useState } from 'react'

type ToggleButtonProps = {
	initialActive?: boolean
	onActiveChange?: (active: boolean) => void
}

export default function ToggleButton({
	initialActive = true,
	onActiveChange = () => {},
}: ToggleButtonProps) {
	const [buttonActive, setButtonActive] = useState(initialActive)

	function handleClick(btn: HTMLButtonElement) {
		const nextActive = !buttonActive
		btn.toggleAttribute('data-active', nextActive)

		setButtonActive(nextActive)
		onActiveChange(nextActive)
	}

	return (
		<button
			className='toggle-button'
			onClick={(event) => handleClick(event.currentTarget)}>
			{buttonActive ? 'On' : 'Off'}
		</button>
	)
}
