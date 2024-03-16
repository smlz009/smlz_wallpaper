import { dialog } from 'electron'
import fetch from 'node-fetch'
import { pipeline } from 'stream'
import { promisify } from 'util'
import fs from 'fs'

const downFile = async (url: string, localFile: string) => {
  const streamPipeline = promisify(pipeline)
  const respone = await fetch(url)

  if (!respone.ok) {
    dialog.showErrorBox('提示', '图片下载失败')
    throw new Error('Failed to download wallpaper')
  }
  await streamPipeline(respone.body!, fs.createWriteStream(localFile))

  return localFile
}

export { downFile }
