import logo from '../assets/logo.png'
import profile from '../assets/profile_fake.png'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { FiBell } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import Menu from './TopBarPop/Menu'
import Notifiche from './TopBarPop/Notifiche'
import { useGlobalContext } from '../context'
import Search from './TopBarPop/Search'
import { CiMenuBurger } from 'react-icons/ci'
import { useMediaQuery } from 'react-responsive'
import { IoIosArrowDown } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'

const TopBar = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 886px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 886px)' })

  const {
    isMenuOpen,
    setIsMenuOpen,
    isNotificheOpen,
    setIsNotificheOpen,
    isSearchOpen,
    setIsSearchOpen,
    isResponsiveMenuOpen,
    setIsResposnsiveMenuOpen,
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
    <div>
      {isBigScreen && (
        <div>
          <header className='h-14 flex justify-between items-center  px-20'>
            <div className=' flex items-center '>
              <img src={logo} alt='' className='h-8 rounded-lg mr-1' />
              <h1 className=' text-2xl font-bold'>Untitled UI</h1>
            </div>
            <div className='space-x-6 flex items-center '>
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
              <div className='relative'>
                <div className='absolute bottom-1 right-1 w-2 h-2 rounded-full bg-gray-400 flex justify-center items-center border-1 border-white'>
                  <IoIosArrowDown />
                </div>
                <img
                  onClick={() => openMenu()}
                  src={profile}
                  alt=''
                  className='h-10 rounded-full cursor-pointer'
                />
              </div>
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
        </div>
      )}
      {isTabletOrMobile && (
        <div>
          <header className='h-14 flex justify-between items-center relative  px-4'>
            {isResponsiveMenuOpen && (
              <div
                className=' flex space-y-4 flex-col absolute top-16 left-10 w-full py-4 bg-white'
                style={{ background: '#f8f7f4' }}
              >
                <Link to='/main/home'>Home</Link>
                <Link to='/main/struttura'>Struttura</Link>
                <Link to='/main/decorazione'>Decorazione</Link>
                <Link to='/main/live'>Live</Link>
                <a href='https://www.facebook.com/groups/onicotecnicapluss/'>
                  Community
                </a>
              </div>
            )}
            {!isResponsiveMenuOpen && (
              <CiMenuBurger onClick={() => setIsResposnsiveMenuOpen(true)} />
            )}
            {isResponsiveMenuOpen && (
              <IoClose onClick={() => setIsResposnsiveMenuOpen(false)} />
            )}
            <div className='flex justify-center items-center space-x-4'>
              <HiMagnifyingGlass
                className='text-2xl cursor-pointer'
                onClick={() => openSearch()}
              />
              <FiBell
                className='text-2xl cursor-pointer'
                onClick={() => openNotifiche()}
              />
              <div className='relative'>
                <div className='absolute bottom-1 right-1 w-2 h-2 rounded-full bg-gray-400 flex justify-center items-center border-1 border-white'>
                  <IoIosArrowDown />
                </div>
                <img
                  onClick={() => openMenu()}
                  src={profile}
                  alt=''
                  className='h-10 rounded-full cursor-pointer'
                />
              </div>
            </div>

            {/* {isSearchOpen && (
              <div className='absolute right-56 top-0'>
                <Search />
              </div>
            )} */}

            {isMenuOpen && (
              <div className='absolute right-10 top-16'>
                <Menu />
              </div>
            )}
            {/* {isNotificheOpen && (
              <div className='absolute right-10 top-16'>
                <Notifiche />
              </div>
            )} */}
          </header>
          <hr className='h-1 w-screen' />
        </div>
      )}
    </div>
  )
}
export default TopBar
