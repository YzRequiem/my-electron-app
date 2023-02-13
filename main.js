const { app, BrowserWindow, ipcMain } = require('electron');

// include the Node.js 'path' module at the top of your file
const path = require('path')

// modify your existing createWindow() function
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  ipcMain.handle('ping', () => 'pong')

  win.loadFile('index.html')
}
// ...



  app.whenReady().then(() => {
    createWindow()
  })