const { app, BrowserWindow } = require('electron');

// Keep a global reference of the window object, if you don't, the window will 
// be closed automatically when the JavaScript object is garbage collected.
const createWindow = () => {
    const url = require("url");
    const path = require("path");

    const win = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences: {
        nodeIntegration: true
      }
    })
  
    //win.loadFile('/dist/electron-app-angular/index.html')

    win.loadURL(
      url.format({
        pathname: path.join(__dirname, '/dist/electron-app-angular/index.html'),
        protocol: "file:",
        slashes: true
      })
    );

    // Open the DevTools.
    win.webContents.openDevTools()
}

// Create myWindow, load the rest of the app
app.whenReady().then(() => {
    createWindow();

    // Linux and Windows
    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') app.quit()
    });
});

// macOS
// app.whenReady().then(() => {
//     createWindow()
  
//     app.on('activate', () => {
//       if (BrowserWindow.getAllWindows().length === 0) createWindow()
//     })
// });