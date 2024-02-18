import { HiArrowSmallRight } from 'react-icons/hi2'
const Progressi = () => {
  return (
    <div className='w-screen h-screen pl-72 pr-48 pt-16 flex flex-col'>
      <span>Ciao nome</span>
      <div className='flex justify-start items-center mt-10 space-x-4'>
        <div className='bg-gray-300 min-w-52 max-h-24  pt-6 pb-6 pl-6 pr-10 flex flex-col justify-start'>
          <span className='text-xs mb-2'>Tempo studio</span>
          <span>30m</span>
        </div>
        <div className='bg-gray-300 min-w-52 max-h-24  pt-6 pb-6 pl-6 pr-10 flex flex-col justify-start'>
          <span className='text-xs mb-2'>Corsi completati</span>
          <span className='text-2xl'>4</span>
        </div>
        <div className='bg-gray-300 min-w-52 max-h-24  pt-6 pb-6 pl-6 pr-10 flex flex-col justify-start'>
          <span className='text-xs mb-2'>Struttura</span>
          <div className='flex justify-between items-end'>
            <span className='text-2xl'>2</span>
            <div className='flex cursor-pointer'>
              <span className='text-xs mr-2'>Visualizza</span>
              <HiArrowSmallRight />
            </div>
          </div>
        </div>
        <div className='bg-gray-300 min-w-52 max-h-24  pt-6 pb-6 pl-6 pr-10 flex flex-col justify-start'>
          <span className='text-xs mb-2'>Decorazione</span>
          <div className='flex justify-between items-end'>
            <span className='text-2xl'>2</span>
            <div className='flex cursor-pointer'>
              <span className='text-xs mr-2'>Visualizza</span>
              <HiArrowSmallRight />
            </div>
          </div>
        </div>
      </div>
      <span className='mt-12'>Certificazioni</span>
      <div className=''></div>
    </div>
  )
}
export default Progressi
