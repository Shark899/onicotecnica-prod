import { useGlobalContext } from '../../../context'
import Button from '../../../components/Registration/Button'
import Input from '../../../components/Registration/Input'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from 'axios'
const Benvenuto = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    signIn,
    swithAuth,
    setSwitchAuth,
  } = useGlobalContext()
  const navigate = useNavigate()
  const delay = (ms) => new Promise((res) => setTimeout(res, ms))
  const login = async () => {
    signIn(email, password, swithAuth, setSwitchAuth)
    const user = await axios.post('http://localhost:3000/api/v1/user/email', {
      email,
    })
    localStorage.setItem('name', user.data.data.name)
    localStorage.setItem('lastName', user.data.data.lastName)
    localStorage.setItem('email', user.data.data.email)
    localStorage.setItem('id', user.data.data._id)
    await delay(2000)
    if (localStorage.getItem('Token')) {
      setEmail('')
      setPassword('')
      navigate('/main/home')
      setSwitchAuth(!swithAuth)
    } else {
      toast.error('Invalid Credentials !!!', {
        style: { background: '#ffe5e6', color: '#e20817' },
        className: 'rounded-full',
      })
    }
  }
  return (
    <>
      <div className='flex justify-center items-center w-full h-screen'>
        <div
          className='flex flex-col justify-center items-center w-min-96 p-10 bg-white rounded-lg shadow-2xl relative'
          style={{ width: '30rem' }}
        >
          <ToastContainer
            position='top-center'
            autoClose={5000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            className='absolute -top-28'
            closeButton={false}
          />
          <h1 className='text-2xl font-semibold '>Benvenuta</h1>
          <form className='w-full flex flex-col '>
            <div>
              <Input
                val={email}
                change={(e) => setEmail(e.target.value)}
                type='email'
                place='Email'
                mt='1rem 0'
              />
            </div>
            <div>
              <Input
                val={password}
                change={(e) => setPassword(e.target.value)}
                type='password'
                place='Password'
                mt='0'
              />
            </div>

            <Button
              title='Entra'
              click={(e) =>
                email && password
                  ? login(e)
                  : toast.error('Please insert a valid email and password!!!', {
                      style: { background: '#ffe5e6', color: '#e20817' },
                      className: 'rounded-full',
                    })
              }
            />
            <span
              className='text-center text-base cursor-pointer'
              onClick={() => navigate('/reset_password')}
            >
              Password Dimenticata? Recupera
            </span>
          </form>
        </div>
      </div>
    </>
  )
}
export default Benvenuto
