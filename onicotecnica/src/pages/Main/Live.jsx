import mainImage from '../../assets/mainImage.jpg'
import 'react-slideshow-image/dist/styles.css'
import LiveSlideImages from '../../components/MainPage/LiveSlideImages'
import { useGlobalContext } from '../../context'
import LivePopUp from '../../components/SingleCourse/LivePopUp'
import { useNavigate } from 'react-router-dom'

const images = [
  {
    id: 1,
    image: mainImage,
  },
  {
    id: 2,
    image: mainImage,
  },

  {
    id: 3,
    image: mainImage,
  },
  {
    id: 4,
    image: mainImage,
  },
  {
    id: 5,
    image: mainImage,
  },
  {
    id: 6,
    image: mainImage,
  },
  {
    id: 7,
    image: mainImage,
  },
  {
    id: 8,
    image: mainImage,
  },
  {
    id: 9,
    image: mainImage,
  },
  {
    id: 10,
    image: mainImage,
  },
  {
    id: 11,
    image: mainImage,
  },
  {
    id: 12,
    image: mainImage,
  },
]
const Live = () => {
  const { showPopLive } = useGlobalContext()
  const navigate = useNavigate()
  return (
    <>
      <div className='w-screen h-screen'>
        <div className='w-full  flex justify-start'>
          <div className='h-36 w-36 md:h-96 md:w-2/4 rounded-3xl object-fill bg-gray-500 flex justify-start items-end '>
            <div className='flex flex-col items-start font-bold ml-12 mb-12 space-y-2'>
              <span className='text-sm md:text-base'>
                La Live è iniziata alle 21:30
              </span>
              <button
                type='button'
                onClick={() => navigate('/main/live-room/33')}
                className=' h-9 rounded-md text-white font-semibold'
                style={{ background: '#C3C3C6' }}
              >
                Partecipa
              </button>
            </div>
          </div>
        </div>
        <div className='mt-12'>
          <span>Questa Settimana</span>
          <LiveSlideImages images={images} />
        </div>
        <div className='mt-12 '>
          <span>Questo Mese</span>
          <LiveSlideImages images={images} />
        </div>
        <div className=' mt-12 '>
          <span>Live Passate</span>
          <LiveSlideImages images={images} />
        </div>
        {showPopLive && (
          <div className='absolute w-screen flex justify-center top-24 min-w-96 '>
            <LivePopUp />
          </div>
        )}
      </div>
    </>
  )
}
export default Live
