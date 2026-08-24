import { createBrowserRouter } from 'react-router'

import App from './app'
import BiblePage from '@features/bible/bible-page'
import PluginsPage from '@features/plugins/plugins-page'
import HomePage from '@features/home/home-page';
import SettingsPage from '@features/settings/settings-page';

export const router = createBrowserRouter([
	{
		path: '/',
		Component: App,
		children: [
			{ path: '/', Component: HomePage },
			{ path: '/bible', Component: BiblePage },
			{ path: '/plugins', Component: PluginsPage },
			{ path: '/settings', Component: SettingsPage },
		],
	},
])
