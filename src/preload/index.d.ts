import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      setWallpaper: (url: string, path: string) => void
      downloadImg: (url: string) => void
      saveDirectory: () => Promise<string>
      checkeDirectory: (path: string) => Promise<boolean>
    }
  }
}
