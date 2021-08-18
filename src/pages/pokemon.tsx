import React from "react";
import Link from "next/link";
import {
  Wrapper,
  Container,
  Title,
  Image,
} from "../styles/pages/pokemon.styles";

function pokemon({ pokemon }) {
  console.log(pokemon);
  return (
    <Wrapper>
      <Container>
        <Title>
          {pokemon.id}. {pokemon.name}
        </Title>
        <Image src={pokemon.image} alt={pokemon.name} />
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>
        <p>Type: {pokemon.types[0].type.name}</p>
      </Container>
      <Link href="/">
        <a>Home</a>
      </Link>
    </Wrapper>
  );
}

export default pokemon;

export async function getServerSideProps({ query }) {
  const id = query.id;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await res.json();
  const padIndex = ("00" + id).slice(-3);
  const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${padIndex}.png`;
  pokemon.image = image;

  return {
    props: {
      pokemon,
    },
  };
}
