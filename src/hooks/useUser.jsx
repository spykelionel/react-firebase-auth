import React, { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'


function useUser() {
  const {signup, login, user } = useContext(AuthContext)

  return {signup, login, user}

}

export default useUser