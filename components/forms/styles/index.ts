import styled from "styled-components"

export const AuthFormWrapper = styled.form`
  min-width: 22.5rem;
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 4rem;
    margin-left: 0.1rem;
  }

  .info_tag {
    opacity: 0.6;
    font-size: 1.2rem;
    margin-left: 0.1rem;
    margin-bottom: 1.5rem;
  }

  button {
    svg {
      width: 2rem;
      height: auto;
      margin-right: 0.8rem;
    }

    :nth-of-type(2) {
      margin-bottom: 1rem;
    }
  }

  .forgot_tag {
    margin-left: auto;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    font-weight: 600;
    position: relative;

    :after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -0.2rem;
      height: 0.2rem;
      width: 100%;
      border-radius: 0.1rem;
      background: rgb(var(--text-color));
      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.15s cubic-bezier(0.57, 0.04, 0.64, 1);
    }

    :hover {
      cursor: pointer;
      :after {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
  }

  .submit {
    text-transform: uppercase;
  }

  .break {
    text-align: center;
    position: relative;
    margin: 1.5rem 0;

    :before {
      content: "";
      position: absolute;
      width: 44%;
      top: 54%;
      transform: translateY(-54%);
      right: 0;
      height: 0.1rem;
      background: rgba(var(--text-color), 0.4);
      border-radius: 1px;
    }

    :after {
      content: "";
      position: absolute;
      width: 44%;
      top: 54%;
      left: 0;
      transform: translateY(-54%);
      height: 0.1rem;
      background: rgba(var(--text-color), 0.4);
      border-radius: 1px;
    }
  }

  .navigate_tag {
    margin-top: 1rem;
    font-size: 1.2rem;

    a {
      position: relative;

      :after {
        content: "";
        position: absolute;
        left: 0;
        bottom: -0.2rem;
        width: 100%;
        height: 0.2rem;
        border-radius: 0.1rem;
        background: rgb(var(--text-color));
        transform: scaleX(0);
        transform-origin: right;
        transition: transform 0.15s cubic-bezier(0.57, 0.04, 0.64, 1);
      }

      :hover {
        :after {
          transform: scaleX(1);
          transform-origin: left;
        }
      }
    }
    span {
      opacity: 0.6;
    }
  }

  @media (max-width: 1536px) {
    max-width: 22rem;

    h3 {
      font-size: 2rem;
    }

    .info_tag {
      font-size: 0.9rem;
    }

    button {
      svg {
        margin-right: 0.5rem;
        margin-top: -0.1rem;
        width: 1.4rem;
      }
    }

    .forgot_tag {
      font-size: 0.9rem;
      margin-bottom: 1rem;

      :after {
        bottom: -0.1rem;
        height: 0.1rem;
      }
    }

    .submit {
      svg {
        width: 1.66rem;
      }
    }

    .navigate_tag {
      font-size: 1rem;
      margin-top: 0.8rem;

      a {
        :after {
          bottom: -0.1rem;
          height: 0.1rem;
        }
      }
    }
  }

  @media (max-width: 432px) {
    max-width: 100%;

    h3 {
      font-size: 1.7rem;
    }

    .info_tag {
      margin-bottom: 1rem;
    }
  }
`
