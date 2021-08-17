import styled from "styled-components";

export const Container = styled.div`
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  font-family: rubik;

  h1 {
    text-align: center;
    background-color: #fff;
    padding: 10px 0;
    margin: 30px 0;
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

  .bg-rock {
    background-color: rgb(148, 81, 81);
  }
  .bg-ghost {
    background-color: rgb(247, 247, 247);
  }
  .bg-electric {
    background-color: rgb(255, 255, 161);
  }
  .bg-bug {
    background-color: #f6d6a7;
  }
  .bg-poison {
    background-color: #e0a7f6;
  }
  .bg-normal {
    background-color: #a8a878;
  }
  .bg-fairy {
    background-color: rgba(255, 192, 203, 0.863);
  }
  .bg-fire {
    background-color: #fbe3df;
  }
  .bg-grass {
    background-color: #e2f9e1;
  }
  .bg-water {
    background-color: #e0f1fd;
  }
  .bg-fighting {
    background-color: #d3d3d3;
  }
  .bg-psychic {
    background-color: #f3d6e4;
  }
  .bg-ground {
    background-color: #f4e7da;
  }

  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

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
  }
  h3 {
    color: #171717;
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
  padding: 0 20px;

  input {
    width: 250px;
    border: none;
    padding: 10px;
    border-radius: 4px;
    margin-left: 16px;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  h2 {
    font-size: 20px;
    margin-right: 10px;
  }
  a {
    font-size: 20px;
    text-decoration: none;
    color: #171717;
  }
`;
