import { useGlobalContext } from '../../context'
import MaterialeContainer from './MaterialeContainer'
import profile from '../../assets/profile_fake.png'
import single from '../../assets/singleCourse.jpg'
import { ImCross } from 'react-icons/im'
import { CiClock2 } from 'react-icons/ci'
import { CiCalendar } from 'react-icons/ci'
const LivePopUp = () => {
  const { setShowPopLive, isMaterial, isSetMateriale } = useGlobalContext()
  return (
    <>
      <div
        className='bg-white  rounded-2xl relative '
        style={{ minWidth: '60rem', maxWidth: '60rem' }}
      >
        <ImCross
          className=' absolute right-6 top-6 cursor-pointer'
          onClick={() => setShowPopLive(false)}
        />

        <img
          src={single}
          alt='singleImage'
          className='w-full mb-10 rounded-2xl'
        />
        <div className='flex justify-center items-center'>
          <hr className='w-3/4 bg-gray-200 outline-none' />
        </div>
        <div className='flex flex-col  w-full'>
          <div className='flex justify-around  space-x-3'>
            <span className='p-2 '>Date</span>

            <span className='p-2 '>Time</span>

            <span className='p-2 '>Duration</span>
          </div>
          <div className='flex justify-around space-x-3'>
            <div className='flex items-center justify-start bg-gray-300 rounded-lg'>
              <span className=''>May 15, 2023</span>
              <CiCalendar className='w-6 h-6 ml-2' />
            </div>
            <div className='flex items-center justify-start bg-gray-300 rounded-lg'>
              <span className='p-2 '>02:00PM</span>
              <CiClock2 className='w-6 h-6 ml-2' />
            </div>

            <input type='time' className='bg-transparent' />
          </div>

          <div className='flex flex-col justify-center items-center w-full'>
            <div className='w-3/4 flex justify-start items-center'>
              <span className='text-gray-400 text-sm'>
                This event will take place on the May 15,2023 from 02:00 PM
                until 5:45PM
              </span>
            </div>
          </div>
          <div className='flex flex-col justify-center items-center w-full'>
            <div className='w-3/4 flex justify-start items-center'>
              <h1 className='font-semibold my-4'>Insegnante</h1>
            </div>
          </div>
          <div className='flex justify-center items-center w-full'>
            <div className='w-3/4 flex justify-start items-center'>
              <img
                src={profile}
                alt=''
                className='h-10 rounded-full cursor-pointer'
              />
              <span>Alessia Pezzella</span>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center'>
          <div className='flex flex-col space-x-5 mt-10 w-3/4'>
            <div className='flex space-x-5'>
              <span
                className={
                  !isMaterial
                    ? 'cursor-pointer'
                    : 'cursor-pointer underline underline-offset-1'
                }
                onClick={() => isSetMateriale(!isMaterial)}
              >
                Descrizione
              </span>
              <span
                className={
                  isMaterial
                    ? 'cursor-pointer'
                    : 'cursor-pointer underline underline-offset-1'
                }
                onClick={() => isSetMateriale(!isMaterial)}
              >
                Materiale
              </span>
            </div>
            {!isMaterial && (
              <div>
                <MaterialeContainer sezione='Strumento' />
                <MaterialeContainer sezione='Pennello' />
                <MaterialeContainer sezione='Prodotto' />
              </div>
            )}
            {isMaterial && (
              <div className='flex justify-start my-10 '>
                <span className='font-semibold'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                  facilisis cursus magna. Phasellus tincidunt quis augue sit
                  amet malesuada. Sed pellentesque varius molestie. Aenean
                  accumsan semper sollicitudin
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
export default LivePopUp
