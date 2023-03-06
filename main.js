const { app, BrowserWindow, ipcMain, autoUpdater, dialog  } = require('electron');
require('update-electron-app')();

// include the Node.js 'path' module at the top of your file

const path = require('path')

// set the feed URL to your deployment URL

const server = "https://hazel-vercel.vercel.app/"
const url = `${server}/update/${process.platform}/${app.getVersion()}`

autoUpdater.setFeedURL({ url })

// SetInterval to check for updates every 60 seconds

setInterval(() => {
  console.log("Checking for updates");
  autoUpdater.checkForUpdates()
}, 60000)

// modify your existing createWindow() function

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  ipcMain.handle('ping', () => 'pong') // Ajouté pour la fonction ping dans renderer.js

  win.loadFile('index.html') 
}


  app.whenReady().then(() => {
    createWindow()
  })