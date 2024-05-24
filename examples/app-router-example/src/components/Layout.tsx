'use client'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Container } from './Container'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export function Layout({
  children,
  showFooter = true,
}: {
  children: React.ReactNode
  showFooter?: boolean
}) {
  const pathname = usePathname

  useEffect(() => {
    setTimeout(() => {
      if (window.bento !== undefined) {
        // Note: if the user is identified or logged in, you can identify their page view by running.
        // Example:
        // if (user) {
        //  window.bento.identify(email);
        // }
        window.bento.view()
      }
    }, 0)
  }, [pathname])

  return (
    <>
      <Header />
      <Container className="h-full w-full">
        <main className="h-full rounded border border-gray-800">
          {children}
        </main>
      </Container>
      {showFooter && <Footer />}
    </>
  )
}
