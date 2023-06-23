import { createContext, ReactNode, useState } from 'react'

type UserContextType = {
  Player: string
  setPlayer: (newState: string) => void
}

const initialValue: UserContextType = {
  Player: 'en',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setPlayer: () => {},
}

export const UserContext = createContext<UserContextType>(initialValue)

type UserContextProps = {
  children: ReactNode
}

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [Player, setPlayer] = useState(initialValue.Player)

  return (
    <UserContext.Provider value={{ Player, setPlayer }}>
      {children}
    </UserContext.Provider>
  )
}