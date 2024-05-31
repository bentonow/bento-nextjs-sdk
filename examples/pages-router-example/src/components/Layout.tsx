import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Container } from './Container'
import { BentoLegacyAnalytics } from '../../../../dist/client/BentoLegacyAnalytics'

export function Layout({
  children,
  showFooter = true,
}: {
  children: React.ReactNode
  showFooter?: boolean
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <BentoLegacyAnalytics siteUuid={process.env.NEXT_PUBLIC_BENTO_SITE_ID!} />
      <Header />
      <Container className="relative mx-auto h-full w-full max-w-lg flex-grow">
        <main className="h-full rounded">{children}</main>
      </Container>
      {showFooter && <Footer />}
    </div>
  )
}
