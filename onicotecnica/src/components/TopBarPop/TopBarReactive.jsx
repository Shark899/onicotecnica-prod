import Burger from '../Responsive/Burger'
import { CiMenuBurger } from 'react-icons/ci'
import profile from '../../assets/profile_fake.png'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { FiBell } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Menu from '../TopBarPop/Menu'
import Notifiche from '../TopBarPop/Notifiche'
import { useGlobalContext } from '../../context'
import Search from '../TopBarPop/Search'

const TopBarReactive = () => {
  const {
    isMenuOpen,
    setIsMenuOpen,
    isNotificheOpen,
    setIsNotificheOpen,
    isSearchOpen,
    setIsSearchOpen,
  } = useGlobalContext()

  const openMenu = () => {
    if (isNotificheOpen) {
      setIsNotificheOpen(false)
    }
    setIsMenuOpen(!isMenuOpen)
  }
  const openNotifiche = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
    setIsNotificheOpen(!isNotificheOpen)
  }

  const openSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  }
  return (
    <>
      <header className='h-14 flex justify-between items-center  px-20'>
        <CiMenuBurger />
        <div className='space-x-6 flex items-center'>
          <Link to='/main/home'>Home</Link>
          <Link to='/main/struttura'>Struttura</Link>
          <Link to='/main/decorazione'>Decorazione</Link>
          <Link to='/main/live'>Live</Link>
          <a href='https://www.facebook.com/groups/onicotecnicapluss/'>
            Community
          </a>
        </div>
        <div className='flex justify-center items-center space-x-4'>
          <HiMagnifyingGlass
            className='text-2xl cursor-pointer'
            onClick={() => openSearch()}
          />
          <FiBell
            className='text-2xl cursor-pointer'
            onClick={() => openNotifiche()}
          />
          <img
            onClick={() => openMenu()}
            src={profile}
            alt=''
            className='h-10 rounded-full cursor-pointer'
          />
        </div>

        {isSearchOpen && (
          <div className='absolute right-56 top-0'>
            <Search />
          </div>
        )}

        {isMenuOpen && (
          <div className='absolute right-10 top-16'>
            <Menu />
          </div>
        )}
        {isNotificheOpen && (
          <div className='absolute right-10 top-16'>
            <Notifiche />
          </div>
        )}
      </header>
      <hr className='h-1 w-screen' />
    </>
  )
}
export default TopBarReactive
