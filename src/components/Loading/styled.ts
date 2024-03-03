import styled from "styled-components";

export const ContainerLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 175px);
`;

export const LoadingFrame = styled.span`
  position: relative;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  border: 4px solid #2f2e41;
  background: conic-gradient(
    from 90deg at 50% 50%,
    rgba(128, 128, 128, 0.0001) -46.17deg,
    #ffffff 313.55deg,
    rgba(128, 128, 128, 0.0001) 313.83deg,
    #ffffff 673.55deg
  );
  box-shadow: 0 0 100px -50px black;
  animation: rotation 1s linear infinite;

  &::before {
    content: "";
    position: absolute;
    background: #2f2e41;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    height: 70%;
    border-radius: 50%;
    border: 6px solid #2f2e41;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
