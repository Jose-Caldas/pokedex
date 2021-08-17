import React from "react";
import Link from "next/link";
import { Wrapper, Title, Image } from "../styles/pages/pokemon.styles";
import { GetServerSideProps } from "next";

function pokemon({ pokemon }) {
  console.log(pokemon);
  return (
    <>
      <Wrapper>
        <Title>{pokemon.name}</Title>
        <Image src={pokemon.image} alt={pokemon.name} />
        <p>Height: {pokemon.height}</p>
        <p>Weight: {pokemon.weight}</p>
        <p>Type: {pokemon.types[0].type.name}</p>
        <Link href="/">
          <a>Home</a>
        </Link>
      </Wrapper>
    </>
  );
}

export default pokemon;

export async function getServerSideProps({ query }) {
  const id = query.id;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await res.json();
  const paddIndex = ("00" + id).slice(-3);
  const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${paddIndex}.png`;
  pokemon.image = image;

  return {
    props: {
      pokemon,
    },
  };
}
