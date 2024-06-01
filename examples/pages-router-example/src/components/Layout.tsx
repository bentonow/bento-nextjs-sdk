import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Container } from './Container'
// TODO: Import from npm when the package is published
import { BentoLegacyAnalytics } from '../../../../dist/esm/analytics/legacy'

export function Layout({
  children,
  showFooter = true,
}: {
  children: React.ReactNode
  showFooter?: boolean
}) {
  return (
    <div className="flex min-h-screen flex-col">
      <BentoLegacyAnalytics
        siteUuid={process.env.NEXT_PUBLIC_BENTO_SITE_ID!}
        userEmail={''}
      />
      <Header />
      <Container className="relative mx-auto h-full w-full max-w-lg flex-grow">
        <main className="h-full rounded">{children}</main>
      </Container>
      {showFooter && <Footer />}
    </div>
  )
}
