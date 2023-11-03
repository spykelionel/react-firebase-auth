import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'


function useUser() {
  const {signup, login, user, error } = useContext(AuthContext)

  return {signup, login, user, error}

}

export default useUser