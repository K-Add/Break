import { BrowserWindow } from 'electron'
import { join } from 'path'
import { resolveUrlOrFile } from '../utils/common'

export function createInitWindow(): BrowserWindow {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })
  resolveUrlOrFile(win, '/init')
  return win
}

export function createRestWindow(): BrowserWindow {
  const win = new BrowserWindow({
    fullscreen: true,
    alwaysOnTop: true,
    vibrancy: 'fullscreen-ui',
    webPreferences: {
      devTools: false,
      nodeIntegration: true,
      sandbox: false,
      preload: join(__dirname, '../preload/index.js')
    }
  })
  resolveUrlOrFile(win, '/rest')
  return win
}

export function createSettingWindows(): BrowserWindow {
  const win = new BrowserWindow({
    width: 400,
    maximizable: false,
    minimizable: false,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      sandbox: false,
      preload: join(__dirname, '../preload/index.js')
    }
  })
  resolveUrlOrFile(win, '/setting')
  return win
}
