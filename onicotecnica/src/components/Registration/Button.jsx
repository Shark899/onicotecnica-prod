const Button = ({ title, click, rounded = '100px' }) => {
  return (
    <button
      onClick={click}
      type='button'
      className=' buttons'
      style={{ borderRadius: rounded }}
    >
      {title}
    </button>
  )
}
export default Button
