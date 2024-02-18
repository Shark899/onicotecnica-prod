import { redirect } from 'react-router-dom'

const PaymentPlan = ({ piano, prezzo }) => {
  return (
    <div className='flex justify-between items-center border-2 rounded-md p-4 mb-2'>
      <div className='flex flex-col'>
        <span className='text-base font-semibold'>Piano {piano}</span>
        <span className='text-sm font-normal'>€{prezzo} al mese</span>
      </div>

      <span
        onClick={() => redirect('/selezione_piano')}
        className='cursor-pointer text-sm'
        style={{ color: '#0D0C22' }}
      >
        Cambia
      </span>
    </div>
  )
}
export default PaymentPlan
