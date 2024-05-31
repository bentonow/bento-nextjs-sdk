'use client'

import React, { useEffect } from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router'

declare global {
  interface Window {
    bento?: {
      view: () => void
      identify: (email: string) => void
    }
  }
}

type BentoLegacyAnalyticsProps = {
  siteUuid: string
  userEmail?: string
}

export function BentoLegacyAnalytics({
  siteUuid,
  userEmail,
}: BentoLegacyAnalyticsProps) {
  const router = useRouter()

  useEffect(() => {
    const trackPageView = () => {
      if (window.bento !== undefined) {
        if (userEmail) {
          console.log('User:', userEmail)
          window.bento.identify(userEmail)
        }
        console.log('Page view', router.pathname)
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

  return (
    <>
      <Script
        id="bento-script"
        src={`https://fast.bentonow.com?site_uuid=${siteUuid}`}
        strategy="afterInteractive"
      />
    </>
  )
}
