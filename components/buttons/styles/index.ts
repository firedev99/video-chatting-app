import styled from "styled-components"

export const ButtonWrapper = styled.button`
  width: 100%;
  font-family: var(--primary-font-family), sans-serif;
  padding: 1rem 0;
  font-size: 1.4rem;
  border-radius: 0.4rem;
  letter-spacing: 1px;
  border: none;
  margin: 0 auto;
  color: rgba(var(--bg-color), 1);
  background-image: linear-gradient(
    to right,
    #614385 0%,
    #516395 51%,
    #614385 100%
  );
  transition: 0.5s;
  background-size: 200% auto;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;

  .loader {
    fill: rgba(var(--bg-color, 1));
    width: 2.12rem;
  }

  @media (prefers-color-scheme: dark) {
    background-image: linear-gradient(
      to right,
      #cc95c0 0%,
      #dbd4b4 51%,
      #cc95c0 100%
    );
  }

  @media (hover: hover) and (pointer: fine) {
    :hover {
      cursor: pointer;
      background-position: right center; /* change the direction of the change here */
    }
  }

  @media (max-width: 1536px) {
    letter-spacing: 0;
    padding: 0.6rem 0;
    font-size: 1rem;
    font-weight: 500;
    border-radius: 0.2rem;
  }
`
