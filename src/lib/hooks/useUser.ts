import { User } from '@/types/user.interface'
import { useOutletContext } from 'react-router-dom'

export const useUser = () => useOutletContext<User>()
