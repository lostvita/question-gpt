// import { records } from '../../mock'
import { useMemo } from 'react'
import { fetchRecords } from '../../request'
import RecordItem from './components/RecordItem'
import { useRequest } from 'ahooks'
import Loading from '../../components/Loading'

function Records() {
  const { data, loading } = useRequest(fetchRecords)

  const records = useMemo(() => {
    if (!data || !data.status) {
      return []
    }
    return data.res
  }, [data])

  if (loading) {
    return <Loading />
  }

  const renderItems = () => {
    return records.map((item) => {
      return (
        <RecordItem
          key={item.id}
          id={item.id}
          title={item.title}
          status={item.status}
        />
      )
    })
  }
  return (
    <div className='container pt-5 max-w-none h-screen text-lg'>
      <h1 className='flex flex-col justify-center items-center mb-10 text-xl'>
        生成记录
      </h1>
      <div className='w-2/3 mx-auto'>{renderItems()}</div>
    </div>
  )
}

export default Records
