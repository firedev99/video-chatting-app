import Icon from "@/lib/icons"
import React from "react"
import { AppLogoWrapper } from "./styles"

export default function AppLogo() {
  return (
    <AppLogoWrapper className="logo_wrapper">
      <Icon name="logo" />
      <span className="logo_text">CHATS</span>
    </AppLogoWrapper>
  )
}
