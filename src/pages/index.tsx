import axios, { AxiosResponse } from "axios";
import {
  useState,
  Fragment,
  useMemo,
  useEffect,
  createContext,
  useContext,
  ReactChild,
  Dispatch,
  SetStateAction,
} from "react";
import { DetailsType } from "../types/details";
import { Data } from "../types/data";
import { FaChevronUp } from "react-icons/fa";
import Link from "next/link";

import {
  Container,
  Wrapper,
  Btn,
  DetailsContainer,
  Search,
  Info,
  Card,
} from "../styles/styles";

const SPRITES_BASE_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";
const API_BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
const API_SPECIES_BASE_URL = "https://pokeapi.co/api/v2/pokemon-species/";

export interface PokemonProps {
  active: Partial<DetailsType>;
  fetchDetails: (id: number) => void;
  pokemons: AxiosResponse<Data>[];
  setFilter: Dispatch<SetStateAction<string>>;
}
export const PokemonContext = createContext<PokemonProps>({} as PokemonProps);

// intercept req with msw
// provide fixtures for each one
// emulate click to fetch the details
// emulate the search and the list - empty, normal, and searched

function PokemonProvider({ children }: { children: ReactChild }) {
  const [pokemons, setPokemons] = useState<AxiosResponse<Data>[]>([]);
  const urls = new Array(151)
    .fill("")
    .map((_, id) => `${API_BASE_URL}${id + 1}`);
  const [active, setActive] = useState<Partial<DetailsType>>({});
  const [filter, setFilter] = useState("");

  // tratativa de erros
  async function getData() {
    setPokemons(await Promise.all(urls.map((url) => axios.get<Data>(url))));
  }

  useEffect(() => {
    getData();
  }, []);

  // tratativa de erros
  async function fetchDetails(id: number) {
    const {
      data: {
        evolution_chain: { url },
      },
    } = await axios.get(`${API_SPECIES_BASE_URL}${id}`);

    const { data } = await axios.get(url);
    console.log(data);

    setActive(data);
  }

  const list = useMemo(() => {
    const isFiltering = filter.length === 0;

    return isFiltering
      ? pokemons
      : pokemons.filter((pokemon) =>
          pokemon.data?.name.toLowerCase().includes(filter.toLowerCase())
        );
  }, [pokemons, filter]);

  return (
    <PokemonContext.Provider
      value={{
        active,
        fetchDetails,
        pokemons: list,
        setFilter,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

const usePokemons = () => useContext(PokemonContext);

// Pokemon selecionado
// Polemon nao selecionado
interface DetailsProps {
  active: Partial<DetailsType>;
}
export function Details({ active }: DetailsProps) {
  // const { active } = usePokemons();

  return (
    <DetailsContainer>
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
    </DetailsContainer>
  );
}

// Assertivas
// 0 resultados
// Erro
// resultados filtrados
// Loading

function GridList() {
  const { fetchDetails, setFilter, pokemons } = usePokemons();

  return (
    <Container>
      <h1>
        My Pokedex - <span>List of Pokémon: Generation I</span>
      </h1>

      <Search>
        <p>Search a pokémon:</p>
        <input
          placeholder={"search"}
          onChange={(e) => setFilter(e.target.value)}
          // add debouce function
        />
      </Search>

      <Wrapper>
        {pokemons?.map(({ data: { id, name } }) => (
          <Card key={id}>
            <Link href={`/pokemon?id=${id}`}>
              <a>
                <img
                  alt={`sprite-` + name}
                  src={`${SPRITES_BASE_URL}${id}.svg`}
                />
              </a>
            </Link>
            <Info>
              <h2> {`${id}.`}</h2>
              <Link href={`/pokemon?id=${id}`}>
                <a>{name}</a>
              </Link>
            </Info>
          </Card>
        ))}
      </Wrapper>
    </Container>
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
    <PokemonProvider>
      <div className="App">
        <GridList />

        <Btn>
          <FaChevronUp className="btn" onClick={() => handleScrollTop()} />
        </Btn>
      </div>
    </PokemonProvider>
  );
}
