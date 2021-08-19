import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #283e51;

  p {
    color: #171717;
  }

  a {
    margin: 20px;
    font-size: 20px;
    text-decoration: none;
    color: #fff;
    padding: 10px;
    border-radius: 4px;
    background-color: #4b79a1;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
    &:hover {
      box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
      opacity: 0.8;
    }
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
  padding: 30px 40px;

  .bg-grass {
    background: #49d0b0;
  }

  .bg-fire {
    background-color: #ee8130;
  }

  .bg-rock {
    background: #544726;
  }

  .bg-electric {
    background-color: #ffd76f;
  }

  .bg-water {
    background-color: #76befe;
  }

  .bg-poison {
    background: #9a6fff;
  }

  .bg-ghost {
    background-color: rgb(247, 247, 247);
    color: #171717;
  }

  .bg-normal {
    background-color: #a8a77a;
  }

  .bg-bug {
    background-color: #f6d6a7;
  }

  .bg-fairy {
    background-color: #fc6cb4;
  }

  .bg-ground {
    background-color: rgb(148, 81, 81);
    color: #fff;
  }

  .bg-fighting {
    background-color: #c22e28;
  }

  .bg-ice {
    background-color: #96d9d6;
  }

  .bg-flying {
    background-color: #a98ff3;
  }

  .bg-psychic {
    background-color: #f95587;
  }

  .bg-dragon {
    background-color: #6f35fc;
  }

  .bg-dark {
    background-color: #705746;
  }

  .bg-steel {
    background-color: #b7b7ce;
  }

  h3 {
    width: 100%;
    color: #283e51;
    text-align: flex-start;

    span {
      font-weight: 400;
    }
  }

  p {
    width: 100%;
    padding: 10px 15px;
    border-radius: 4px;
    text-align: center;
    margin-top: 15px;
    color: #fff;
  }
`;
export const Title = styled.h1`
  text-transform: capitalize;
  color: #283e51;
`;
export const Image = styled.img`
  width: 250px;
  margin-bottom: 20px;
  animation: fly 0.2s linear;

  @keyframes fly {
    0% {
      transform: translateY(-2rem);
    }

    100% {
      transform: translateY(0);
    }
  }
`;
