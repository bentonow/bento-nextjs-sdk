'use client'

import React from 'react'
import Script from 'next/script'

declare global {
  interface Window {
    bento?: {
      view: () => void
    }
  }
}

type BentoAnalyticsProps = {
  siteUuid: string
}

export function BentoAnalytics({ siteUuid }: BentoAnalyticsProps) {
  // TODO: Add tracking useEffect
  // TODO: Add prop to handle tracking user
  // TODO: Handle pages vs. app router

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
