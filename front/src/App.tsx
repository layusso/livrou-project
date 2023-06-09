import { Outlet } from 'react-router-dom' 
import { Header } from './componentes/Header'
import { Nav } from './componentes/Nav'
import { ThemeProvider } from 'styled-components'
import { theme } from './styles/theme'
import { GlobalStyle } from './styles/globalStyle'

import "./styles.css"

function App() {

  return (
    <div className='app'>
      <ThemeProvider theme={theme}>
        <div>
          <Header/>
        </div>
        <div className='main'>
          <Nav/>
          <div className='mainContent'>
            <Outlet/>
          </div>
        </div>
      </ThemeProvider>
      <GlobalStyle/>
    </div>
  )
}

export default App
