import fetchUtil from './fetchUtil'

const url = 'https://pokeapi.co/api/v2/ability/'

function fetchAbilities(): Promise<string[]> {
  return fetchUtil(url).then(res => res.results.map(ability => ability.name))
}

export default fetchAbilities
