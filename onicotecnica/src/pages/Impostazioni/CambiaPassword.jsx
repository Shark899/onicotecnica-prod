import { useGlobalContext } from '../../context'

const CambiaPassword = () => {
  const { modifyPassword } = useGlobalContext()
  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col items-start justify-start p-10 '>
        <div
          className='border-2 p-10 rounded-3xl flex flex-col justify-start items-start '
          style={{ borderColor: '#F0F0F1', width: '43rem' }}
        >
          <div className='flex justify-between items-center w-full'>
            <h1 className='text-2xl font-bold'>Cambia Password</h1>
            <button
              type='button'
              onClick={() => modifyPassword()}
              className=' h-9 px-4 rounded-md text-white font-semibold'
              style={{ background: '#C3C3C6' }}
            >
              Salva
            </button>
          </div>
          <span className='mt-4 mb-6'>Modifica password</span>

          <form className='flex flex-col w-full'>
            <div className='w-full'>
              <label htmlFor='' className='text-sm text-gray-700'>
                Vecchia Password
              </label>
              <input
                autoComplete='current-password'
                type='password'
                className='border-2 bg-gray-300 rounded-md w-full h-12 pl-6  mb-2'
              />
            </div>
            <div className='w-full'>
              <label htmlFor='' className='text-sm text-gray-700'>
                Nuova Password
              </label>
              <input
                autoComplete='current-password'
                type='password'
                className='border-2 bg-gray-300 rounded-md w-full h-12 pl-6  mb-2'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default CambiaPassword
