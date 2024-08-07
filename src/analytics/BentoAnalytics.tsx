'use client'

import React from 'react'
import Script from 'next/script'
import { useBentoAnalytics } from './useBentoAnalytics'

type BentoAnalyticsProps = {
  siteUuid: string
  userEmail?: string
}

export function BentoAnalytics({ siteUuid, userEmail }: BentoAnalyticsProps) {
  useBentoAnalytics(userEmail)

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
