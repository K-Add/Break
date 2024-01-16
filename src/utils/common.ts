import { is } from '@electron-toolkit/utils'
import { join } from 'path'
import { BrowserWindow } from 'electron'

export const resolveUrlOrFile = (win: BrowserWindow, address: string): void => {
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    win.loadURL(`${process.env['ELECTRON_RENDERER_URL']}#${address}`)
  } else {
    win.loadFile(join(__dirname, '../renderer/index.html'), {
      hash: address
    })
  }
}
