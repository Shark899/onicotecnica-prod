import { useGlobalContext } from '../../context'

const ModificaProfilo = () => {
  const { modifyProfile } = useGlobalContext()
  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col items-start justify-start p-10 '>
        <div
          className='border-2 p-10 rounded-3xl flex flex-col justify-start items-start '
          style={{ borderColor: '#F0F0F1', width: '43rem' }}
        >
          <div className='flex justify-between items-center w-full'>
            <h1 className='text-2xl font-bold'>Profilo</h1>
            <button
              type='button'
              onClick={() => modifyProfile()}
              className=' h-9 px-4 rounded-md text-white font-semibold'
              style={{ background: '#C3C3C6' }}
            >
              Salva
            </button>
          </div>
          <span>Modifica le tue informazioni</span>
          <div className='flex justify-center items-center space-x-6 mt-8 mb-6'>
            <div className='w-16 h-16 rounded-full bg-gray-400 '></div>
            <span
              className='p-4 cursor-pointer font-semibold'
              style={{ background: '#F4F5FB' }}
            >
              Cambia
            </span>
            <span className='text-sm' style={{ color: '#C3C3C6' }}>
              JPG o PNG. Massimo 1MB
            </span>
          </div>
          <form className='flex flex-col'>
            <div className='flex'>
              <div className='mr-10'>
                <label htmlFor='' className='text-sm text-gray-700'>
                  Nome
                </label>
                <input
                  autoComplete='current-name'
                  type='text'
                  className='border-2 bg-gray-300 rounded-md w-full h-12 pl-6  mb-2'
                />
              </div>
              <div>
                <label htmlFor='' className='text-sm text-gray-700'>
                  Cognome
                </label>
                <input
                  autoComplete='current-lastname'
                  type='text'
                  className='border-2 bg-gray-300 rounded-md w-full h-12 pl-6  mb-2'
                />
              </div>
            </div>
            <div>
              <label htmlFor='' className='text-sm text-gray-700'>
                Email
              </label>
              <input
                autoComplete='current-email'
                type='email'
                className='border-2 bg-gray-300 rounded-md w-full h-12 pl-6  mb-2'
              />
            </div>
            <div>
              <label htmlFor='' className='text-sm text-gray-700'>
                Cellulare
              </label>
              <input
                autoComplete='current-cellular'
                type='tel'
                className='border-2 bg-gray-300 rounded-md w-full h-12 pl-6  mb-2'
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default ModificaProfilo
