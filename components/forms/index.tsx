import React, { FormEvent, useEffect, useState } from "react"
import { useRouter } from "next/router"
import LoginForm from "./loginForm"
import SignupForm from "./signupForm"
import { AuthFormWrapper } from "./styles"

export default function AuthForm() {
  const { asPath } = useRouter()
  const [activeHash, setActiveHash] = useState<string>("login")
  const [loaded, setLoaded] = useState<boolean>(false)

  useEffect(() => {
    const hash = asPath.split("#")[1]
    setActiveHash(hash)
    setLoaded(true)
  }, [asPath])

  if (!loaded) return <div />

  function handleForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
  }

  return (
    <AuthFormWrapper onSubmit={handleForm}>
      {activeHash === "signup" ? <SignupForm /> : <LoginForm />}
    </AuthFormWrapper>
  )
}
