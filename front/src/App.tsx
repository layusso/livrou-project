import { Outlet } from 'react-router-dom' 
import { Header } from './componentes/Header'
import { Nav } from './componentes/Nav'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { GlobalStyle } from './styles/globalStyle'

function App() {

  return (
    <>
    <ThemeProvider theme={theme}>
      <Header/>
      <Nav/>
        <Outlet/>
    </ThemeProvider>
    <GlobalStyle/>
    </>
  )
}

export default App
