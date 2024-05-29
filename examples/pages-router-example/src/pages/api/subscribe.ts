import type { NextApiRequest, NextApiResponse } from 'next'
import { Analytics } from '@bentonow/bento-node-sdk'

const bento = new Analytics({
  authentication: {
    publishableKey: process.env.BENTO_PUBLISHABLE_KEY!,
    secretKey: process.env.BENTO_SECRET_KEY!,
  },
  logErrors: true,
  siteUuid: process.env.NEXT_PUBLIC_BENTO_SITE_ID!,
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { firstName, email } = req.body
  if (!email) {
    return res.status(400).send({ error: 'Please enter a valid email' })
  }

  const trackedSuccessfully = await bento.V1.track({
    email: email,
    type: '$bentoConf.subscribe',
    fields: {
      firstName: firstName,
    },
  })

  if (!trackedSuccessfully) {
    return res
      .status(500)
      .send({ error: 'An error occurred. Please try again.' })
  }

  await bento.V1.Batch.sendTransactionalEmails({
    emails: [
      {
        to: email,
        from: process.env.BENTO_EMAIL_FROM!,
        subject: "You're signed up for BentoConf updates!",
        html_body: '<p>Thanks for subscribing to updates about BentoConf</p>',
        transactional: true,
      },
    ],
  })

  return res.status(200).send({})
}
