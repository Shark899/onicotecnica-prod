const menu = [
  {
    id: 1,
    img: logo,
    message: 'Alessia Pezzella ha commentato il tuo post nella community',
    minuti: '2m fa',
  },
  {
    id: 2,
    img: logo,
    message: 'Alessia Pezzella ha commentato il tuo post nella community',
    minuti: '2m fa',
  },
  {
    id: 3,
    img: logo,
    message: 'Alessia Pezzella ha commentato il tuo post nella community',
    minuti: '2m fa',
  },
  {
    id: 4,
    img: logo,
    message: 'Alessia Pezzella ha commentato il tuo post nella community',
    minuti: '2m fa',
  },
  {
    id: 5,
    img: logo,
    message: 'Alessia Pezzella ha commentato il tuo post nella community',
    minuti: '2m fa',
  },
  {
    id: 6,
    img: logo,
    message: 'Alessia Pezzella ha commentato il tuo post nella community',
    minuti: '2m fa',
  },
]

import logo from '../../assets/profile_fake.png'
const Notifiche = () => {
  return (
    <div className='flex flex-col bg-gray-200 p-10 max-w-md space-y-6'>
      {menu.map((men) => {
        return (
          <div className='flex space-x-6' key={men.id}>
            <img src={men.img} alt='' className=' h-10 rounded-full' />
            <span className='text-sm'>{men.message}</span>
            <span className='text-xs'>{men.minuti}</span>
          </div>
        )
      })}
    </div>
  )
}
export default Notifiche
