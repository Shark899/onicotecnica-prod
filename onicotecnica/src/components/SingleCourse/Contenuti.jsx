import mainImage from '../../assets/singleCourse.jpg'
const Contenuti = () => {
  const contenuti = [
    {
      id: 1,
      nomeContenuto: 'Nome Lezione',
      lunghezzaVideo: '2 min',
      img: mainImage,
    },
    {
      id: 2,
      nomeContenuto: 'Nome Lezione',
      lunghezzaVideo: '2 min',
      img: mainImage,
    },
    {
      id: 3,
      nomeContenuto: 'Nome Lezione',
      lunghezzaVideo: '2 min',
      img: mainImage,
    },
    {
      id: 4,
      nomeContenuto: 'Nome Lezione',
      lunghezzaVideo: '2 min',
      img: mainImage,
    },
    {
      id: 5,
      nomeContenuto: 'Nome Lezione',
      lunghezzaVideo: '2 min',
      img: mainImage,
    },
    {
      id: 6,
      nomeContenuto: 'Nome Lezione',
      lunghezzaVideo: '2 min',
      img: mainImage,
    },
  ]

  return (
    <>
      {contenuti.map((cont) => {
        return (
          <div key={cont.id} className='flex flex-col'>
            <div className='flex mt-8 mr-8'>
              <div>
                <img src={cont.img} alt='' className='w-40 rounded-lg' />
              </div>
              <div className='flex flex-col justify-center ml-4 '>
                <span className='flex items-center cursor-pointer'>
                  {cont.nomeContenuto}
                </span>
                <span className=' mt-4 text-black text-xs'>
                  {cont.lunghezzaVideo}
                </span>
              </div>
            </div>
            <hr className='w-full mt-4 h-2' />
          </div>
        )
      })}
    </>
  )
}
export default Contenuti
