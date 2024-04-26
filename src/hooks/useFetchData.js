import { useState, useEffect } from 'react'

import { fetchData, basicUrl } from './helpers'

const useFetchData = () => {
  const [data, setData] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetchData(`${basicUrl}?page=${currentPage}`, setData)
  }, [currentPage])

  return { data, setCurrentPage, currentPage }
}

export default useFetchData
