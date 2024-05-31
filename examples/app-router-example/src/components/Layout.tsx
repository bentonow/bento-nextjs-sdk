'use client'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Container } from './Container'

export function Layout({
  children,
  showFooter = true,
}: {
  children: React.ReactNode
  showFooter?: boolean
}) {
  return (
    <>
      <Header />
      <Container className="relative mx-auto h-full w-full max-w-lg">
        <main className="h-full rounded">{children}</main>
      </Container>
      {showFooter && <Footer />}
    </>
  )
}
