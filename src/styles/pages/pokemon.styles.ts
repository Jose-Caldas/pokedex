import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: aliceblue;

  p {
    color: #171717;
  }

  a {
    margin: 20px;
    font-size: 20px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);

  border-radius: 8px;
  padding: 30px;
`;
export const Title = styled.h1`
  text-transform: capitalize;
`;
export const Image = styled.img`
  width: 250px;
  margin-bottom: 20px;
`;
