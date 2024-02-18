import { useGlobalContext } from '../../../context'
import Button from '../../../components/Registration/Button'
import { useNavigate } from 'react-router-dom'
import PaymentPlan from '../../../components/Registration/PaymentPlan'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'

import axios from 'axios'
const Pagamento = () => {
  const navigate = useNavigate()
  const elements = useElements()
  const stripe = useStripe()

  const { name, email, id, plans } = useGlobalContext()

  const payPremium = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    const response = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    })

    console.log('Creeating payment intent...')
    // SERVER
    const clientSecret = await axios.post(
      'http://localhost:3000/getPayPremium',
      {
        paymentMethodId: response.paymentMethod.id,
        name,
        email,
      }
    )
    console.log(clientSecret)
    const patch = await axios.patch(`http://localhost:3000/api/v1/user/${id}`, {
      clientStripeId: clientSecret.data.clientId,
      pagato: true,
    })
    console.log(patch)
    navigate('/login')
    return clientSecret
  }

  const payPlus = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    const response = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    })

    console.log('Creeating payment intent...')
    // SERVER
    const clientSecret = await axios.post('http://localhost:3000/getPayPlus', {
      paymentMethodId: response.paymentMethod.id,
      name,
      email,
    })
    console.log(clientSecret)
    const patch = await axios.patch(`http://localhost:3000/api/v1/user/${id}`, {
      clientStripeId: clientSecret.data.clientId,
      pagato: true,
    })
    console.log(patch)
    navigate('/login')
    return clientSecret
  }
  const payBase = async (e) => {
    e.preventDefault()

    if (!stripe || !elements) {
      return
    }

    const response = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    })

    console.log('Creating payment intent...')
    // SERVER
    const clientSecret = await axios.post('http://localhost:3000/getPayBase', {
      paymentMethodId: response.paymentMethod.id,
      name,
      email,
    })
    console.log(clientSecret)

    const patch = await axios.patch(`http://localhost:3000/api/v1/user/${id}`, {
      clientStripeId: clientSecret.data.clientId,
      pagato: true,
    })
    console.log(patch)
    navigate('/login')
    return clientSecret
  }

  return (
    <>
      <div className='flex justify-center items-center w-full  h-screen'>
        <div
          className='flex flex-col justify-center items-start w-min-96 p-10 bg-white rounded-lg shadow-2xl'
          style={{ width: '30rem' }}
        >
          <h1 className='text-2xl font-semibold ' style={{ color: '#0D0C22' }}>
            Conferma e inizia
          </h1>

          <form className='w-full mt-4'>
            {plans === 'Premium' && (
              <PaymentPlan piano='Premium' prezzo='17,99' />
            )}
            {plans === 'Plus' && <PaymentPlan piano='Plus' prezzo='12,99' />}
            {plans === 'Base' && <PaymentPlan piano='Base' prezzo='7,99' />}
            <div className='my-10'>
              <CardElement />
            </div>
            <span className='text-xs text-gray-500 '>
              Cliccando su “Conferma e Paga” accetti di aver letto le{' '}
              <span className=' font-medium ' style={{ color: '#06F' }}>
                Condizioni generali di abbonamento
              </span>
              . Addebiteremo periodicamente la tariffa mensile sul metodo di
              pagamento a te associato. Puoi disdire in qualsiasi momento, con
              effetto dal termine del periodo di fatturazione.
            </span>
            <Button
              title='Conferma e paga'
              click={
                plans === 'Premium'
                  ? (e) => payPremium(e)
                  : plans === 'Plus'
                  ? (e) => payPlus(e)
                  : (e) => payBase(e)
              }
            />
          </form>
        </div>
      </div>
    </>
  )
}
export default Pagamento
