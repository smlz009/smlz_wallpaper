import { IpcMainEvent, IpcMainInvokeEvent, dialog, ipcMain } from 'electron'
import wallpaper from 'wallpaper'
import { resolve } from 'path'
import fs from 'fs'
import { downFile } from '../uitl'

//设置壁纸
ipcMain.on('setWallpaper', async (_event: IpcMainEvent, url: string, path: string) => {
  const localFile = resolve(path, url.split('/').pop()!)
  const file = await downFile(url, localFile)
  wallpaper.set(file, { screen: 'all', scale: 'auto' })
})

//设置目录
ipcMain.handle('saveDirectory', async () => {
  const res = await dialog.showOpenDialog({
    title: '选择保存目录',
    properties: ['openDirectory', 'createDirectory']
  })
  if (!res.canceled && res.filePaths.length > 0) {
    return res.filePaths[0]
  }
  return undefined
})

//检查目录
ipcMain.handle('checkeDirectory', (_event: IpcMainInvokeEvent, path: string) => {
  return fs.existsSync(path)
})
