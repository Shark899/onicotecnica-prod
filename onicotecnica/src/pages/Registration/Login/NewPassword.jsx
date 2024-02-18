import { useGlobalContext } from '../../../context'
import Button from '../../../components/Registration/Button'
import Input from '../../../components/Registration/Input'

const NewPassword = () => {
  const { password, setPassword, resetPassword } = useGlobalContext()

  return (
    <>
      <div className='flex justify-center items-center w-full h-screen'>
        <div
          className='flex flex-col justify-center items-center w-min-96 p-10 bg-white rounded-lg shadow-2xl'
          style={{ width: '30rem' }}
        >
          <form className='w-full flex flex-col '>
            <h1 className='text-2xl font-semibold '>Nuova Password</h1>
            <span className='text-xs'>
              Inserisci la tua email e ti invieremo le istruzioni per cambiarla.
            </span>
            <div>
              <Input
                val={password}
                change={(e) => setPassword(e.target.value)}
                type='password'
                place='Scegli una Password'
                mt='1rem 0'
              />
            </div>

            <Button
              title='Cambia Password'
              click={() => (password ? resetPassword() : '')}
            />
          </form>
        </div>
      </div>
    </>
  )
}
export default NewPassword
