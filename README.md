# Bento SDK for Next.JS

🍱 Simple, powerful analytics for Next.JS projects!

Track events, update data, record LTV and more. Data is stored in your Bento account so you can easily research and investigate what's going on.

👋 To get personalized support, please tweet @bento or email jesse@bentonow.com!

## Installation

Run the following comamnd in your project:

```bash
npm install @bentonow/bento-nextjs-sdk --save
```

## Getting Started

This SDK includes components and hooks that simplify adding Bento analytics to your Next.js application. To track page views and load the Bento.js script, add the Bento analytics component at the top level of your site (e.g. `layout.tsx` or `_app.tsx`).

Optionally, pass the active user's email address to identify them before tracking the page view.

Note, Next.js changed how it reports page changes, so make sure you use the right component or hook depending on which Next.js major version you're using.

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

1. Load the Bento.js script using the Next.js script component

```jsx
<Script
  id="bento-script"
  src={`https://fast.bentonow.com?site_uuid=${siteUuid}`}
  strategy="afterInteractive"
/>
```

2. Define the global Bento types

```typescript
declare global {
  interface Window {
    bento?: {
      view: () => void
      identify: (email: string) => void
    }
  }
}
```

3. Track page views

```jsx
// Next.js 13+
import { useBentoAnalytics } from '@bentonow/bento-nextjs-sdk/analytics'

useBentoAnalytics(userEmail)

// Next.js 12 (legacy)
import { useBentoLegacyAnalytics } from '@bentonow/bento-nextjs-sdk/analytics/legacy'

useBentoLegacyAnalytics(userEmail)
```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/bentonow/bento-nextjs-sdk. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The package is available as open source under the terms of the MIT License.
