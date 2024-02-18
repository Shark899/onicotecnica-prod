const Abbonamento = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className='flex flex-col items-start justify-start p-10 '>
        <div
          className='border-2 p-10 rounded-3xl flex flex-col justify-start items-start min-h-56'
          style={{ borderColor: '#F0F0F1', width: '43rem' }}
        >
          <h1 className='text-2xl font-bold'>Abbonamento</h1>
        </div>
        <div
          className='border-2 p-10 rounded-3xl flex flex-col justify-start items-start mt-6 min-h-56'
          style={{ borderColor: '#F0F0F1', width: '43rem' }}
        >
          <h1 className='text-2xl font-bold'>Metodo di Pagamento</h1>
        </div>
      </div>
    </div>
  )
}
export default Abbonamento
