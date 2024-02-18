const Notifiche = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col items-start justify-start p-10 '>
        <div
          className='border-2 p-10 rounded-3xl flex flex-col justify-start items-start '
          style={{ borderColor: '#F0F0F1', width: '43rem', minHeight: '50rem' }}
        >
          <div className='flex justify-between items-center w-full'>
            <h1 className='text-2xl font-bold'>Notifiche</h1>
            <button
              type='button'
              className=' h-9 px-4 rounded-md text-white font-semibold'
              style={{ background: '#C3C3C6' }}
            >
              Salva
            </button>
          </div>
          <span className='mt-4 mb-6'>
            Le tue email vengono inviate all’indirizzo
          </span>
        </div>
      </div>
    </div>
  )
}
export default Notifiche
