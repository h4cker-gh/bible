import ConfigCard from './components/config-card'
export default function SettingsPage() {
	return (
		<>
			<h1>Configurações</h1>

			<ConfigCard name='Tema claro' onActiveChange={(active) => {
                document.querySelector('html')?.removeAttribute('data-theme')
                document.querySelector('html')?.setAttribute('data-theme', active ? 'light' : 'dark')
            }}></ConfigCard>
		</>
	)
}
