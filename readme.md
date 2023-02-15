# install dependencies

npm install --save-dev @electron-forge/cli
npx electron-forge import

npm install --save-dev @electron-forge/publisher-github

npm install update-electron-app

# Build the app

npm run make

# Run the app

npm start

# Package the app

npm run package

# auto update

npm run publish

--SET TOKEN--
https://github.com/electron/forge/issues/2820

## Connect to the server building

--TUTORIAL-- 

https://github.com/vercel/hazel

```js
const { app, autoUpdater } = require('electron')

const server = <your-deployment-url>
const url = `${server}/update/${process.platform}/${app.getVersion()}`

autoUpdater.setFeedURL({ url })

```