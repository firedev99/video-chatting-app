import { ReactElement } from "react"
import { AppLogo, Layout } from "@/components"
import {
  ContentWrapper,
  HomePageWrapper,
  NavToAuth,
  TextContent,
} from "@/styles/homeStyles"
import { Josefin_Sans } from "next/font/google"
import dynamic from "next/dynamic"

const MouseParallax = dynamic(() => import("../components/parallax"), {
  ssr: false,
})

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  weight: ["700"],
})

export default function Home() {
  return (
    <HomePageWrapper>
      <ContentWrapper>
        <AppLogo />
        <TextContent>
          <h2 className={josefinSans.className}>Connect with your friends,</h2>
          <h3 className={josefinSans.className}>Anytime & Anywhere.</h3>
        </TextContent>
        <NavToAuth href="/auth#login">SIGN IN</NavToAuth>
      </ContentWrapper>
      <MouseParallax />
    </HomePageWrapper>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout
      meta={{
        title: "Firey Chat",
      }}
    >
      {page}
    </Layout>
  )
}
