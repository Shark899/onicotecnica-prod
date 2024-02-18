import mainImage from '../../assets/mainImage.jpg'
import 'react-slideshow-image/dist/styles.css'
import { IoIosArrowDown } from 'react-icons/io'

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
const Decorazione = () => {
  return (
    <>
      <div className='flex justify-between w-full p-20'>
        <div className='flex'>
          <button className='bg-gray-300 p-4 flex items-center'>
            Seleziona Scheda <IoIosArrowDown />
          </button>
        </div>
        <div>
          <button className='bg-gray-300 p-4 flex items-center'>
            Tutto <IoIosArrowDown />
          </button>
        </div>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-4  md:grid-cols-6 lg:grid-cols-8 gap-4 pl-20 pr-20 grid-flow-column'>
        {images.map((image) => {
          return (
            <img
              key={image.id}
              src={image.image}
              alt=''
              className='w-52 rounded-xl'
            />
          )
        })}
      </div>
    </>
  )
}
export default Decorazione
