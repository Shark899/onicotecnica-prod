import { Link } from 'react-router-dom'
import { useGlobalContext } from '../../context'
const FilterCompleted = () => {
  const { logout, setIsMenuOpen } = useGlobalContext()
  return (
    <div className='flex flex-col bg-gray-200 p-10 space-y-3'>
      <span className='cursor-pointer'>Miei Progressi</span>
      <Link
        to='/options/modify'
        className='cursor-pointer'
        onClick={() => setIsMenuOpen(false)}
      >
        Impostazioni
      </Link>
      <span className='cursor-pointer'>Abbonamento</span>
      <span className='cursor-pointer'>Centro Assistenza</span>
      <span onClick={() => logout()} className='cursor-pointer'>
        Esci
      </span>
    </div>
  )
}
export default FilterCompleted
