import { Link, useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../../context'
const Menu = () => {
  const navigate = useNavigate()
  const { setIsMenuOpen, logUserOut } = useGlobalContext()
  const logout = (e) => {
    e.preventDefault()
    logUserOut()
    localStorage.clear()
    setIsMenuOpen(false)
    navigate('/login')
  }
  return (
    <div className='flex flex-col bg-gray-200 p-10 space-y-3'>
      <Link to='/progressi' className='cursor-pointer'>
        Miei Progressi
      </Link>
      <Link
        to='/options/modify'
        className='cursor-pointer'
        onClick={() => setIsMenuOpen(false)}
      >
        Impostazioni
      </Link>
      <span className='cursor-pointer'>Abbonamento</span>
      <span className='cursor-pointer'>Centro Assistenza</span>
      <span onClick={(e) => logout(e)} className='cursor-pointer'>
        Esci
      </span>
    </div>
  )
}
export default Menu
