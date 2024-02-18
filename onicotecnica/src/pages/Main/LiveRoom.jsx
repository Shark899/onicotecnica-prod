import { FaArrowLeft } from 'react-icons/fa6'
import { useNavigate } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

import Chat from '../../components/Chat/Chat'
const LiveRoom = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' })
  const isBigScreen = useMediaQuery({ query: '(min-width: 768px)' })
  const navigate = useNavigate()
  return (
    <div className=' flex flex-col w-full h-full relative   xl:flex-row '>
      {/* <div className='w-full h-full xl:w-3/4'> */}
      {isTabletOrMobile && (
        <iframe
          src='https://player.vimeo.com/video/891890036'
          // allow='autoplay; fullscreen'
          allowFullScreen
          // style={{ width: '100%', height: '100vh' }}
          className='w-screen  xl:w-3/4'
          height='200'
        />
      )}
      {isBigScreen && (
        <iframe
          src='https://player.vimeo.com/video/891890036'
          // allow='autoplay; fullscreen'
          allowFullScreen
          // style={{ width: '100%', height: '100vh' }}
          className='  xl:w-3/4'
          height='800'
        />
      )}
      {/* </div> */}
      <div className='w-full flex justify-center items-end mb-10 xl:w-1/4'>
        <Chat />
      </div>
      <div
        className='absolute top-10 right-10 bg-gray-500 p-2 rounded-full'
        onClick={() => navigate(`/main/live`)}
      >
        <FaArrowLeft className='w-6 h-6' />
      </div>
    </div>
  )
}
export default LiveRoom
