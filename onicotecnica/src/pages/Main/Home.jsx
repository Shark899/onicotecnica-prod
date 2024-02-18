import mainImage from '../../assets/mainImage.jpg'
import 'react-slideshow-image/dist/styles.css'
import SlideImages from '../../components/MainPage/SlideImages'
import CoursePopUp from '../../components/SingleCourse/CoursePopUp'
import { useGlobalContext } from '../../context'

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

const Home = () => {
  const { showPop, setShowPop } = useGlobalContext()
  return (
    <>
      <div className=' w-screen h-screen  '>
        <div className='w-full flex justify-center'>
          <img
            src={mainImage}
            alt=''
            className='h-36 w-36 md:h-96 md:w-2/4 rounded-3xl object-fill'
          />
        </div>
        <div className='mt-12 w-screen'>
          <span>Continua a studiare</span>
          <SlideImages images={images} />
        </div>
        <div className='mt-12 w-screen'>
          <span>Popolari</span>
          <SlideImages images={images} />
        </div>
        {showPop && (
          <div className='absolute w-screen flex justify-center top-24 min-w-96 '>
            <CoursePopUp />
          </div>
        )}
      </div>
    </>
  )
}
export default Home
