import fetchUtil from './fetchUtil'

const url = 'https://pokeapi.co/api/v2/type/'

function fetchTypes(): Promise<string[]> {
  return fetchUtil(url).then(res => res.results.map(type => type.name))
}

export default fetchTypes
