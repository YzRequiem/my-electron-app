module.exports = {
  publishers: [
    {
      name: '@electron-forge/publisher-github',
      config: {
        repository: {
          owner: 'YzRequiem',
          name: 'my-electron-app',
        },
        prerelease: false,
        draft: true,
      },
    },
  ],
  packagerConfig: {},
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      
      config: {
        loadingGif: 'giphyy.gif',
        authors: 'Alice and Bob',
        description: 'An example Electron app',
        noMsi: false,
      },
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {
        

      },
    },
    {
      name: '@electron-forge/maker-dmg',
      platforms: ['darwin'],
      config: {
        format: 'ULMO', 
        debug: true,
      }
    }
  ],
};
