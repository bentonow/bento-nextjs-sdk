'use client'

import { Container } from '@/components/Container'
import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathname = usePathname()

  return (
    <header className="relative">
      <Container className="flex w-full items-center justify-between py-6">
        <Link
          href="/"
          className="flex  items-center gap-1.5 text-lg font-semibold text-white"
        >
          <span className="-mb-1">🍱</span>
          <span>BentoConf</span>
        </Link>
        <div className="flex gap-6">
          {[
            { href: '/', title: 'Home' },
            { href: '/about', title: 'About' },
            { href: '/sign-up', title: 'Sign up' },
          ].map(({ href, title }) => (
            <Link
              key={href}
              href={href}
              className={clsx(
                'text-sm',
                pathname === href
                  ? 'text-white'
                  : 'text-gray-400 hover:text-white',
              )}
            >
              {title}
            </Link>
          ))}
        </div>
      </Container>
    </header>
  )
}
