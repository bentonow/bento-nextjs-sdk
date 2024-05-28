'use server'

import { Analytics } from '@bentonow/bento-node-sdk'
import { redirect } from 'next/navigation'

const bento = new Analytics({
  authentication: {
    publishableKey: process.env.BENTO_PUBLISHABLE_KEY!,
    secretKey: process.env.BENTO_SECRET_KEY!,
  },
  logErrors: true,
  siteUuid: process.env.NEXT_PUBLIC_BENTO_SITE_ID!,
})

export async function registerUser(
  _prevState: { message: string },
  formData: FormData,
) {
  const subscriber = {
    firstName: formData.get('first-name') as string,
    email: formData.get('email') as string,
  }

  if (!subscriber.email) {
    return { message: 'Please enter a valid email' }
  }

  const trackedSuccessfully = await bento.V1.track({
    email: subscriber.email,
    type: '$bentoConf.subscribe',
    fields: {
      firstName: subscriber.firstName,
    },
  })

  if (!trackedSuccessfully) {
    return { message: 'An error occurred. Please try again.' }
  }

  await bento.V1.Batch.sendTransactionalEmails({
    emails: [
      {
        to: subscriber.email,
        from: process.env.BENTO_EMAIL_FROM!,
        subject: "You're signed up for BentoConf updates!",
        html_body: '<p>Thanks for subscribing to updates about BentoConf</p>',
        transactional: true,
      },
    ],
  })

  redirect('thank-you')
}
