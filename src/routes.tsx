import { RouteObject } from 'react-router-dom'
import PlayerInfo from './pages/PlayerInfo'
import Home from './pages/Home'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/info',
    element: <PlayerInfo />,
  },
]

export default routes