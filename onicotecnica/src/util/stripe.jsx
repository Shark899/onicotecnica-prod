import { useState, useEffect } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from '@stripe/react-stripe-js'
import { Navigate } from 'react-router-dom'

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
// This is your test public API key.
const stripePromise = loadStripe(
  'pk_test_51OZ8t4Dswlgz2c5lsT0FlYzQ5hQyQI7iRBR5amHRwfY2j38DymVVEx7opqcIGpDl8jZOtHvsqJgh87yKOmdK6kA500fefoPIPV'
)

export const CheckoutForm = () => {
  const [clientSecret, setClientSecret] = useState('')

  useEffect(() => {
    // Create a Checkout Session as soon as the page loads
    fetch('/create-checkout-session', {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
  }, [])

  return (
    <div>
      {clientSecret && (
        <EmbeddedCheckoutProvider
          stripe={stripePromise}
          options={{ clientSecret }}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      )}
    </div>
  )
}

export const Return = () => {
  const [status, setStatus] = useState(null)
  const [customerEmail, setCustomerEmail] = useState('')

  useEffect(() => {
    const queryString = window.location.search
    const urlParams = new URLSearchParams(queryString)
    const sessionId = urlParams.get('session_id')

    fetch(`/session-status?session_id=${sessionId}`)
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.status)
        setCustomerEmail(data.customer_email)
      })
  }, [])

  if (status === 'open' || status === 'complete') {
    return <Navigate to='/main/home' />
  }

  return null
}

// const App = () => {
//   return (
//     <div className='App'>
//       <Router>
//         <Routes>
//           <Route path='/checkout' element={<CheckoutForm />} />
//           <Route path='/return' element={<Return />} />
//         </Routes>
//       </Router>
//     </div>
//   )
// }

// export default App
