import React from "react";
import Link from "next/link";
import {
  Wrapper,
  Container,
  Title,
  Image,
  ContainerDetail,
  ContainerInfo,
} from "../styles/pages/pokemon.styles";
import { GetServerSideProps } from "next";
import axios from "axios";
import { DetailsType } from "../types/details";
import { Details } from "./index";

interface Type {
  type: {
    name: string;
  };
}

interface PokemonProps {
  evolutions: Partial<DetailsType>;
  pokemon: {
    id: number;
    name: string;
    image: string;
    height: number;
    weight: number;
    types: Type[];
  };
}

function pokemon({ pokemon, evolutions }: PokemonProps) {
  console.log(evolutions);
  return (
    <Wrapper>
      <Container>
        <ContainerInfo>
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
        </ContainerInfo>
        <ContainerDetail>
          <Details active={evolutions} key={pokemon.id} />
        </ContainerDetail>
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

  const {
    data: {
      evolution_chain: { url },
    },
  } = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
  const { data } = await axios.get(url);

  const evolutions = data;

  return {
    props: {
      pokemon,
      evolutions,
    },
  };
};
