export {}

declare global {
  interface Window {
    bento?: {
      view: () => void
    }
  }
}
