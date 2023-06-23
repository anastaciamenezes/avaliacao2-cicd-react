import { useRoutes } from 'react-router-dom'
import Header from './components/Header'
import { UserContextProvider } from './context/UserContext'
import routes from './routes'
import Home from './pages/Home'

const App = () => {
  const elements = useRoutes(routes)

  return (
    <UserContextProvider>
      <Home />
      {elements}
      <Header />
    </UserContextProvider>
  )
}

export default App