import styled, { keyframes } from "styled-components"

const blurredVibCirBig = keyframes`
  50% {
    transform: translate(20%, -20%);
  }
`

const blurredVibCirSmall = keyframes`
  50% {
    transform: translate(-35%, -100%);
  }
`

const blurredShiCirTop = keyframes`
  50% {
    transform: translate(-70%, 0%);
  }
`

const blurredShiCirBottom = keyframes`
  50% {
    transform: translate(-50%, -100%);
  }
`

export const GradientMeshWrapper = styled.div`
  position: absolute;
  min-height: 100%;
  width: 100%;
  overflow: hidden;
`

export const BlurredVibCircleBig = styled.div`
  width: 50vw;
  height: 50vw;
  position: absolute;
  background: rgba(186, 138, 180, 1);
  top: 50%;
  right: 0;
  transform: translate(0%, -50%);
  border-radius: 50%;
  filter: blur(400px);
  animation: ${blurredVibCirBig} 10s linear infinite;

  @media (prefers-color-scheme: dark) {
    background: rgba(103, 79, 250, 1);
  }

  @media (max-width: 1536px) {
    height: 47.25rem;
    width: 47.25rem;
    filter: blur(220px);
  }
`

export const BlurredVibCircleLeft = styled.div`
  width: 44vw;
  height: 44vw;
  position: absolute;
  background: rgba(186, 138, 180, 1);
  top: 50%;
  left: -5%;
  transform: translate(-5%, -50%);
  border-radius: 50%;
  animation: ${blurredVibCirSmall} 10s linear infinite;
  filter: blur(400px);

  @media (prefers-color-scheme: dark) {
    background: rgba(103, 79, 250, 1);
  }

  @media (max-width: 1536px) {
    height: 34.75rem;
    width: 34.75rem;
    filter: blur(220px);
  }
`

export const BlurredShCircleTop = styled.div`
  height: 30vw;
  width: 30vw;
  position: absolute;
  background: rgba(195, 180, 244, 1);
  top: -10%;
  right: -10%;
  transform: translate(-10%, -20%);
  border-radius: 50%;
  filter: blur(300px);
  animation: ${blurredShiCirTop} 10s linear infinite;

  @media (prefers-color-scheme: dark) {
    background: rgba(77, 103, 191, 1);
  }

  @media (max-width: 1536px) {
    height: 22.25rem;
    width: 22.25rem;
    filter: blur(180px);
  }
`

export const BlurredShCircleBottom = styled.div`
  height: 34vw;
  width: 34vw;
  position: absolute;
  background: rgba(195, 180, 244, 1);
  bottom: -50%;
  right: 5%;
  transform: translate(5%, -50%);
  border-radius: 50%;
  filter: blur(300px);
  animation: ${blurredShiCirBottom} 10s linear infinite;

  @media (prefers-color-scheme: dark) {
    background: rgba(77, 103, 191, 1);
  }

  @media (max-width: 1536px) {
    height: 28.5rem;
    width: 28.5rem;
    filter: blur(180px);
  }
`

export const NoiseContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  filter: url(#noise);
  opacity: 0.7;

  @media (prefers-color-scheme: dark) {
    opacity: 0.5;
  }

  @media (max-width: 300px) {
    display: none;
  }
`
