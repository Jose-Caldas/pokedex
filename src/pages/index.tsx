import { Fragment } from "react";
import { DetailsType } from "../types/details";
import { FaChevronUp } from "react-icons/fa";
import Link from "next/link";

import * as S from "../styles/pages/home.styles";
import { usePokemons } from "../context/usePokemons";

const SPRITES_BASE_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

// Pokemon selecionado
// Polemon nao selecionado
interface DetailsProps {
  active: Partial<DetailsType>;
}
export function Details({ active }: DetailsProps) {
  return (
    <S.DetailsContainer>
      {active?.chain?.evolves_to?.map((evolve) => (
        <section key={evolve.species.name}>
          <h2>Evolutions:</h2>
          <ul key={evolve.species.name}>
            <li>{active?.chain?.species.name}</li>
            <li>{evolve.species.name}</li>

            <Fragment key={evolve.species.name}>
              {evolve?.evolves_to?.map((chain) => (
                <Fragment key={chain.species.name}>
                  <li>{chain.species.name}</li>
                  {chain?.evolves_to?.map((c) => (
                    <li key={c.species.name}>{c.species.name}</li>
                  ))}
                </Fragment>
              ))}
            </Fragment>
          </ul>
        </section>
      ))}
    </S.DetailsContainer>
  );
}

// Assertivas
// 0 resultados
// Erro
// resultados filtrados
// Loading

function GridList() {
  const { setFilter, pokemons } = usePokemons();

  return (
    <S.Content>
      <h1>
        My Pokedex - <span>List of Pokémon: Generation I</span>
      </h1>

      <S.Search>
        <p>Search a pokémon:</p>
        <input
          placeholder={"search"}
          onChange={(e) => setFilter(e.target.value)}
          // add debouce function
        />
      </S.Search>

      <S.Wrapper>
        {pokemons?.map(({ data: { id, name } }) => (
          <S.Card key={id}>
            <Link href={`/pokemon?id=${id}`}>
              <a>
                <img
                  alt={`sprite-` + name}
                  src={`${SPRITES_BASE_URL}${id}.svg`}
                />
              </a>
            </Link>
            <S.Info>
              <h2> {`${id}.`}</h2>
              <Link href={`/pokemon?id=${id}`}>
                <a>{name}</a>
              </Link>
            </S.Info>
          </S.Card>
        ))}
      </S.Wrapper>
    </S.Content>
  );
}

// Quais acertivas?
// Header
// Lista
// Details
// Input
// Type input - verificar a lista

function handleScrollTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
export default function Home() {
  return (
    <S.Container>
      <GridList />

      <S.Btn>
        <FaChevronUp className="btn" onClick={() => handleScrollTop()} />
      </S.Btn>
    </S.Container>
  );
}
