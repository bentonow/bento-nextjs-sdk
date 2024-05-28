'use client'

import { registerUser } from '@/app/actions'
import { useFormState } from 'react-dom'
import { SubmitButton } from './SubmitButton'

const initialState = {
  message: '',
}

export function RegistrationForm() {
  const [state, formAction] = useFormState(registerUser, initialState)

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
      <form action={formAction} className="mt-6">
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
                className="focus:ring-primary-500 block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
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
                className="focus:ring-primary-500 block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <SubmitButton label="Subscribe" pendingLabel="Submitting…" />
          {state.message && (
            <p className={'mt-2 text-center text-red-600'}>{state.message}</p>
          )}
        </div>
      </form>
    </div>
  )
}
