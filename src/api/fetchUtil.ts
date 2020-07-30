import {PokeApiResponse} from '../types'

export default function fetchUtil(url: string): Promise<PokeApiResponse> {
  return fetch(url).then(res => res.json())
}
