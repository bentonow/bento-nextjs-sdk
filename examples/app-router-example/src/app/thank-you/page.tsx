import { Container } from '@/components/Container'

export default function AboutPage() {
  return (
    <div className="relative py-20 sm:pb-24 sm:pt-36">
      <Container className="relative">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Thanks for signing up! 🎉
          </h2>
          <p className="mt-4 text-lg tracking-tight text-gray-300">
            Check your inbox for an email to confirm your subscription.
          </p>
        </div>
      </Container>
    </div>
  )
}
