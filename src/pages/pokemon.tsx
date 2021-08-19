import React from "react";
import Link from "next/link";
import {
  Wrapper,
  Container,
  Title,
  Image,
} from "../styles/pages/pokemon.styles";
import { GetServerSideProps } from "next";

interface Type {
  type: {
    name: string;
  };
}

interface PokemonProps {
  pokemon: {
    id: number;
    name: string;
    image: string;
    height: number;
    weight: number;
    types: Type[];
  };
}

function pokemon({ pokemon }: PokemonProps) {
  console.log(pokemon);
  return (
    <Wrapper>
      <Container>
        <Title>
          {pokemon.id}. {pokemon.name}
        </Title>
        <Image src={pokemon.image} alt={pokemon.name} />
        <h3>
          Height: <span>{pokemon.height}</span>
        </h3>
        <h3>
          Weight: <span>{pokemon.weight}</span>
        </h3>
        <p className={`bg-${pokemon.types[0].type.name}`}>
          Type: {pokemon.types[0].type.name}
        </p>
      </Container>
      <Link href="/">
        <a>Explore more Pokémon</a>
      </Link>
    </Wrapper>
  );
}

export default pokemon;

export const getServerSideProps: GetServerSideProps<PokemonProps> = async ({
  query,
}) => {
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
};
