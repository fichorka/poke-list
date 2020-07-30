import fetchUtil from './fetchUtil'
import {Pokemon} from '../types'

const url = 'https://pokeapi.co/api/v2/type/'

function fetchTypes(): Promise<string[]> {
  return fetchUtil(url).then(res => res.results.map(type => type.name))
}

export default fetchTypes
