import { useToast } from "@/hooks/useToast"
import type { ToastContentType } from "@/types"
import { useEffect } from "react"
import { createPortal } from "react-dom"
import { ToastContainerWrapper, ToastWrapper } from "./styles"

type ToastCustomType = {
  notifications: ToastContentType[]
}

function Toast({ notifications }: ToastCustomType) {
  const { removeToast } = useToast()

  useEffect(() => {
    // remove each notification on an interval of 1.5s
    const intervalID: NodeJS.Timer = setInterval(() => {
      if (notifications.length) {
        removeToast(notifications[0].id)
      }
    }, 1500)

    return () => {
      clearInterval(intervalID)
    }
  }, [notifications, removeToast])

  return (
    <>
      {notifications.map((item) => (
        <ToastWrapper key={item.id}>{item.content}</ToastWrapper>
      ))}
    </>
  )
}

export default function ToastContainer({
  toasts,
}: {
  toasts: ToastContentType[]
}) {
  if (typeof window === "object" && toasts.length !== 0) {
    // create a new virtual DOM on the document body so that it doesn't clash with the actual DOM of the app itself
    return createPortal(
      <ToastContainerWrapper>
        <Toast notifications={toasts} />
      </ToastContainerWrapper>,
      document.body
    )
  }

  return null
}
