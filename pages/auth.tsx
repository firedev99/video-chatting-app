import { Layout, TypeWriter, AuthForm } from "@/components"
import { AuthPageFancyWrapper, AuthPageWrapper } from "@/styles/authStyles"
import { ReactElement } from "react"
import styled from "styled-components"

export const AuthPageFormWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function AuthPage() {
  return (
    <AuthPageWrapper>
      <AuthPageFancyWrapper>
        <TypeWriter />
      </AuthPageFancyWrapper>
      <AuthPageFormWrapper>
        <AuthForm />
      </AuthPageFormWrapper>
    </AuthPageWrapper>
  )
}

AuthPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout
      meta={{
        title: "Auth • Firey Chat",
      }}
    >
      {page}
    </Layout>
  )
}

export const config = {
  unstable_includeFiles: [
    "node_modules/next/dist/compiled/@edge-runtime/primitives/**/*.+(js|json)",
  ],
}
