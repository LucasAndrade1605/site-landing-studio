/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

export {};

declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean;
  }
}
