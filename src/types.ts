export interface BentoWindow {
  bento?: {
    view: () => void
    identify: (email: string) => void
    track: (event: string, data?: Record<string, any>) => void
    tag: (tag: string) => void
    updateFields: (fields: Record<string, any>) => void
    showChat: () => void
    hideChat: () => void
    openChat: () => void
    closeChat: () => void
    getEmail: () => string | undefined
    spamCheck: (email: string) => Promise<boolean>

    /**
     * @beta
     */
    trackSubdomains: (domains: string[]) => void

    /**
     * @deprecated
     */
    autofill: () => void
  }
}

declare global {
  interface Window extends BentoWindow {}
}
