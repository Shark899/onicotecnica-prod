import mainImage from '../../assets/profile_fake.png'
const materiale = [
  {
    id: 1,
    nomeMateriale: 'Nome Materiale',
    nomeMarca: 'Nome Marca',
    img: mainImage,
  },
  {
    id: 2,
    nomeMateriale: 'Nome Materiale',
    nomeMarca: 'Nome Marca',
    img: mainImage,
  },
  {
    id: 3,
    nomeMateriale: 'Nome Materiale',
    nomeMarca: 'Nome Marca',
    img: mainImage,
  },
  {
    id: 4,
    nomeMateriale: 'Nome Materiale',
    nomeMarca: 'Nome Marca',
    img: mainImage,
  },
  {
    id: 5,
    nomeMateriale: 'Nome Materiale',
    nomeMarca: 'Nome Marca',
    img: mainImage,
  },
  {
    id: 6,
    nomeMateriale: 'Nome Materiale',
    nomeMarca: 'Nome Marca',
    img: mainImage,
  },
]

const Materiale = () => {
  return (
    <>
      <div>
        <div className='grid grid-cols-3'>
          {materiale.map((mat) => {
            return (
              <div className='flex mt-8 mr-8' key={mat.id}>
                <div>
                  <img src={mat.img} alt='' className='w-16 h-16' />
                </div>
                <div className='flex flex-col justify-center ml-4 '>
                  <span className='flex items-center cursor-pointer'>
                    {mat.nomeMateriale}
                  </span>
                  <span className=' mt-4 text-black text-xs'>
                    {mat.nomeMarca}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
        <hr className='w-full mt-4 h-2' />
      </div>
    </>
  )
}

export default Materiale
