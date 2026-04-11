import { useContext, useEffect } from 'react'
import { OSC, osc } from '../termio/osc.js'
import { TerminalWriteContext } from '../useTerminalNotification.js'

/**
 * Declaratively set the terminal tab/window title.
 *
 * Pass a string to set the title. Pass `null` to opt out — the hook
 * becomes a no-op and leaves the terminal title untouched.
 *
 * On Windows, uses `process.title` (classic conhost doesn't support OSC).
 * Elsewhere, writes OSC 0 (set title+icon) via Ink's stdout.
 */
export function useTerminalTitle(title: string | null): void {
  const writeRaw = useContext(TerminalWriteContext)

  useEffect(() => {
    if (title === null || !writeRaw) return

    if (process.platform === 'win32') {
      process.title = title
    } else {
      writeRaw(osc(OSC.SET_TITLE_AND_ICON, title))
    }
  }, [title, writeRaw])
}
