import styled from "styled-components";

export const Container = styled.div`
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  input {
    width: 200px;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  padding-inline-start: 0;
  padding: 30px;

  img {
    width: 80px;
  }
`;

export const Card = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 16rem;
  border: 1px solid gray;
  border: none;
  border-radius: 4px;
  border: 1px solid gray;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    transition-duration: 200ms;
  }
`;

export const Btn = styled.button`
  border: none;
  border-radius: 100%;
  background: #999;
  box-shadow: 2px 2px 10px -4px rgba(0, 0, 0, 0.5);
  position: fixed;
  right: 15px;
  bottom: 15px;
  z-index: 900;
  color: #fff;
  padding: 5px 7px;
  cursor: pointer;
`;
