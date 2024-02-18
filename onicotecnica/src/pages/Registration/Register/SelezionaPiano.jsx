import Plan from '../../../components/Registration/Plan'
import { useMediaQuery } from '@custom-react-hooks/all'
import StretchedPlan from '../../../components/Registration/StretchedPlan'
const SelezionaPiano = () => {
  const under = useMediaQuery('(max-width : 1024px)')
  {
    if (under) {
      return <StretchedPlan />
    }
    return (
      <>
        <div className='w-screen h-16 flex flex-col justify-between '>
          <div className='w-full flex justify-between items-center mt-5 px-16'>
            <h1>LOGO</h1>
            <h1>Esci</h1>
          </div>
          <hr className='w-full ' style={{ border: '1px solid #D0D5DD' }} />
        </div>
        <div className='flex justify-center items-center w-full h-1/4'>
          <div className='flex flex-col justify-center items-center w-auto p-10 '>
            <h1 className='text-2xl font-semibold '>Seleziona un piano</h1>
            <h5 className=' text-gray-500 my-4 font-normal text-base'>
              Puoi passare a un altro piano o disdire in qualsiasi momento.
            </h5>
            <form className='w-full flex space-x-4'>
              <Plan
                piano='Premium'
                prezzo='17,99'
                tipo='base'
                benefits='Corsi+Live+Supporto'
                catalogo='Tutto incluso'
                live='Ogni Settimana'
                supporto='Si'
                certificazioni='Si'
              />
              <Plan
                piano='Plus'
                prezzo='12,99'
                tipo='base'
                benefits='Corsi+Live'
                catalogo='Tutto incluso'
                live='Ogni Settimana'
                supporto='No'
                certificazioni='Si'
              />
              <Plan
                piano='Base'
                prezzo='7,99'
                tipo='base'
                benefits='Solo Corsi'
                catalogo='Tutto incluso'
                live='No'
                supporto='No'
                certificazioni='No'
              />
            </form>
          </div>
        </div>
      </>
    )
  }
}
export default SelezionaPiano
