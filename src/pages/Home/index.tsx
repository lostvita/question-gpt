import { useRef } from 'react'
import InputGroup from './components/InputGroup'
import { fetchInputForm } from '../../request'
import { message } from 'antd'
import { useNavigate } from 'react-router-dom'

function Home() {
  const titleRef = useRef('')
  const contextcRef = useRef('')
  const [messageApi, contextHolder] = message.useMessage()
  const navigate = useNavigate()

  const handleTitleChange = (val: string) => {
    titleRef.current = val
  }

  const handleContextChange = (val: string) => {
    contextcRef.current = val
  }

  const handleGenerate = async () => {
    if (!titleRef.current || !contextcRef.current) {
      messageApi.warning('请填写试题和描述！')
      return
    }
    const params = {
      title: titleRef.current,
      context: contextcRef.current,
    }
    const res = await fetchInputForm(params)
    if (res.status === false) {
      messageApi.error(res.errorMsg)
      return
    }
    navigate('/records')
  }

  return (
    <div className='container max-w-none h-screen flex flex-col justify-center items-center text-lg'>
      {contextHolder}
      <h1 className='mb-10 text-xl'>AI 试卷</h1>
      <div className='w-full'>
        <InputGroup name='请输入标题：' onChange={handleTitleChange} />
        <InputGroup
          name='请输入描述：'
          type='textarea'
          onChange={handleContextChange}
        />
      </div>
      <div className='w-full p-2 flex justify-center items-center'>
        <button
          className='py-2 px-7 bg-cyan-500 text-white text-sm font-semibold rounded-md shadow-lg shadow-cyan-500/50 focus:outline-none hover:bg-cyan-600'
          onClick={handleGenerate}
        >
          一键生成
        </button>
      </div>
    </div>
  )
}

export default Home
