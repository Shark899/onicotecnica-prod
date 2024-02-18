import { useGlobalContext } from '../../../context'
import { useNavigate } from 'react-router-dom'
import Button from '../../../components/Registration/Button'
import Input from '../../../components/Registration/Input'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
import { useEffect } from 'react'
const NomeCompleto = () => {
  const {
    name,
    setName,
    email,
    password,
    pagato,
    login,
    register,
    lastName,
    setLastName,
    setId,
  } = useGlobalContext()
  const navigate = useNavigate()

  const saveToDBandSelectPlan = async () => {
    if (name) {
      const created = await axios.post('http://localhost:3000/api/v1/user', {
        name,
        lastName,
        email,
        password,
      })
      setId(created.data.data._id)
      console.log(created.data.data._id)
      register()
      navigate('/selezione_piano')
    } else {
      toast.error('Please insert your full name!!!', {
        style: { background: '#ffe5e6', color: '#e20817' },
        className: 'rounded-full',
      })
    }
  }

  const goHome = () => {
    if (name) {
      login()
    } else {
      toast.error('Please insert your full name!!!', {
        style: { background: '#ffe5e6', color: '#e20817' },
        className: 'rounded-full',
      })
    }
  }

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
          <h1 className='text-2xl font-semibold '>Completa Profilo</h1>
          <h5 className=' text-gray-500 my-4 font-normal text-base'>
            Inserisci il tuo nome completo
          </h5>
          <form className='w-full'>
            <div>
              <Input
                val={name}
                change={(e) => setName(e.target.value)}
                type='text'
                place='Nome'
                mt='0.5rem 0'
              />
              <Input
                val={lastName}
                change={(e) => setLastName(e.target.value)}
                type='text'
                place='Cognome'
                mt='0.5rem 0'
              />
            </div>
            <p className='text-xs font-normal mb-6 '>
              Questo nome che comparirà su ogni attestato.
            </p>
            <span className='text-xs font-normal leading-none'>
              Cliccando su “Continua” confermi di accettare la nostra{' '}
              <span className=' font-medium ' style={{ color: '#06F' }}>
                Informativa sulla Privacy
              </span>{' '}
              e la{' '}
              <span className=' font-medium ' style={{ color: '#06F' }}>
                Policy sui Cookie
              </span>{' '}
              . Utilizzeremo le tue informazioni per personalizzare e migliorare
              la tua esperienza. Puoi modificare le tue preferenze di
              comunicazione in qualsiasi momento.
            </span>
            <Button
              title='Continua'
              click={!pagato ? () => saveToDBandSelectPlan() : () => goHome()}
            />
          </form>
        </div>
      </div>
    </>
  )
}
export default NomeCompleto
