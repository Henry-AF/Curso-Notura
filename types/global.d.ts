export {}

declare global {
  interface Window {
    fbq: (
      action: string,
      eventNameOrPixelId: string,
      params?: Record<string, unknown>
    ) => void
    _fbq: Window['fbq']
  }
}
