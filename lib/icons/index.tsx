import { CSSProperties } from "styled-components"
import { GithubLogo, GoogleLogo, MyLogo, SpinningLoader } from "./icons"

type IconType = {
  name: "logo" | "google" | "github" | "spinning-loader"
  style?: CSSProperties
}

export default function Icon({ name, style }: IconType) {
  switch (name) {
    case "logo":
      return <MyLogo />

    case "google":
      return <GoogleLogo />

    case "github":
      return <GithubLogo />

    case "spinning-loader":
      return <SpinningLoader />

    default:
      return <MyLogo />
  }
}
