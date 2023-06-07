import { MouseEventHandler, ReactNode } from "react"
import { CSSProperties } from "styled-components"
import Icon from "@/lib/icons"
import { ButtonWrapper } from "./styles"

type ButtonProps = {
  children?: ReactNode
  text?: string
  className?: string
  loader?: boolean
  onClick?: MouseEventHandler<HTMLButtonElement>
  style?: CSSProperties
}

export default function Button({
  children,
  text = "firedev",
  loader,
  className,
  onClick,
  style,
}: ButtonProps) {
  return (
    <ButtonWrapper
      className={className}
      disabled={loader}
      style={style}
      onClick={onClick}
    >
      {children ? (
        children
      ) : (
        <>{loader ? <Icon name="spinning-loader" /> : <span>{text}</span>}</>
      )}
    </ButtonWrapper>
  )
}
