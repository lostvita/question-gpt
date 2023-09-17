import { useLocation } from 'react-router-dom'
import Question from './components/Question'
import { useRequest } from 'ahooks'
import { fetchQuestions } from '../../request'
import Loading from '../../components/Loading'
import { useMemo, useRef } from 'react'
import { message } from 'antd'

function Questions() {
  const { state } = useLocation()
  const { data, loading } = useRequest(() => fetchQuestions({ id: state.id }), {
    refreshDeps: [state.id],
  })
  const [messageApi, contextHolder] = message.useMessage()
  const answers = useRef(new Map())

  const questions = useMemo(() => {
    if (!data || !data.status) {
      return []
    }
    return data.res!.questionList
  }, [data])

  if (loading) {
    return <Loading />
  }

  const title = data?.res?.title ?? '未知问题'

  const handleChange = (val: number, key: number) => {
    answers.current.set(key, val)
  }

  const handleSubmit = () => {
    const disabled = answers.current.size < questions.length
    if (disabled) {
      messageApi.warning('请先完整答题！')
      return
    }
    messageApi.success('提交成功！')
  }

  const renderItems = () => {
    return questions.map((v, idx) => (
      <Question key={idx} index={idx} data={v} onChange={handleChange} />
    ))
  }

  return (
    <div className='container pt-5 max-w-none h-screen text-lg'>
      {contextHolder}
      <h1 className='flex flex-col justify-center items-center mb-10 text-xl'>
        {title}
      </h1>
      <div className='w-2/3 mx-auto'>{renderItems()}</div>
      <div className='w-full mt-4 p-2 flex justify-center items-center'>
        <button
          className='py-2 px-7 bg-cyan-500 text-white text-sm font-semibold rounded-md shadow-lg shadow-cyan-500/50 focus:outline-none hover:bg-cyan-600'
          onClick={handleSubmit}
        >
          提 交
        </button>
      </div>
    </div>
  )
}

export default Questions
