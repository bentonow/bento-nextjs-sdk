# Bento SDK for Next.JS

🍱 Simple, powerful analytics for Next.JS projects!

Track events, update data, record LTV and more. Data is stored in your Bento account so you can easily research and investigate what's going on.

👋 To get personalized support, please tweet @bento or email jesse@bentonow.com!

## Installation

Run the following comamnd in your project:

```bash
npm install @bentonow/bento-nextjs-sdk --save
```

Optionally, install the [Bento Node SDK](https://github.com/bentonow/bento-node-sdk) to integrate Bento into any server-side code in your app (API routes, server actions, etc).

## Getting Started

This SDK includes components and hooks that simplify adding Bento analytics to your Next.js application. To track page views and load the Bento.js script, add the Bento analytics component at the top level of your site (e.g. `layout.tsx` or `_app.tsx`).

Optionally, pass the active user's email address to identify them before tracking the page view.

See the [Bento script documentation](https://docs.bentonow.com/platform/bento-js-tracking-script) for more information.

Note: when upgrading to version 13, Next.js changed how it reports page changes, so make sure you use the right component or hook depending on which Next.js major version you're using.

```jsx
// Next.js 13+
import { BentoAnalytics } from '@bentonow/bento-nextjs-sdk/analytics'

<BentoAnalytics siteUuid={process.env.NEXT_PUBLIC_BENTO_SITE_ID!} userEmail={''} />

// Next.js 12 (legacy)
import { BentoLegacyAnalytics } from '@bentonow/bento-nextjs-sdk/analytics/legacy'

<BentoLegacyAnalytics siteUuid={process.env.NEXT_PUBLIC_BENTO_SITE_ID!} userEmail={''} />
```

### Custom setup

If you'd like to customize how you integrate Bento into your Next.js application, you can do the following:

1. Load the Bento.js script using the Next.js script component to add the following to the header of every page. This will only load the script ONCE but trigger the first page view.

```jsx
<Script
  id="bento-script"
  src={`https://fast.bentonow.com?site_uuid=${siteUuid}`}
  strategy="afterInteractive"
/>
```

2. If you're using TypeScript, define the global Bento types

```typescript
declare global {
  interface Window {
    bento?: {
      view: () => void
      identify: (email: string) => void
      track: (event: string, data?: Record<string, any>) => void
      tag: (tag: string) => void
    }
  }
}
```

3. Track page views when the route changes

```jsx
// Next.js 13+
import { useBentoAnalytics } from '@bentonow/bento-nextjs-sdk/analytics'

useBentoAnalytics(userEmail)

// Next.js 12 (legacy)
import { useBentoLegacyAnalytics } from '@bentonow/bento-nextjs-sdk/analytics/legacy'

useBentoLegacyAnalytics(userEmail)
```

## Examples

### Track

Client side:

```javascript
window.bento.track('optin', { organisation_name: 'Team Rocket' })
window.bento.track('demo')
window.bento.track('download')
window.bento.tag('customer')
```

Server side:

```javascript
import { Analytics } from '@bentonow/bento-node-sdk'

const bento = new Analytics({ ...your configuration })

await bento.V1.track({
  email: '',
  type: 'optint',
  fields: {
    organisation_name: 'Team Rocket'
  }
})
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/bentonow/bento-nextjs-sdk. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The package is available as open source under the terms of the MIT License.

```

```
