"use client"

import { usePathname, useSearchParams } from "next/navigation"
import { Suspense, useEffect } from "react"
import Script from "next/script"
import { areAnalyticsCookiesAccepted } from "@/utils/cookieManager"

function GoogleAnalyticsInner({ GA_MEASUREMENT_ID }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (areAnalyticsCookiesAccepted()) {
      const url = pathname + searchParams.toString()
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: url,
      })
    }
  }, [pathname, searchParams, GA_MEASUREMENT_ID])

  return null
}

export default function GoogleAnalyticsWrapper({ GA_MEASUREMENT_ID }) {
  if (!areAnalyticsCookiesAccepted()) {
    return null
  }

  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Suspense fallback={null}>
        <GoogleAnalyticsInner GA_MEASUREMENT_ID={GA_MEASUREMENT_ID} />
      </Suspense>
    </>
  )
}


