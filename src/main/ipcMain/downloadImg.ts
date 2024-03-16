import { IpcMainEvent, dialog, ipcMain } from 'electron'
import { downFile } from '../uitl'

ipcMain.on('downloadImg', async (_event: IpcMainEvent, url: string) => {
  const fileName = url.substring(url.lastIndexOf('/') + 1)
  const res = await dialog.showSaveDialog({
    title: '保存图片',
    message: 'smlz软件',
    defaultPath: fileName,
    properties: []
  })
  if (res.canceled === false && res.filePath) downFile(url, res.filePath)
})
