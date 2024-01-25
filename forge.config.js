require('dotenv').config();
module.exports = {
	packagerConfig: {
		asar: true,
		prune:true,
		icon:'public/sfdx_gui.icns',
		osxSign: {}, // object must exist even if empty
		osxNotarize: {
			tool: 'notarytool',
			appleId: process.env.APPLE_ID,
			appleIdPassword: process.env.APPLE_PASSWORD,
			teamId: process.env.APPLE_TEAM_ID
		},
		extraResource: [
			"public"
		]
	},
	rebuildConfig: {},
	makers: [
		{
			name: '@electron-forge/maker-zip',
			platforms: ['darwin'],
		}
	],
	plugins: [
		{
			name: '@electron-forge/plugin-auto-unpack-natives',
			config: {}
		}
	],
	publishers: [
		{
		  	name: '@electron-forge/publisher-github',
		  	config: {
				repository: {
						owner: 'grebmann1',
						name: 'sf-toolkit-desktop'
				},
				authToken: process.env.GITHUB_TOKEN,
				prerelease: true
		  	}
		}
	]
};