import { useRef } from "react"
import Image from "next/image"
import { useMousePosition } from "@/hooks/useMousePosition"
import { useDimensions } from "@/hooks/useDimension"
import { parallaxImages } from "@/lib/dummy/parallaxImages"
import {
  ImageElement,
  ObjectContainer,
  ObjectElement,
  ObjectWrapper,
  ParallaxContainer,
} from "./styles"

export default function MouseParallax() {
  const parallaxContainer = useRef<HTMLDivElement | null>(null)
  const { width } = useDimensions(showBasedOnWidth)
  const { x, y } = useMousePosition(parallaxContainer)

  function showBasedOnWidth() {
    if (width && width < 1024) {
      parallaxContainer.current = null
    }
  }

  return (
    <ParallaxContainer ref={parallaxContainer}>
      {/* parallax elements  */}
      <ObjectWrapper>
        {parallaxImages.map((item, id) => (
          <ObjectContainer key={`parallax_el_${id}`} angle={item.angle}>
            <ObjectElement
              style={{
                transform: `translateX(${x * item.speed}px) translateY(${
                  y * item.speed
                }px)`,
              }}
            >
              <ImageElement>
                <Image
                  fill={true}
                  src={item.src}
                  alt={item.src}
                  sizes="(max-width: 1920px) 16rem, (max-width: 1440px) 10rem"
                  priority={id === 0 ?? true}
                />
              </ImageElement>
            </ObjectElement>
          </ObjectContainer>
        ))}
      </ObjectWrapper>
    </ParallaxContainer>
  )
}
