import { type } from 'os'
import { BsFillSuitHeartFill } from 'react-icons/bs'

type ItemProps = {
  number: number
  title: string
  description: string
}

function Item({ number, title, description }: ItemProps) {
  return (
    <div className='flex items-center gap-4 mb-8'>
      <div className="icons relative flex justify-center items-center w-1/3">
        <div className='absolute text-primary'>
          <BsFillSuitHeartFill size='4em' />
        </div>
        <p className='z-20 text-white'>
          0{number}
        </p>
      </div>
      <div className='w-2/3'>
        <h3 className='text-md font-semibold'>{title}</h3>
        <p className='text-xs text-text font-normal'>{description}</p>
      </div>
    </div>
  )
}

export default Item