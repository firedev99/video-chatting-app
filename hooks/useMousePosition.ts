import { RefObject, useEffect, useState } from "react"

type MousePositionProp = {
  x: number
  y: number
}

type HandlerProp = () => Promise<void> | void

export function useMousePosition<T extends HTMLElement>(
  ref: RefObject<T>,
  handler?: HandlerProp
): MousePositionProp {
  const [mousePos, setMousePos] = useState<MousePositionProp>({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    if (typeof window === "undefined" || !ref.current) return

    function listener(e: MouseEvent) {
      setMousePos({
        x: e.clientX - window.innerWidth / 2,
        y: e.clientY - window.innerHeight / 2,
      })
    }

    handler && handler()

    window.addEventListener("mousemove", listener)

    return () => {
      window.removeEventListener("mousemove", listener)
    }
  }, [ref, handler])

  return mousePos
}
