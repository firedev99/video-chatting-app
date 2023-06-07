import styled, { keyframes } from "styled-components"

const blink = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const TypeWritterModalWrapper = styled.div`
  position: relative;
  z-index: 2;
  width: 80%;
  min-height: 28rem;
  box-shadow: 2px 2px 13px rgba(0, 0, 0, 0.2);
  border-radius: 0.6rem;
  justify-content: center;
  padding: 4rem 2.4rem;

  /* glassmorphism effect */
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);

  h1 {
    font-size: 2.8rem;
    font-family: var(--secondary-font-family), sans-serif;
  }

  .tag {
    position: absolute;
    right: 2rem;
    bottom: 2rem;
    opacity: 0.8;
    color: rgba(230, 234, 248, 1);
    font-family: var(--secondary-font-family), sans-serif;
    opacity: 0.9;

    :hover {
      cursor: pointer;
    }
  }

  @media (prefers-color-scheme: dark) {
    .tag {
      opacity: 0.7;
    }
  }

  @media (max-width: 1920px) {
    min-height: 24rem;
    padding: 3rem 1.8rem;

    .tag {
      font-size: 1rem;
    }
  }

  @media (max-width: 1536px) {
    width: 31rem;
    min-height: 21rem;
    padding: 2rem 1.8rem;

    h1 {
      font-size: 2.3rem;
    }
  }

  @media (max-width: 1280px) {
    width: 26rem;
    min-height: 19rem;
    padding: 2.5rem 1.5rem;

    h1 {
      font-size: 2rem;
    }

    .logo_wrapper {
      margin-left: 0;

      svg {
        width: 3.2rem;
      }

      span {
        font-size: 0.8rem;
        margin-left: -1.6rem;
      }
    }
  }
`

export const TypeWriterContainer = styled.div`
  margin-left: 0.2rem;
  margin-top: 0.5rem;

  h3 {
    font-size: 2rem;
    line-height: 2.4rem;
    display: inline-block;
    font-weight: 700;
  }

  span {
    position: relative;
    font-weight: 700;
    font-size: 2rem;
    line-height: 2.4rem;
    color: rgb(var(--bg-color));
    font-family: var(--primary-font-family), sans-serif;

    :after {
      content: "";
      margin-left: 0.1rem;
      border-right: 0.3rem solid #0072ef;
      animation: ${blink} 0.6s ease-in-out infinite;
    }
  }

  @media (max-width: 1536px) {
    margin-top: 0;
    h3,
    span {
      font-size: 1.6rem;
    }
  }

  @media (max-width: 1280px) {
    h3,
    span {
      font-size: 1.3rem;
      line-height: 1.8rem;
    }
  }
`
