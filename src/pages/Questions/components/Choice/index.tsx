import type { RadioChangeEvent } from 'antd'
import { Radio, Space } from 'antd'
import { convert } from '../../../../constants'
import { useState } from 'react'

interface IProps {
  data: string[]
  onChange?: (val: number) => void
}

function Choice(props: IProps) {
  const { data, onChange = () => {} } = props
  const [value, valueSet] = useState(-1)

  const handleChange = (e: RadioChangeEvent) => {
    const val = e.target.value
    valueSet(val)
    onChange(val)
  }

  const renderItems = () => {
    return data.map((choice, idx) => {
      const content = convert(idx) + ' ' + choice
      return (
        <Radio key={idx} value={idx} className='text-base'>
          {content}
        </Radio>
      )
    })
  }

  return (
    <div className='pl-2 mt-2'>
      <Radio.Group onChange={handleChange} value={value}>
        <Space direction='vertical' size='middle'>
          {renderItems()}
        </Space>
      </Radio.Group>
    </div>
  )
}

export default Choice
