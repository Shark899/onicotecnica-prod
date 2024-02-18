import { TiTick } from 'react-icons/ti'
import { useGlobalContext } from '../../context'
import { useNavigate } from 'react-router-dom'

import Button from './Button'
const StretchedPlan = () => {
  const { plans, setPlans } = useGlobalContext()
  const navigate = useNavigate()

  const navigateToPagamento = () => {
    if (plans == 'Premium') {
      setPlans('Premium')
      navigate('/pagamento')
    } else if (plans == 'Plus') {
      setPlans('Plus')
      navigate('/pagamento')
    } else {
      setPlans('Base')
      navigate('/pagamento')
    }
  }
  return (
    <>
      <div className='w-screen h-16 flex flex-col justify-between '>
        <div className='w-full flex justify-between items-center mt-5 px-8'>
          <h1>LOGO</h1>
          <h1>Esci</h1>
        </div>
        <hr className='w-full ' style={{ border: '1px solid #D0D5DD' }} />
      </div>
      <div
        className='flex justify-center items-center w-full h-1/4'
        style={{ background: ' #F8F7F4' }}
      >
        <div className='flex flex-col justify-center items-center p-10  w-full'>
          <h1 className='text-2xl font-semibold '>Seleziona un piano</h1>
          <div className='flex space-x-2 w-full justify-center mt-4'>
            <div
              className='rounded-lg flex flex-col text-white w-5/12 h-32 border-gray-400 border-2 relative  p-2'
              style={{ background: '#C7B0FF' }}
              onClick={() => setPlans('Premium')}
            >
              <span>Premium</span>

              {plans == 'Premium' ? (
                <div className='absolute w-6 h-6 bg-white rounded-full bottom-2 right-2 flex justify-center items-center'>
                  <TiTick className='text-black w-4 h-4' />
                </div>
              ) : (
                ''
              )}
            </div>
            <div
              className='rounded-lg flex flex-col text-white w-5/12  h-32 border-gray-400 relative border-2 p-2'
              style={{ background: '#FF90B7' }}
              onClick={() => setPlans('Plus')}
            >
              <span>Plus</span>

              {plans == 'Plus' ? (
                <div className='absolute w-6 h-6 bg-white rounded-full bottom-2 right-2 flex justify-center items-center'>
                  <TiTick className='text-black w-4 h-4' />
                </div>
              ) : (
                ''
              )}
            </div>
            <div
              className='rounded-lg flex flex-col text-white w-5/12  h-32 border-gray-400 relative border-2 p-2'
              style={{ background: '#FF9F76' }}
              onClick={() => setPlans('Base')}
            >
              <span>Base</span>

              {plans == 'Base' ? (
                <div className='absolute w-6 h-6 bg-white rounded-full bottom-2 right-2 flex justify-center items-center'>
                  <TiTick className='text-black w-4 h-4' />
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
          <div className='flex justify-between text-sm font-semibold mt-6 w-full'>
            <span style={{ color: '#5F6166' }}>Quota Mensile</span>
            <span style={{ color: '#0D0C22' }}>
              {plans == 'Premium'
                ? '17.99€'
                : plans == 'Plus'
                ? '12.99€'
                : '7.99€'}
            </span>
          </div>
          <hr className='w-full mt-4 ' style={{ color: '#D0D5DD' }} />
          <div className='flex justify-between text-sm font-semibold mt-6 w-full'>
            <span style={{ color: '#5F6166' }}>Catalogo</span>
            <span style={{ color: '#0D0C22' }}>Tutto Incluso</span>
          </div>
          <hr className='w-full mt-4 ' style={{ color: '#D0D5DD' }} />
          <div className='flex justify-between text-sm font-semibold mt-6 w-full'>
            <span style={{ color: '#5F6166' }}>Lezioni live</span>
            <span style={{ color: '#0D0C22' }}>
              {plans == 'Base' ? 'No' : 'Ogni Settimana'}
            </span>
          </div>
          <hr className='w-full mt-4 ' style={{ color: '#D0D5DD' }} />
          <div className='flex justify-between text-sm font-semibold mt-6 w-full'>
            <span style={{ color: '#5F6166' }}>Supporto</span>
            <span style={{ color: '#0D0C22' }}>
              {plans == 'Premium' ? 'Si' : 'No'}
            </span>
          </div>
          <hr className='w-full mt-4 ' style={{ color: '#D0D5DD' }} />
          <div className='flex justify-between text-sm font-semibold mt-6 w-full mb-6'>
            <span style={{ color: '#5F6166' }}>Certificazioni</span>
            <span style={{ color: '#0D0C22' }}>
              {plans == 'Base' ? 'No' : 'Si'}
            </span>
          </div>
          <Button
            title='Inizia adesso'
            click={() => navigateToPagamento()}
            rounded='10px'
          />
        </div>
      </div>
    </>
  )
}
export default StretchedPlan
