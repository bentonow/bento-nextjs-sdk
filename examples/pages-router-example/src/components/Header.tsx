import { Container } from '@/components/Container'
import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'

export function Header() {
  const router = useRouter()

  return (
    <header className="relative">
      <Container className="flex w-full items-center justify-between py-6">
        <Link href="/">
          <span className="flex cursor-pointer items-center gap-1.5 text-lg font-semibold text-white">
            <span className="-mb-1">🍱</span>
            <span>BentoConf</span>
          </span>
        </Link>
        <div className="flex gap-6">
          {[
            { href: '/', title: 'Home' },
            { href: '/about', title: 'About' },
            { href: '/sign-up', title: 'Sign up' },
          ].map(({ href, title }) => (
            <Link key={href} href={href}>
              <span
                className={clsx(
                  'cursor-pointer text-sm',
                  router.pathname === href
                    ? 'text-white'
                    : 'text-gray-400 hover:text-white',
                )}
              >
                {title}
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </header>
  )
}
