import styled from "styled-components"

export const AuthPageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`

export const AuthPageFancyWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    display: none;
  }
`
