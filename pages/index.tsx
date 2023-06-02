import { ReactElement } from "react"
import { Layout } from "@/components"
import {
  AppLogo,
  ContentWrapper,
  HomePageWrapper,
  NavToAuth,
  TextContent,
} from "@/styles/homeStyles"
import Icon from "@/lib/icons"
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
        <AppLogo>
          <Icon name="logo" />
          <span>CHATS</span>
        </AppLogo>
        <TextContent>
          <h2 className={josefinSans.className}>Connect with your friends,</h2>
          <h3 className={josefinSans.className}>Anytime & Anywhere.</h3>
        </TextContent>
        <NavToAuth href="#">SIGN IN</NavToAuth>
      </ContentWrapper>
      <MouseParallax />
    </HomePageWrapper>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout
      meta={{
        title: "Hangout",
      }}
    >
      {page}
    </Layout>
  )
}
