import { useGlobalContext } from '../../context'
import MaterialeContainer from './MaterialeContainer'
import Contenuti from './Contenuti'
import profile from '../../assets/profile_fake.png'
import { ImCross } from 'react-icons/im'
import { CiClock2 } from 'react-icons/ci'
import { useMediaQuery } from 'react-responsive'
const CoursePopUp = () => {
  const { setShowPop, isMaterial, isSetMateriale } = useGlobalContext()
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 886px)' })
  const isBigScreen = useMediaQuery({ query: '(min-width: 886px)' })
  return (
    <>
      {isTabletOrMobile && (
        <div className=' bg-slate-600 p-10 rounded-lg relative '>
          <ImCross
            className=' absolute right-6 top-6 cursor-pointer'
            onClick={() => setShowPop(false)}
          />
          <div className='flex justify-between mb-4 mt-10'>
            <div className='flex items-center space-x-3'>
              <img
                src={profile}
                alt=''
                className='h-10 rounded-full cursor-pointer'
              />
              <span>Alessia Pezzella</span>
            </div>
            <div>
              <button className='text-white bg-black font-bold px-4 py-2 rounded-3xl'>
                Inizia Gratis
              </button>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <div className='w-full h-96 mb-16 mt-6 xl:w-full  '>
              <iframe
                src='https://player.vimeo.com/video/891890036'
                allow='autoplay; fullscreen'
                allowFullScreen
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
          <div className='flex space-x-3'>
            <span className='p-2 rounded-2xl bg-violet-400 h-10'>
              Struttura
            </span>
            <span className='p-2 rounded-2xl bg-violet-400 h-10'>Gel</span>
            <span className='p-2 rounded-2xl bg-violet-400 h-full w-fit'>
              Forma Quadrata
            </span>
            <span className='p-2 rounded-2xl bg-violet-400 flex items-center text-sm'>
              <CiClock2 className='mr-2 ' />
              4h 23m
            </span>
          </div>
          <div className='flex flex-col space-x-5 mt-10'>
            <div className='flex space-x-5'>
              <span
                className={
                  !isMaterial
                    ? 'cursor-pointer'
                    : 'cursor-pointer underline underline-offset-1'
                }
                onClick={() => isSetMateriale(!isMaterial)}
              >
                Contenuto
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
                <span>Materiale</span>
                {/* <MaterialeContainer sezione='Strumento' />
                <MaterialeContainer sezione='Pennello' />
                <MaterialeContainer sezione='Prodotto' /> */}
              </div>
            )}
            {isMaterial && (
              <div>
                <Contenuti />
              </div>
            )}
          </div>
        </div>
      )}
      {isBigScreen && (
        <div
          className=' bg-slate-600 p-10 rounded-lg relative '
          style={{ minWidth: '60rem' }}
        >
          <ImCross
            className=' absolute right-6 top-6 cursor-pointer'
            onClick={() => setShowPop(false)}
          />
          <div className='flex justify-between mb-4 mt-10'>
            <div className='flex items-center space-x-3'>
              <img
                src={profile}
                alt=''
                className='h-10 rounded-full cursor-pointer'
              />
              <span>Alessia Pezzella</span>
            </div>
            <div>
              <button className='text-white bg-black font-bold px-4 py-2 rounded-3xl'>
                Inizia Gratis
              </button>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <div className='w-full h-96 mb-16 mt-6 xl:w-full  '>
              <iframe
                src='https://player.vimeo.com/video/891890036'
                allow='autoplay; fullscreen'
                allowFullScreen
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </div>
          <div className='flex space-x-3'>
            <span className='p-2 rounded-2xl bg-violet-400'>Struttura</span>
            <span className='p-2 rounded-2xl bg-violet-400'>Gel</span>
            <span className='p-2 rounded-2xl bg-violet-400'>
              Forma Quadrata
            </span>
            <span className='p-2 rounded-2xl bg-violet-400 flex items-center'>
              <CiClock2 className='mr-2 ' />
              4h 23m
            </span>
          </div>
          <div className='flex flex-col space-x-5 mt-10'>
            <div className='flex space-x-5'>
              <span
                className={
                  !isMaterial
                    ? 'cursor-pointer'
                    : 'cursor-pointer underline underline-offset-1'
                }
                onClick={() => isSetMateriale(!isMaterial)}
              >
                Contenuto
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
                <span>Materiale</span>
              </div>
            )}
            {isMaterial && (
              <div>
                <Contenuti />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
export default CoursePopUp
