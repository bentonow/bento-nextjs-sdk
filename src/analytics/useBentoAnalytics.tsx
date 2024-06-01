import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export function useBentoAnalytics(userEmail?: string) {
  const pathname = usePathname()

  useEffect(() => {
    const trackPageView = () => {
      if (window.bento !== undefined) {
        if (userEmail) {
          window.bento.identify(userEmail)
        }
        window.bento.view()
      }
    }

    setTimeout(trackPageView, 0)
  }, [pathname, userEmail])
}
