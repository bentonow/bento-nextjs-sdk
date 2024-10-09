
![logo](https://app.bentonow.com/brand/logoanim.gif)

# Bento Next.js SDK

> [!TIP]
> Need help? Join our [Discord](https://discord.gg/ssXXFRmt5F) or email jesse@bentonow.com for personalized support.

The Bento Next.js SDK makes it quick and easy to build an excellent analytics experience in your Next.js application. We provide powerful and customizable components and hooks that can be used out-of-the-box to track your users' behavior and manage analytics. We also expose low-level APIs so that you can build fully custom experiences.

Get started with our [📚 integration guides](https://docs.bentonow.com), or [📘 browse the SDK reference](https://docs.bentonow.com/subscribers).

Table of contents
=================

<!--ts-->
* [Features](#features)
* [Requirements](#requirements)
* [Getting started](#getting-started)
    * [Installation](#installation)
    * [Configuration](#configuration)
* [Modules](#modules)
* [Things to Know](#things-to-know)
* [Contributing](#contributing)
* [License](#license)
<!--te-->

## Features

* **Easy integration**: Quickly add Bento analytics to your Next.js application with pre-built components.
* **Page view tracking**: Automatically track page views across your Next.js application.
* **User identification**: Easily identify users for more detailed analytics.
* **Custom event tracking**: Track custom events both on the client-side and server-side.
* **Next.js version support**: Compatible with both Next.js 13+ and legacy versions.
* **Server-side integration**: Optional server-side tracking with the Bento Node SDK.

## Requirements

- Next.js 12.0+ (with specific support for 13+)
- Node.js 14+
- Bento Account for a valid **SITE_UUID**

## Getting started

### Installation

Install the Bento Next.js SDK:

```bash
npm install @bentonow/bento-nextjs-sdk --save
```

Optionally, install the Bento Node SDK for server-side integration:

```bash
npm install @bentonow/bento-node-sdk --save
```

### Configuration

Add the Bento analytics component to your top-level layout:

For Next.js 13+:

```jsx
import { BentoAnalytics } from '@bentonow/bento-nextjs-sdk/analytics'

export default function Layout({ children }) {
  return (
    <html>
      <body>
        <BentoAnalytics siteUuid={process.env.NEXT_PUBLIC_BENTO_SITE_ID!} userEmail={''} />
        {children}
      </body>
    </html>
  )
}
```

For Next.js 12 (legacy):

```jsx
import { BentoLegacyAnalytics } from '@bentonow/bento-nextjs-sdk/analytics/legacy'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <BentoLegacyAnalytics siteUuid={process.env.NEXT_PUBLIC_BENTO_SITE_ID!} userEmail={''} />
      <Component {...pageProps} />
    </>
  )
}
```

## Modules

### Page View Tracking

Automatically track page views:

```jsx
// Next.js 13+
import { useBentoAnalytics } from '@bentonow/bento-nextjs-sdk/analytics'

export default function Layout({ children }) {
  useBentoAnalytics(userEmail)
  return <>{children}</>
}

// Next.js 12 (legacy)
import { useBentoLegacyAnalytics } from '@bentonow/bento-nextjs-sdk/analytics/legacy'

function MyApp({ Component, pageProps }) {
  useBentoLegacyAnalytics(userEmail)
  return <Component {...pageProps} />
}
```

### Custom Event Tracking

Track custom events on the client-side:

```javascript
window.bento.track('optin', { organisation_name: 'Team Rocket' })
window.bento.tag('customer')
```

Track custom events on the server-side:

```javascript
import { Analytics } from '@bentonow/bento-node-sdk'

const bento = new Analytics({ /* your configuration */ })

await bento.V1.track({
  email: 'user@example.com',
  type: 'optin',
  fields: {
    organisation_name: 'Team Rocket'
  }
})
```

## Things to Know

1. The SDK provides different components for Next.js 13+ and legacy versions.
2. Page view tracking is automatic when using the provided components and hooks.
3. User identification can be done by passing the user's email to the analytics components or hooks.
4. The SDK supports both client-side and server-side event tracking.
5. For more advanced usage, you can customize the integration using the Next.js Script component.

## Contributing

We welcome contributions! Please see our [contributing guidelines](CODE_OF_CONDUCT.md) for details on how to submit pull requests, report issues, and suggest improvements.

## License

The Bento SDK for Next.js is available as open source under the terms of the [MIT License](LICENSE.md).
