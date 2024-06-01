import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import clsx from 'clsx'
import { BentoAnalytics } from '../../../../dist/esm/index'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s - BentoConf',
    default: 'BentoConf by Backpack Internet Pty. Ltd',
  },
  description:
    'Bento is a powerful messaging automation platform created for online businesses — featuring powerful email and SMS marketing automation.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full bg-gray-950 text-white antialiased',
        inter.className,
      )}
    >
      <BentoAnalytics
        siteUuid={process.env.NEXT_PUBLIC_BENTO_SITE_ID!}
        userEmail={''}
      />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🍱</text></svg>"
      />
      <body className="flex min-h-full">
        <div className="flex w-full flex-col">{children}</div>
      </body>
    </html>
  )
}
