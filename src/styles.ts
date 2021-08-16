import styled from "styled-components";

export const Container = styled.div`
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
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
  justify-content: space-evenly;
  background-color: #fff;

  height: 260px;
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  padding: 10px 0;

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

export const DetailsContainer = styled.div`
  h2 {
    text-align: center;
  }
  ul {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    list-style: none;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: 10px;
  }
`;
export const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    width: 250px;
    border: none;
    padding: 10px;
    border-radius: 4px;
    margin-left: 16px;
  }
`;
