import styled from "styled-components"

export const AppLogoWrapper = styled.div`
  margin-left: -0.2rem;

  svg {
    width: 5.375rem;
    height: auto;

    path {
      fill: rgb(var(--text-color));
    }
  }

  span {
    font-size: 1.5rem;
    font-weight: 700;
    margin-left: -2.626rem;
    user-select: none;
    -webkit-user-select: none; // safari
    -ms-user-select: none; // ie-10 and ie-11
  }

  @media (max-width: 1920px) {
    svg {
      width: 3.6rem;
    }

    span {
      font-size: 1rem;
      margin-left: -1.75rem;
    }
  }

  @media (max-width: 768px) {
    margin-left: 0;

    svg {
      width: 2.625rem;
    }

    span {
      font-size: 0.75rem;
      margin-left: -1.25rem;
    }
  }

  @media (max-width: 528px) {
    svg {
      width: 2.5rem;
    }

    span {
      font-size: 0.7rem;
    }
  }

  @media (max-width: 432px) {
    svg {
      width: 2.25rem;
    }

    span {
      font-size: 0.65rem;
      margin-left: -1.15rem;
    }
  }

  @media (max-width: 356px) {
    svg {
      width: 2rem;
    }

    span {
      font-size: 0.6rem;
      margin-left: -1rem;
    }
  }
`
