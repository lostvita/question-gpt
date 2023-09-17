import classNames from 'classnames'
import { ChangeEvent } from 'react'

interface IProps {
  name: string
  type?: string
  onChange?: (val: string) => void
}

function InputGroup(props: IProps) {
  const { name, type = 'text', onChange = () => {} } = props
  const isText = type === 'text'

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  const inputCs = classNames({
    'w-1/2 px-2 py-1 border border-gray-400 rounded shadow shadow-gray-300 outline-none focus:border-blue-500/50 focus:shadow-blue-500/50':
      true,
    'h-40': !isText,
  })

  return (
    <div className='input-group flex justify-center items-start mb-10'>
      <label htmlFor='input' className='w-28 text-base mr-1'>
        {name}
      </label>
      <input
        id='input'
        type={type}
        className={inputCs}
        onChange={handleChange}
      />
    </div>
  )
}

export default InputGroup
