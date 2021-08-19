import styled from "styled-components";

export const Container = styled.div`
  background-color: #283e51;

  display: flex;

  flex-direction: column;
  font-family: rubik;

  h1 {
    width: 100%;
    text-align: center;
    background-color: #fff;
    padding: 10px 0;
    margin: 30px 0;
    color: #283e51;

    span {
      font-weight: 400;
      color: #283e51;
    }
  }

  @media (min-width: 425px) {
    justify-content: center;
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  background-color: #283e51;
  width: 100%;
  max-width: 1400px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
  padding-inline-start: 0;
  padding: 30px;

  img {
    width: 150px;
    height: 150px;
    background: #eee;
    padding: 20px;
    border-radius: 4px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #fff;

  height: 260px;
  border: none;
  border-radius: 4px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  padding: 10px 0;

  &:hover {
    animation: bounce 0.5s linear;
  }

  @keyframes bounce {
    20% {
      transform: translateY(-6px);
    }
    40% {
      transform: translateY(0px);
    }

    80% {
      transform: translateY(-2px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

export const Button = styled.button`
  background-color: #eee;
  color: #283e51;
  border: none;
  padding: 5px 10px;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.8);
  }
`;

export const Btn = styled.button`
  border: none;
  border-radius: 100%;
  background: #4b79a1;
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
  align-items: center;
  width: 100%;
  max-width: 1400px;
  padding: 0 30px;
  p {
    color: #fff;
    margin-right: 15px;
  }

  input {
    width: 460px;
    border: none;
    padding: 10px;
    border-radius: 4px;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    input {
      width: 100%;

      margin-left: 0;
      padding: 10px 30px;
    }
    p {
      margin-bottom: 10px;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 20px;
    margin-right: 10px;
    color: #283e51;
  }
  a {
    font-size: 20px;
    text-decoration: none;
    color: #283e51;
    text-transform: capitalize;

    &:hover {
      opacity: 0.8;
    }
  }
`;
