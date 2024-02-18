import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
const stripePromise = loadStripe(
  'pk_test_51OZ8t4Dswlgz2c5lsT0FlYzQ5hQyQI7iRBR5amHRwfY2j38DymVVEx7opqcIGpDl8jZOtHvsqJgh87yKOmdK6kA500fefoPIPV'
)

import Benvenuto from './pages/Registration/Login/Benvenuto.jsx'
import RecuperaPassword from './pages/Registration/Login/RecuperaPassword.jsx'
import SentRecovery from './pages/Registration/Login/SentRecovery.jsx'
import MainPage from './pages/Main/MainPage.jsx'
import Protected from './components/Protected.jsx'
import ImpostanzioniMain from './pages/Impostazioni/ImpostanzioniMain.jsx'
import Abbonamento from './pages/Impostazioni/Abbonamento.jsx'
import CambiaPassword from './pages/Impostazioni/CambiaPassword.jsx'
import ModificaProfilo from './pages/Impostazioni/ModificaProfilo.jsx'
import Notifiche from './pages/Impostazioni/Notifiche.jsx'
import ScambiaMonete from './pages/Impostazioni/ScambiaMonete.jsx'
import Home from './pages/Main/Home.jsx'
import Struttura from './pages/Main/Struttura.jsx'
import Decorazione from './pages/Main/Decorazione.jsx'
import Live from './pages/Main/Live.jsx'
import Community from './pages/Main/Community.jsx'
import Progressi from './pages/Impostazioni/Progressi.jsx'
import SelezionaPiano from './pages/Registration/Register/SelezionaPiano.jsx'
import Email from './pages/Registration/Register/Email.jsx'
import Password from './pages/Registration/Register/Password.jsx'
import NomeCompleto from './pages/Registration/Register/NomeCompleto.jsx'
import Pagamento from './pages/Registration/Register/Pagamento.jsx'
import NewPassword from './pages/Registration/Login/NewPassword.jsx'
import Riattiva from './pages/Registration/Riattiva.jsx'
import { Return } from './util/stripe.jsx'
import { CheckoutForm } from './util/stripe.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import LiveRoom from './pages/Main/LiveRoom.jsx'

import './index.css'
import AppProvider from './context.jsx'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Email />,
      },
      {
        path: '/login',
        element: <Benvenuto />,
      },
      {
        path: '/password',
        element: <Password />,
      },
      {
        path: '/nome_completo',
        element: <NomeCompleto />,
      },
      {
        path: '/selezione_piano',
        element: <SelezionaPiano />,
      },
      {
        path: '/pagamento',
        element: <Pagamento />,
      },
      {
        path: '/sent_recovery',
        element: <SentRecovery />,
      },
      {
        path: '/reset_password',
        element: <RecuperaPassword />,
      },
      {
        path: '/new_password',
        element: <NewPassword />,
      },
      {
        path: '/riattiva',
        element: <Riattiva />,
      },
      {
        path: '/checkout',
        element: <CheckoutForm />,
      },
      {
        path: '/return',
        element: <Return />,
      },
    ],
  },
  {
    path: '/main',
    element: (
      <Protected>
        <MainPage />
      </Protected>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/main/home',
        element: <Home />,
      },
      {
        path: '/main/struttura',
        element: <Struttura />,
      },
      {
        path: '/main/decorazione',
        element: <Decorazione />,
      },
      {
        path: '/main/live',
        element: <Live />,
      },

      {
        path: '/main/community',
        element: <Community />,
      },
      {
        path: '/main/progressi',
        element: <Progressi />,
      },
    ],
  },
  {
    path: '/options',
    element: (
      <Protected>
        <ImpostanzioniMain />
      </Protected>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/options/modify',
        element: <ModificaProfilo />,
      },
      {
        path: '/options/password_change',
        element: <CambiaPassword />,
      },
      {
        path: '/options/notify',
        element: <Notifiche />,
      },
      {
        path: '/options/abbonamento',
        element: <Abbonamento />,
      },
      {
        path: '/options/money_exchange',
        element: <ScambiaMonete />,
      },
    ],
  },
  {
    path: '/main/live-room/:id',
    element: (
      <Protected>
        <LiveRoom />
      </Protected>
    ),
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <Elements stripe={stripePromise}>
    <AppProvider>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </AppProvider>
  </Elements>
)
