import { Container } from '@/components/Container'

export function Footer() {
  return (
    <footer className="relative">
      <Container className="flex w-full items-center justify-between py-6">
        <a
          href="https://bentonow.com/"
          className="flex  items-center gap-1.5 text-lg font-semibold text-white"
        >
          <span>Made by Bento</span>
        </a>
      </Container>
    </footer>
  )
}
