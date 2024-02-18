import { Link } from 'react-router-dom'
import axios from 'axios'
import { useGlobalContext } from '../context'

const SideBar = () => {
  const { id } = useGlobalContext()
  const openSession = async (e) => {
    e.preventDefault()
    const getter = await axios.get(`http://localhost:3000/api/v1/user/${id}`)
    console.log(getter.data.data[0].clientStripeId)
    const redirectUrl = await axios.post(
      'http://localhost:3000/create-portal-session',
      { clientId: getter.data.data[0].clientStripeId }
    )

    window.location.replace(redirectUrl.data.data.url)
  }
  return (
    <section className=' flex flex-col justify-center items-center'>
      <div
        className='flex flex-col justify-start items-start'
        style={{ width: '43rem' }}
      >
        <h1 className='text-3xl font-bold mb-4 mt-24'>Impostazioni</h1>
        <span>Modifica e aggiorna le tue preferenze</span>
        <div className='flex space-x-10 my-4'>
          <Link to='/options/modify' className='font-semibold cursor-pointer'>
            Profilo
          </Link>
          <Link
            to='/options/password_change'
            className='font-semibold cursor-pointer'
          >
            Password
          </Link>
          <button onClick={openSession}>Abbonamento</button>
          <Link to='/options/notify' className='font-semibold cursor-pointer'>
            Notifiche
          </Link>
        </div>
      </div>
    </section>
  )
}
export default SideBar
