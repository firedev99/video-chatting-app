import { createContext, useState } from "react"
import { firey } from "../utils"
import type { ComponentWithChildren, ToastContentType } from "@/types"
import { ToastContainer } from "@/components"

export type ToastContextType = {
  addToast: (content: string) => void
  removeToast: (id: string) => void
}

export const ToastContext = createContext<ToastContextType>({
  addToast: () => {},
  removeToast: () => {},
})

export function ToastProvider({ children }: ComponentWithChildren) {
  const [toasts, setToasts] = useState<ToastContentType[]>([])

  function addToast(content: string) {
    setToasts((toasts) => [...toasts, { id: firey.uniqueID(), content }])
  }

  function removeToast(id: string) {
    setToasts((toasts) => toasts.filter((item) => item.id !== id))
  }

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      <ToastContainer toasts={toasts} />
      {children}
    </ToastContext.Provider>
  )
}
