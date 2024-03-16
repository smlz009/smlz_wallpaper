import router from '@renderer/router'
import { useConfigStore } from '@renderer/store/useConfigStore'
import { ElMessage } from 'element-plus'

function useWallpaper() {
  const { config } = useConfigStore()
  //设置壁纸
  const setWallpaper = async () => {
    const res = await window.api.checkeDirectory(config.saveDirectory)
    console.log(res)
    if (!res) {
      ElMessage.error('请先设置保存路径')
      return router.push({
        name: 'setting'
      })
    }
    window.api.setWallpaper(config.url, config.saveDirectory)
  }

  //下载壁纸
  const downloadImg = () => {
    window.api.downloadImg(config.url)
  }
  const saveDirectory = async () => {
    const path = await window.api.saveDirectory()
    if (path) {
      config.saveDirectory = path
    }
  }
  return {
    setWallpaper,
    downloadImg,
    saveDirectory
  }
}

export default useWallpaper
