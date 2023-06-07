import Link from "next/link"
import styled from "styled-components"

export const HomePageWrapper = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
`

export const ContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const TextContent = styled.div`
  margin-top: 1rem;

  h2 {
    font-size: 4.25rem;
    white-space: nowrap;
    font-family: var(--secondary-font-family), sans-serif;
  }

  h3 {
    font-size: 3.6rem;
    font-family: var(--secondary-font-family), sans-serif;
    letter-spacing: 0.1rem;
    margin-left: 0.2rem;
    margin-top: 0.5rem;
  }

  @media (max-width: 1536px) {
    h2 {
      font-size: 3rem;
    }

    h3 {
      font-size: 2.375rem;
    }
  }

  @media (max-width: 1280px) {
    h2 {
      font-size: 2.375rem;
    }

    h3 {
      font-size: 1.75rem;
    }
  }

  @media (max-width: 1024px) {
    h2 {
      font-size: 3rem;
    }

    h3 {
      font-size: 2.375rem;
    }
  }

  @media (max-width: 768px) {
    margin-top: 0.5rem;

    h2 {
      font-size: 2.375rem;
    }

    h3 {
      font-size: 2rem;
      margin-left: 0.15rem;
    }
  }

  @media (max-width: 528px) {
    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.7rem;
    }
  }

  @media (max-width: 432px) {
    margin-top: 0.4rem;

    h2 {
      font-size: 1.8rem;
    }

    h3 {
      margin-left: 0.05rem;
      font-size: 1.65rem;
    }
  }

  @media (max-width: 386px) {
    h2 {
      font-size: 1.6rem;
    }

    h3 {
      font-size: 1.4rem;
    }
  }

  @media (max-width: 356px) {
    h2 {
      font-size: 1.45rem;
    }

    h3 {
      font-size: 1.3rem;
    }
  }

  @media (max-width: 300px) {
    h2 {
      font-size: 1.25rem;
    }

    h3 {
      font-size: 1.1rem;
    }
  }
`

export const NavToAuth = styled(Link)`
  margin-top: 1rem;
  margin-left: 0.4rem;
  font-size: 2rem;
  font-weight: 500;
  position: relative;
  max-width: 7.32rem;

  :after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.2rem;
    border-radius: 0.15rem;
    background: rgb(var(--text-color));
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.2s cubic-bezier(0.57, 0.04, 0.64, 1);
  }

  @media (hover: hover) and (pointer: fine) {
    :hover {
      :after {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
  }

  @media (max-width: 1536px) {
    font-size: 1.5rem;
    max-width: 5.525rem;
    margin-left: 0.25rem;
  }

  @media (max-width: 1280px) {
    margin-left: 0.2rem;
  }

  @media (max-width: 1024px) {
    margin-left: 0.25rem;
  }

  @media (max-width: 768px) {
    margin-top: 0.8rem;
    font-size: 1.25rem;
    max-width: 4.6rem;
  }

  @media (max-width: 528px) {
    font-size: 1.1rem;
    max-width: 4rem;
  }

  @media (max-width: 432px) {
    margin-top: 0.7rem;
    margin-left: 0.05rem;
    font-size: 1.05rem;
    max-width: 3.8rem;

    :after {
      height: 0.1rem;
    }
  }

  @media (max-width: 356px) {
    font-size: 1rem;
    max-width: 3.7rem;
  }
`
