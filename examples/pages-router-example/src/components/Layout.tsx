import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Container } from './Container'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export function Layout({
  children,
  showFooter = true,
}: {
  children: React.ReactNode
  showFooter?: boolean
}) {
  const router = useRouter()

  useEffect(() => {
    const onRouteChangeComplete = () => {
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
    }

    router.events.on('routeChangeComplete', onRouteChangeComplete)

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete)
    }
  }, [router.events])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Container className="relative mx-auto h-full w-full max-w-lg flex-grow">
        <main className="h-full rounded">{children}</main>
      </Container>
      {showFooter && <Footer />}
    </div>
  )
}
