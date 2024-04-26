import styled from 'styled-components'
import { useContext } from 'react'
import Avatar from '@mui/material/Avatar'

import { StyledButton } from './ListCard'
import useCharacterData from '../hooks/useCharacterData'
import { themeColors } from '../theme/theme'
import { ThemeContext } from '../context/ThemeContext'
import { BackDropLoader } from '../components'

const StyledBackdrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
  justify-content: center;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
`
const StyledModalContent = styled('dev')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '48px',
  borderRadius: '4px',
  overflow: 'auto',
  backgroundColor:
    theme === 'dark'
      ? themeColors.dark.backgroundColor
      : themeColors.light.backgroundColor,
  color: theme === 'dark' ? themeColors.dark.color : themeColors.light.color,
}))

const StyledInformations = styled.div`
  display: flex;
  margin-bottom: 24px;
  max-height: 50vh;
  overflow: auto;
`

const Modal = ({ onClose, characterId }) => {
  const { theme } = useContext(ThemeContext)
  const { data } = useCharacterData(characterId)

  const { imageUrl, name, films, shortFilms, videoGames, tvShows } =
    data?.data || {}

  if (!data) return <BackDropLoader />

  return (
    <StyledBackdrop onClick={onClose}>
      <StyledModalContent theme={theme}>
        <Avatar src={imageUrl} alt={name} sx={{ width: 300, height: 300 }} />
        <h3>{name}</h3>
        <StyledInformations>
          {films?.length !== 0 && (
            <ul>
              <b>Films:</b>
              {films?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          {shortFilms?.length !== 0 && (
            <ul>
              <b>Short films:</b>
              {shortFilms?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          {videoGames?.length !== 0 && (
            <ul>
              <b>Video games:</b>
              {videoGames?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          {tvShows?.length !== 0 && (
            <ul>
              <b>Tv shows:</b>
              {tvShows?.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </StyledInformations>
        <StyledButton onClick={onClose} theme={theme}>
          Close
        </StyledButton>
      </StyledModalContent>
    </StyledBackdrop>
  )
}

export default Modal
