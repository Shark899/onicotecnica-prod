import { useGlobalContext } from '../../../context'
import Button from '../../../components/Registration/Button'
import Input from '../../../components/Registration/Input'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const RecuperaPassword = () => {
  const { recoveryEmail, setRecoveryEmail, resetPassword } = useGlobalContext()
  const navigate = useNavigate()
  const sendRecoveryEmail = () => {
    resetPassword(recoveryEmail)
    navigate('/sent_recovery')
  }
  return (
    <>
      <div className='flex justify-center items-center w-full h-screen'>
        <div
          className='flex flex-col justify-center items-center w-min-96 p-10 bg-white rounded-lg shadow-2xl relative'
          style={{ width: '30rem' }}
        >
          <ToastContainer
            position='top-center'
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            className='absolute -top-24'
            closeButton={false}
          />
          <form className='w-full flex flex-col '>
            <h1 className='text-2xl font-semibold '>Recupera Password</h1>
            <span className='text-base'>
              Inserisci la tua email e ti invieremo le istruzioni per cambiarla.
            </span>
            <div>
              <Input
                val={recoveryEmail}
                change={(e) => setRecoveryEmail(e.target.value)}
                type='email'
                place='Email'
                mt='1rem 0'
              />
            </div>

            <Button
              title='Recupera Password'
              click={() =>
                recoveryEmail
                  ? sendRecoveryEmail()
                  : toast.error('Please insert a valid Email!!!', {
                      style: { background: '#ffe5e6', color: '#e20817' },
                      className: 'rounded-full',
                    })
              }
            />
            <span
              className='text-center text-base cursor-pointer'
              onClick={() => navigate('/login')}
            >
              Torna Indietro
            </span>
          </form>
        </div>
      </div>
    </>
  )
}
export default RecuperaPassword
