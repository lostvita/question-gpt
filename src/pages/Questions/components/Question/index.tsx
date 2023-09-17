import QuestionTitle from '../QuestionTitle'
import Choice from '../Choice'
import { QuestionItem } from '../../../../request'

interface IProps {
  index: number
  data: QuestionItem
  onChange?: (val: number, index: number) => void
}

function Question(props: IProps) {
  const { data, index, onChange = () => {} } = props
  const handleChange = (val: number) => {
    onChange(val, index)
  }
  return (
    <div className='w-full py-2 px-3 mb-4 bg-gray-50 rounded shadow shadow-gray-100 text-sm'>
      <QuestionTitle index={1} title={data.question} />
      <Choice data={data.choice} onChange={handleChange} />
    </div>
  )
}

export default Question
