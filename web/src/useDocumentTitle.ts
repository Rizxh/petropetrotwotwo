import { useEffect } from 'react'

/** Sets <title> while the page is mounted and restores the previous one on leave. */
export function useDocumentTitle(title: string) {
  useEffect(() => {
    const previous = document.title
    document.title = title
    return () => {
      document.title = previous
    }
  }, [title])
}
