import { useNavigate } from 'react-router-dom'
import { generateStatus } from '../../../../constants'
import RecordControl from '../RecordControl'
import { fetchQuestions } from '../../../../request'
import { useState } from 'react'
import { message } from 'antd'

interface IProps {
  id: string
  title: string
  status: generateStatus
}

function RecordItem(props: IProps) {
  const { id, title, status } = props
  const [penging, pengingSet] = useState<generateStatus>(generateStatus.loading)
  const navigate = useNavigate()
  const [messageApi, contextHolder] = message.useMessage()

  const handleRefresh = async () => {
    const data = await fetchQuestions({ id })
    if (!data || !data.status) return
    const val = data.res!.status
    pengingSet(val)
    if (val === generateStatus.loading) {
      messageApi.info('正在努力生成中，请稍后再试！')
    }
  }

  const handleView = () => {
    navigate('/questions', { state: { id } })
  }

  return (
    <div className='w-full flex items-center py-2 px-3 bg-gray-50 rounded shadow shadow-gray-100 mb-5 text-sm'>
      {contextHolder}
      <div
        className='w-2/3 overflow-hidden text-ellipsis whitespace-nowrap'
        title={title}
      >
        {title}
      </div>
      <RecordControl
        status={status || penging}
        onRefresh={handleRefresh}
        onView={handleView}
      />
    </div>
  )
}

export default RecordItem
