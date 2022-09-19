import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/auth/auth-context'

const RequireAuth = ({ children }) => {
  const {
    user: { token },
  } = useAuth()
  const location = useLocation()

  return token ? (
    children
  ) : (
    <Navigate to='/login' state={{ from: location }} replace />
  )
}

export { RequireAuth }
