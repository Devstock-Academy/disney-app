export const basicUrl = 'https://api.disneyapi.dev/character'

export const fetchData = async (url, setData) => {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const characters = await response.json()
    setData(characters)
  } catch (error) {
    console.error('Error fetching data: ', error)
  }
}
