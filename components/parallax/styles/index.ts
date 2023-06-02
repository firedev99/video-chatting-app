import styled from "styled-components"

type CircumferenceProps = {
  angle: number
}

export const ParallaxContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  @media (max-width: 1024px) {
    display: none;
    visibility: hidden;
  }
`

export const ObjectWrapper = styled.div`
  width: 48rem;
  height: 48rem;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 1920px) {
    width: 35rem;
    height: 35rem;
  }

  @media (max-width: 1440px) {
    width: 24rem;
    height: 24rem;
  }
`

export const ObjectContainer = styled.div<CircumferenceProps>`
  width: 24rem;
  height: 24rem;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -12rem; // negative half of the element width
  transform: ${(props) =>
    `rotate(${props.angle}deg) translate(24rem) rotate(-${props.angle}deg)`};

  :first-of-type {
    width: 34rem;
    height: 34rem;
    margin: -17rem;
    transform: ${(props) =>
      `rotate(${props.angle}deg) translate(0px) rotate(-${props.angle}deg)`};
  }

  @media (max-width: 1920px) {
    height: 16rem;
    width: 16rem;
    margin: -8rem;
    transform: ${(props) =>
      `rotate(${props.angle}deg) translate(17rem) rotate(-${props.angle}deg)`};

    :first-of-type {
      width: 28rem;
      height: 28rem;
      margin: -14rem;
    }
  }

  @media (max-width: 1440px) {
    height: 10rem;
    width: 10rem;
    margin: -5rem;
    transform: ${(props) =>
      `rotate(${props.angle}deg) translate(12rem) rotate(-${props.angle}deg)`};

    :first-of-type {
      width: 20rem;
      height: 20rem;
      margin: -10rem;
    }
  }
`

export const ObjectElement = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: inherit;
  transition: transform 0.3s cubic-bezier(0.2, 0.49, 0.32, 0.99);
`

export const ImageElement = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`
