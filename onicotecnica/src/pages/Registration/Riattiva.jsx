import Button from '../../components/Registration/Button'
import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../../context'

const Riattiva = () => {
  const navigate = useNavigate()
  const { name } = useGlobalContext()
  return (
    <>
      <div className='flex justify-center items-center w-full h-screen'>
        <div
          className='flex flex-col justify-center items-center w-min-96 p-10 bg-white rounded-lg shadow-2xl'
          style={{ width: '30rem' }}
        >
          <form className='w-full flex flex-col justify-center items-center'>
            <h1 className='text-2xl font-semibold '>Hey{name} </h1>
            <span className='text-base mb-4'>
              Ti manca veramente poco per tornare a studiare
            </span>

            <Button
              title='Completa Abbonamento'
              click={() => navigate('/selezione_piano')}
            />
          </form>
        </div>
      </div>
    </>
  )
}
export default Riattiva
