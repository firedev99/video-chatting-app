import { ToastContext } from "@/lib/contexts/toastContext"
import { useContext } from "react"

export function useToast() {
  const toastServices = useContext(ToastContext)
  return toastServices
}
