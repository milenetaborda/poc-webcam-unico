import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  h2 {
    margin-top: 20px;
  }

  .container {
    max-width: 700px;
    height: 500px;
    position: relative;

    > span {
      background-color: #fff;
      padding: 15px;
      position: absolute;
      left: 50%;
      bottom: 19%;
      transform: translateX(-50%);
      padding: 8px 10px;
      border-radius: 8px;
      white-space: nowrap;
    }

    #box-camera {
      border-radius: 16px;
    }
  }

  @media (max-width: 602px) {
    .container {
      > span {
        bottom: 25%;
      }
    }
  }
`;
