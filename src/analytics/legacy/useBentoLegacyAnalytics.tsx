import { useRouter } from 'next/router'
import { useEffect } from 'react'

export function useBentoLegacyAnalytics(userEmail?: string) {
  const router = useRouter()

  useEffect(() => {
    const trackPageView = () => {
      if (window.bento !== undefined) {
        if (userEmail) {
          window.bento.identify(userEmail)
        }
        window.bento.view()
      }
    }

    const onRouteChangeComplete = () => {
      setTimeout(trackPageView, 0)
    }

    router.events.on('routeChangeComplete', onRouteChangeComplete)

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [router, userEmail])
}
