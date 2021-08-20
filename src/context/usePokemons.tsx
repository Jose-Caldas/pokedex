import axios, { AxiosResponse } from "axios";
import {
  useState,
  useMemo,
  useEffect,
  createContext,
  useContext,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

import { DetailsType } from "../types/details";
import { Data } from "../types/data";

export interface PokemonProps {
  active: Partial<DetailsType>;
  fetchDetails: (id: number) => void;
  pokemons: AxiosResponse<Data>[];
  setFilter: Dispatch<SetStateAction<string>>;
}

export const PokemonContext = createContext<PokemonProps>({} as PokemonProps);

const API_BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
const API_SPECIES_BASE_URL = "https://pokeapi.co/api/v2/pokemon-species/";

export type PokemonProviderProps = {
  children: ReactNode;
};

function PokemonProvider({ children }: PokemonProviderProps) {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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

export { PokemonProvider, usePokemons };
