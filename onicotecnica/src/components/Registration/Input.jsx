const Input = ({ val, change, type, place, mt }) => {
  return (
    <input
      value={val}
      onChange={change}
      type={type}
      placeholder={place}
      className='border-2 font-normal rounded-md w-full h-12 pl-6'
      style={{
        fontFamily: 'Mona Sans',
        margin: mt,
        backgroundColor: '#F4F5FB',
        color: '#5F6166',
      }}
    />
  )
}
export default Input
