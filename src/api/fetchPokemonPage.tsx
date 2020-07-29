import {PokemonPageReturn} from '../types'

const url = 'https://pokeapi.co/api/v2/pokemon/'

function fetchPokemonPage({
  page,
  itemsPerPage,
  fetchId
}: Props): Promise<PokemonPageReturn> {
  const requestUrl =
    url + `?offset=${page * itemsPerPage}&limit=${itemsPerPage}`
  return fetchUtil(requestUrl).then(res => ({
    totalItems: res.count,
    page: res.results,
    fetchId
  }))
}

function fetchUtil(url) {
  return fetch(url).then(res => res.json())
}

export default fetchPokemonPage

interface Props {
  page: number
  itemsPerPage: number
  fetchId: symbol
}
