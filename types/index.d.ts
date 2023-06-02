import { ReactNode } from "react"

export type ComponentWithChildren = {
  children: ReactNode
}

export type ToastContentType = {
  id: string,
  content: string
}