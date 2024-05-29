import { useRouter } from 'next/router'
import { useState } from 'react'

export function RegistrationForm() {
  const [status, setStatus] = useState('default')
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
  })
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (status === 'loading') return
    setStatus('loading')

    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    const json = await res.json()
    if (json.error) {
      setError(json.error)
      setStatus('error')
    } else {
      router.push('/thank-you')
    }
  }

  return (
    <div>
      <div>
        <h2 className="text-2xl font-bold tracking-tight text-white">
          Subscribe to updates
        </h2>
        <p className="mt-4 text-lg tracking-tight text-gray-300">
          Get notified of conference updates and a chance to buy tickets early.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mt-6">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-semibold leading-6 text-white"
            >
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.currentTarget.value })
                }
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-white"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="given-name"
                required
                className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.currentTarget.value })
                }
              />
            </div>
          </div>
          <button
            type="submit"
            className="rounded-md bg-primary-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500"
            disabled={status === 'loading'}
          >
            {status === 'loading' ? 'Submitting…' : 'Subscribe'}
          </button>
          {error && <p className={'mt-2 text-center text-red-600'}>{error}</p>}
        </div>
      </form>
    </div>
  )
}
