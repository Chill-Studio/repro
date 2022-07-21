import "styles/global.css";
import "styles/font.css";
import type { AppProps } from "next/app";
import { appWithTranslation, i18n } from "next-i18next";

import nextI18NextConfig from "../next-i18next.config";
// HMR in dev when updating translations
if (process.env.NODE_ENV !== "production") {
  if (typeof window !== "undefined") {
    const { applyClientHMR } = require("i18next-hmr/client");
    applyClientHMR(() => i18n);
  } else {
    const { applyServerHMR } = require("i18next-hmr/server");
    applyServerHMR(() => i18n);
  }
}
function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(App, nextI18NextConfig);
