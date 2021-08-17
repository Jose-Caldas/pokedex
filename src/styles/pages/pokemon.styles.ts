import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%auto;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 100px;

  p {
    color: #171717;
  }

  a {
    margin: 20px;
    font-size: 20px;
  }
`;

export const Title = styled.h1`
  text-transform: capitalize;
`;
export const Image = styled.img`
  width: 250px;
  margin-bottom: 20px;
`;
