import { useState, useEffect } from 'react'

import { fetchData, basicUrl } from './helpers'

const useCharacterData = (characterId) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetchData(`${basicUrl}/${characterId}`, setData)
  }, [characterId])

  return { data }
}

export default useCharacterData
