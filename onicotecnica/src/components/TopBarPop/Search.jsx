import { HiMiniMagnifyingGlass } from 'react-icons/hi2'
import { useGlobalContext } from '../../context'
const Search = () => {
  const { logout, setIsMenuOpen } = useGlobalContext()
  return (
    <div className='flex flex-col  rounded-lg w-96'>
      <div className='flex items-center justify-start bg-white rounded-t-lg rounded-r-lg '>
        <HiMiniMagnifyingGlass className='w-6 h-6 text-gray-300' />
        <input
          placeholder='Cerca'
          type='text'
          className='h-12 outline-none pl-6 w-full'
        />
      </div>
      <hr className='w-full h-2 ' />
    </div>
  )
}
export default Search
