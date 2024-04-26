import { ThemeProvider } from './context/ThemeContext'
import { TobBarLayout, ContentBody } from './components'

function App() {
  return (
    <ThemeProvider>
      <TobBarLayout>
        <ContentBody />
      </TobBarLayout>
    </ThemeProvider>
  )
}

export default App
