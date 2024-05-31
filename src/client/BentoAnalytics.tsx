'use client'

import React, { useEffect } from 'react'
import Script from 'next/script'
import { usePathname } from 'next/navigation'

declare global {
  interface Window {
    bento?: {
      view: () => void
      identify: (email: string) => void
    }
  }
}

type BentoAnalyticsProps = {
  siteUuid: string
  userEmail?: string
}

export function BentoAnalytics({ siteUuid, userEmail }: BentoAnalyticsProps) {
  const pathname = usePathname()

  useEffect(() => {
    setTimeout(() => {
      if (window.bento !== undefined) {
        if (userEmail) {
          window.bento.identify(userEmail)
        }
        window.bento.view()
      }
    }, 0)
  }, [pathname, userEmail])

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
