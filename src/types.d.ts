import { UUID } from 'crypto'

export interface UserT {
  id?: UUID
  username: string
  password: string
  mail: string
}
