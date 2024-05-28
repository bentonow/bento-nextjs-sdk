'use client'

import { useFormStatus } from 'react-dom'

export function SubmitButton({
  label,
  pendingLabel,
}: {
  label: string
  pendingLabel: string
}) {
  const { pending } = useFormStatus()

  return (
    <button
      type="submit"
      className="bg-primary-600 hover:bg-primary-400 focus-visible:outline-primary-500 rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
      disabled={pending}
    >
      {pending ? pendingLabel : label}
    </button>
  )
}
