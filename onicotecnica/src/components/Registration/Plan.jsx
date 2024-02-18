import { useGlobalContext } from '../../context'
import Button from './Button'
import { useNavigate } from 'react-router-dom'
const Plan = ({
  piano,
  prezzo,
  benefits = '',
  catalogo = '',
  live = '',
  supporto = '',
  certificazioni = '',
}) => {
  const { plans, setPlans } = useGlobalContext()
  const navigate = useNavigate()
  const navigateToPagamento = () => {
    //   if (piano == 'Premium') {
    //     setPlans('Premium')
    //     window.location.replace('https://buy.stripe.com/test_fZe7ur6Ww94Add64gg')
    //   } else if (piano == 'Plus') {
    //     setPlans('Plus')

    //     window.location.replace('https://buy.stripe.com/test_6oE6qn1Cc1C8eha4gh')
    //   } else {
    //     setPlans('Base')
    //     window.location.replace('https://buy.stripe.com/test_28ocOLa8IcgM7SM002')
    //   }
    //   console.log(plans)
    // }
    if (piano == 'Premium') {
      setPlans('Premium')
      navigate('/pagamento')
    } else if (piano == 'Plus') {
      setPlans('Plus')
      navigate('/pagamento')
    } else {
      setPlans('Base')
      navigate('/pagamento')
    }
    // console.log(plans)
    // if (piano == 'Premium' || piano == 'Base') {
    //   navigate('/pagamento')
    // } else {
    //   navigate('/selezione_piano')
    // }
  }

  return (
    <div className='flex flex-col justify-start items-start border-2 rounded-md p-4 mb-2'>
      <div
        className='flex flex-col rounded-lg p-6 w-80 text-white font-semibold'
        style={
          piano == 'Premium'
            ? { backgroundColor: '#C7B0FF' }
            : piano == 'Plus'
            ? { backgroundColor: '#FF90B7' }
            : { backgroundColor: '#FF9F76' }
        }
      >
        <span className='text-base '>Piano {piano}</span>
        <span className='text-base '>{benefits}</span>
      </div>
      <div className='flex flex-col space-y-2 text-sm font-semibold mt-6'>
        <span style={{ color: '#5F6166' }}>Quota mensile</span>
        <span style={{ color: '#0D0C22' }}>{prezzo}€</span>
      </div>
      <hr className='w-full mt-4 ' style={{ color: '#D0D5DD' }} />
      <div className='flex flex-col space-y-2 text-sm font-semibold mt-6'>
        <span style={{ color: '#5F6166' }}>Catalogo</span>
        <span style={{ color: '#0D0C22' }}>{catalogo}</span>
      </div>
      <hr className='w-full mt-4 ' style={{ color: '#D0D5DD' }} />
      <div className='flex flex-col space-y-2 text-sm font-semibold mt-6'>
        <span style={{ color: '#5F6166' }}>Lezioni live</span>
        <span style={{ color: '#0D0C22' }}>{live}</span>
      </div>
      <hr className='w-full mt-4 ' style={{ color: '#D0D5DD' }} />
      <div className='flex flex-col space-y-2 text-sm font-semibold mt-6'>
        <span style={{ color: '#5F6166' }}>Supporto</span>
        <span style={{ color: '#0D0C22' }}>{supporto}</span>
      </div>
      <hr className='w-full mt-4 ' style={{ color: '#D0D5DD' }} />
      <div className='flex flex-col space-y-2 text-sm font-semibold mt-6'>
        <span style={{ color: '#5F6166' }}>Certificazioni</span>
        <span style={{ color: '#0D0C22' }}>{certificazioni}</span>
      </div>
      <Button
        title='Inizia adesso'
        click={() => navigateToPagamento()}
        rounded='10px'
      />
    </div>
  )
}
export default Plan
