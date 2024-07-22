'use client'

import React from 'react'
import Script from 'next/script'
import { useBentoLegacyAnalytics } from './useBentoLegacyAnalytics'

declare global {
  interface Window {
    bento?: {
      view: () => void
      identify: (email: string) => void
      track: (event: string, data?: Record<string, any>) => void
      tag: (tag: string) => void
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
  useBentoLegacyAnalytics(userEmail)

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
