import { useLayoutEffect, useRef, useState } from "react"

type DimesionsProp = {
  height?: number
  width?: number
}

type HandlerProp = () => void

export function useDimensions(handler?: HandlerProp) {
  const isWindowAvailable = typeof window !== "undefined"

  const [dimensions, setDimensions] = useState<DimesionsProp>({
    height: isWindowAvailable ? window.innerHeight : undefined,
    width: isWindowAvailable ? window.innerWidth : undefined,
  })
  const timeoutID = useRef<NodeJS.Timeout>()

  useLayoutEffect(() => {
    if (typeof window === "undefined") return

    function listener() {
      timeoutID.current = setTimeout(() => {
        setDimensions({
          height: window.innerHeight,
          width: window.innerWidth,
        })
      }, 500)
    }

    handler && handler()

    window.addEventListener("resize", listener)

    return () => {
      window.removeEventListener("resize", listener)
      timeoutID.current && clearTimeout(timeoutID.current)
    }
  }, [handler])

  return dimensions
}
