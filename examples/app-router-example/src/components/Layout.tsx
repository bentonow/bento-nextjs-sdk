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
      <Container className="h-full w-full">
        <main className="h-full rounded border border-gray-800">
          {children}
        </main>
      </Container>
      {showFooter && <Footer />}
    </>
  )
}
