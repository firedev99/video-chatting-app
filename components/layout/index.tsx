import Head from "next/head"
import { ReactNode } from "react"
import { Navbar } from "@/components"
import GradientMeshBg from "../background"
import styled from "styled-components"

type LayoutType = {
  children: ReactNode
  meta: {
    title: string
    description?: string
    icon?: string
  }
  menu?: boolean
}

export const Wrapper = styled.div`
  position: relative;
  padding: 0 4rem;
  z-index: 10;
  height: 100%;
  width: 100%;

  @media (max-width: 1024px) {
    padding: 0 2rem;
  }

  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  @media (max-width: 356px) {
    padding: 0 0.5rem;
  }
`

export default function Layout({ children, meta, menu = false }: LayoutType) {
  const { title, description, icon } = meta

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={
            description ||
            "A video conferencing app with a custom built signaling server along with WebSocket."
          }
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={icon || "/favicon.ico"} />
      </Head>
      {menu && <Navbar />}
      <GradientMeshBg />
      <main>
        <Wrapper>{children}</Wrapper>
      </main>
    </>
  )
}
