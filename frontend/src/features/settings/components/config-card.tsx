import ToggleButton from "../../../components/toggle-button";

type ConfigCardProps = {
	name?: string
	onActiveChange?: (active: boolean) => void
}

export default function ConfigCard({
	name = 'Config',
	onActiveChange = () => {},
}: ConfigCardProps) {
	return (
		<div>
			<h2>{name}</h2>

			<ToggleButton onActiveChange={onActiveChange} />
		</div>
	)
}
