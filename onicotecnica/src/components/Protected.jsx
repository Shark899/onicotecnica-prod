import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
function Protected({ children }) {
  const token = localStorage.getItem('Token')
  const navigate = useNavigate()
  useEffect(() => {
    console.log('Protected')
    if (!token) {
      console.log('ciao')
      navigate('/login')
    }
  }, [token])
  return children
}
export default Protected
