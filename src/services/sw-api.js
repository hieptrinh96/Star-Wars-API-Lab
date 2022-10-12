const baseUrl = 'https://swapi.dev'

export async function getAllStarships() {
  const res = await fetch(`${baseUrl}/api/starships`)
  return res.json()
}

export async function getDetails(apiURL) {
  const res = await fetch(`${baseUrl}${apiURL}`)
  return res.json()
}
