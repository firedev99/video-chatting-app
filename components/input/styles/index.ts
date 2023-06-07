import styled from "styled-components"

export const InputWrapper = styled.div`
  margin: 1.5rem 0;

  label {
    position: relative;

    .error {
      box-shadow: inset 0 -3px 0 rgba(179, 19, 18, 0.6);
    }

    input {
      width: 100%;
      height: 100%;
      background: transparent;
      border: none;
      font-family: var(--primary-font-family);
      color: rgba(var(--text-color), 0.8);
      font-size: 1.1rem;
      box-shadow: unset;
      box-shadow: inset 0 -3px 0 rgba(13, 17, 23, 0.6);

      text-indent: 0.2rem;
      padding-bottom: 0.2rem;

      :focus {
        outline: none;
        box-shadow: inset 0 -3px 0 rgba(13, 17, 23, 1);
      }

      ::placeholder {
        opacity: 0;
      }

      :focus::placeholder {
        opacity: 1;
        color: rgba(var(--text-color), 0.65);
      }

      :focus ~ span {
        transform: translate3d(0, -14px, 0) scale(0.8);
      }

      :not(:placeholder-shown) ~ span {
        transform: translate3d(0, -14px, 0) scale(0.8);
      }

      /* disables the backdround color while autofilling */
      :-webkit-autofill {
        transition: background-color 5000s ease-in-out !important;
      }

      @media (prefers-color-scheme: dark) {
        box-shadow: inset 0 -3px 0 rgba(170, 170, 170, 1);

        :focus {
          box-shadow: inset 0 -3px 0 rgba(230, 234, 248, 1);
        }
      }
    }

    span {
      pointer-events: none;
      font-weight: 600;
      position: absolute;
      font-size: 1.6rem;
      top: -0.9rem;
      left: 0.2rem;
      transform-origin: 0 0;
      transform: translate3d(0, 0, 0);
      transition: transform 0.15s cubic-bezier(0.165, 0.84, 0.44, 1);
    }
  }

  @media (max-width: 1536px) {
    margin: 1rem 0;

    :first-of-type {
      margin-top: 0.5rem;
    }

    label {
      input {
        font-size: 1rem;
      }

      span {
        font-size: 1.2rem;
        top: -0.4rem;
        left: 0.2rem;
      }
    }
  }
`

export const SimpleInput = styled.input``
