import { CSSProperties } from "styled-components"
import { GoogleLogo, MyLogo } from "./icons"

type IconType = {
  name: "logo" | "mute" | "google"
  style?: CSSProperties
}

export default function Icon({ name, style }: IconType) {
  switch (name) {
    case "logo":
      return <MyLogo />

    case "google":
      return <GoogleLogo />

    default:
      return <MyLogo />
  }
}
