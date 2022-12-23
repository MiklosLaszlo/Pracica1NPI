const { app, BrowserWindow } = require('electron');

const createWindow = () => {
	const win = new BrowserWindow({width: 1024,height: 720})
	//win.setMenu(null)

	win.loadFile('main.html')
}




app.whenReady().then(() => {
	createWindow()

	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) createWindow()
	})
})

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit()
})