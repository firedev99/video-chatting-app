import { ToastProvider } from "@/lib/contexts/toastContext"
import { GlobalStyles } from "@/styles/globalStyles"
import { NextPage } from "next"
import type { AppProps } from "next/app"
import { Poppins } from "next/font/google"
import { ReactElement, ReactNode } from "react"

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
})

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return getLayout(
    <>
      {/* injecting font in the head */}
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily}, "sans-serif";
        }
      `}</style>
      <GlobalStyles />
      <ToastProvider>
        <Component {...pageProps} />
      </ToastProvider>
    </>
  )
}
