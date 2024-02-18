import Materiale from './Materiale'
const MaterialeContainer = ({ sezione }) => {
  return (
    <div className='mt-10'>
      <span style={{ color: '#755c87' }} className='text-xl font-bold'>
        {sezione}
      </span>
      <Materiale />
    </div>
  )
}
export default MaterialeContainer
