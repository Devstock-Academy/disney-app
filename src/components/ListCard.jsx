import styled from 'styled-components'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useContext, useState } from 'react'
import { createPortal } from 'react-dom'

import { themeColors } from '../theme/theme'
import { ThemeContext } from '../context/ThemeContext'
import { Modal } from '../components'

const StyledCard = styled(Card)(({ theme }) => ({
  border: `2px solid  ${
    theme === 'dark' ? themeColors.dark.color : themeColors.light.color
  }`,
  '&&': {
    backgroundColor:
      theme === 'dark'
        ? themeColors.dark.cardColor
        : themeColors.light.cardColor,
    flexGrow: 1,
    color: theme === 'dark' ? themeColors.dark.color : themeColors.light.color,
  },
}))
export const StyledButton = styled(Button)(({ theme }) => ({
  '&&&': {
    backgroundColor:
      theme === 'dark'
        ? themeColors.dark.buttonColor
        : themeColors.light.buttonColor,
    color: theme === 'dark' ? themeColors.dark.color : themeColors.light.color,
    fontWeight: 600,
  },
}))

const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 140px);
`

const ListCard = ({ name, imageUrl, characterId }) => {
  const [isModalShown, setIsModalShown] = useState(false)
  const { theme } = useContext(ThemeContext)

  const modal = createPortal(
    <Modal onClose={() => setIsModalShown(false)} characterId={characterId}>
      Podgląd tylko dla zalogowanych użytkowników
    </Modal>,
    document.body
  )

  return (
    <StyledCard sx={{ maxWidth: 345 }} theme={theme}>
      <CardMedia component='img' alt={name} height='140' image={imageUrl} />
      <StyledSection>
        <CardContent>
          <Typography gutterBottom variant='h5' component='StyledSection'>
            {name}
          </Typography>
        </CardContent>
        <CardActions>
          <StyledButton
            size='small'
            variant='contained'
            theme={theme}
            fullWidth
            onClick={() => setIsModalShown(true)}
          >
            Learn More
          </StyledButton>
        </CardActions>
      </StyledSection>
      {isModalShown && modal}
    </StyledCard>
  )
}

export default ListCard
