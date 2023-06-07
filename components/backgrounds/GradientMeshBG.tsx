import {
  GradientMeshWrapper,
  BlurredVibCircleBig,
  BlurredVibCircleLeft,
  NoiseContainer,
  BlurredShCircleTop,
  BlurredShCircleBottom,
} from "./styles"

export default function GradientMeshBg() {
  return (
    <>
      <GradientMeshWrapper>
        <BlurredVibCircleBig />
        <BlurredVibCircleLeft />
        <BlurredShCircleTop />
        <BlurredShCircleBottom />
      </GradientMeshWrapper>
      <NoiseContainer>
        {/* noise with svg filter */}
        <svg>
          <defs>
            <filter id="noise">
              <feTurbulence
                baseFrequency="0.65"
                numOctaves="3"
                seed="200"
                type="fractalNoise"
                result="static"
              />
            </filter>
          </defs>
        </svg>
      </NoiseContainer>
    </>
  )
}
