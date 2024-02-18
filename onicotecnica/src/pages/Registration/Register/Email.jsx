import { useGlobalContext } from '../../../context'
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/Registration/Button'
import Input from '../../../components/Registration/Input'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const Email = () => {
  const { email, setEmail } = useGlobalContext()
  const navigate = useNavigate()
  return (
    <>
      <div className='flex justify-center items-center w-full h-screen'>
        <div
          className='flex flex-col justify-center items-start w-min-96 p-10 bg-white rounded-lg shadow-2xl relative'
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

          <h1 className='text-2xl font-semibold '>Inserisci la tua email</h1>
          <h5 className=' text-gray-500 my-4 font-normal text-base'>
            Potrai accedere ad Onicotecnica+ con questa email.
          </h5>
          <form className='w-full'>
            <div>
              <Input
                val={email}
                change={(e) => setEmail(e.target.value)}
                type='email'
                place='Email'
                mt='0.5rem 0'
              />
            </div>
            <Button
              title='Continua'
              click={() =>
                email
                  ? navigate('/password')
                  : toast.error('Please insert a valid Email!!!', {
                      style: { background: '#ffe5e6', color: '#e20817' },
                      className: 'rounded-full',
                    })
              }
            />
          </form>
        </div>
      </div>
    </>
  )
}
export default Email
