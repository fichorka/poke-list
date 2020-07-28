const url = 'https://pokeapi.co/api/v2/pokemon/'

'https://pokeapi.co/api/v2/pokemon/?offset=40&limit=20'

function fetchPokemonPage(page, itemsPerPage, fetchId) {
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
