import styled from 'styled-components'
import { Pagination } from '@mui/material'
import { useContext } from 'react'

import { ThemeContext } from '../context/ThemeContext'
import useFetchData from '../hooks/useFetchData'
import { ListCard, BackDropLoader } from '../components'
import { themeColors } from '../theme/theme'

const StyledContentBody = styled.div`
  padding: 24px;
`
const StyledCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 16px;
  grid-auto-rows: minmax(100px, auto);
`

const StyledPagination = styled(Pagination)(({ theme }) => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'center',
  marginTop: '24px',
  '&& div': {
    color: theme === 'dark' ? themeColors.dark.color : themeColors.light.color,
  },
  '&& button': {
    color: theme === 'dark' ? themeColors.dark.color : themeColors.light.color,
    borderColor:
      theme === 'dark' ? themeColors.dark.color : themeColors.light.color,
    borderWidth: '2px',
  },
}))

const ContentBody = () => {
  const { data, setCurrentPage, currentPage } = useFetchData()
  const { theme } = useContext(ThemeContext)

  const totalPages = data?.info.totalPages

  if (!data) return <BackDropLoader />

  return (
    <StyledContentBody>
      <StyledCardWrapper>
        {data?.data.map(({ _id, name, imageUrl }) => (
          <ListCard
            key={_id}
            name={name}
            imageUrl={imageUrl}
            characterId={_id}
          />
        ))}
      </StyledCardWrapper>
      <StyledPagination
        count={totalPages}
        onChange={(_, page) => setCurrentPage(page)}
        hidePrevButton={currentPage === 1}
        hideNextButton={currentPage === totalPages}
        variant='outlined'
        color='primary'
        size='large'
        theme={theme}
      />
    </StyledContentBody>
  )
}

export default ContentBody
