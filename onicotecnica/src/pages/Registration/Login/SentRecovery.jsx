import { useGlobalContext } from '../../../context'
import { useNavigate } from 'react-router-dom'
const SentRecovery = () => {
  const { recoveryEmail } = useGlobalContext()
  const navigate = useNavigate()
  const delay = (ms) => new Promise((res) => setTimeout(res, ms))
  const returnDelay = async () => {
    await delay(5000)
    navigate('/login')
  }
  returnDelay()
  return (
    <>
      <div className='flex justify-center items-center w-full h-screen'>
        <div
          className='flex flex-col justify-center items-center w-min-96 p-10 bg-white rounded-lg shadow-2xl'
          style={{ width: '30rem' }}
        >
          <div className='w-full flex flex-col  space-y-6'>
            <h1 className='text-2xl font-semibold '>Istruzioni inviate</h1>
            <span className='text-base'>
              Un’email con le istruzione per la reimpostazione della password è
              stata inviata a {recoveryEmail}.
            </span>
            <span className='text-base'>
              Se non vedi l’email nella tua posta in arrivo, controlla la
              casella della posta indesiderata.
            </span>
            <span className='text-base'>Hai ancora Problemi? Contattaci</span>
          </div>
        </div>
      </div>
    </>
  )
}
export default SentRecovery
