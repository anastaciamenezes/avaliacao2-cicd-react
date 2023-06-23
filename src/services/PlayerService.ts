import axios, { AxiosInstance } from 'axios'
import Player from '../models/Player'

export class PlayerService {
  loadPlayers(Player: string) {
    throw new Error('Method not implemented.')
  }
  private _http: AxiosInstance
  private _page: number | undefined

  constructor() {
    this._http = axios.create({
      baseURL: process.env.VITE_APP_API_URL,
    })
  }

  async findPlayers(term: string): Promise<Player[] | PlayerNotFound> {
    const response = await this._http.get(`/${term.trim()}`, {
      validateStatus: (status) => status < 500,
    })

    const result = getPlayers(response.data)
    return result
  }
}