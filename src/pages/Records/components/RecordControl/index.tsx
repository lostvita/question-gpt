import { generateStatus } from '../../../../constants'

interface IProps {
  status: generateStatus
  onRefresh?: () => void
  onView?: () => void
}

function RecordControl(props: IProps) {
  const { status, onRefresh = () => {}, onView = () => {} } = props
  const isLoading = status === generateStatus.loading
  return (
    <div className='flex justify-end grow'>
      {isLoading && (
        <>
          <div className='px-3 py-1 bg-cyan-500 text-white rounded-full shadow-sm'>
            生成中
          </div>
          <button
            className='py-1 px-3 ml-4 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-600 focus:outline-none'
            onClick={onRefresh}
          >
            刷 新
          </button>
        </>
      )}
      {!isLoading && (
        <>
          <div className='px-3 py-1 bg-green-600 text-white rounded-full shadow-sm'>
            已完成
          </div>
          <button
            className='py-1 px-3 ml-4 bg-blue-500 text-white rounded-md shadow-lg hover:bg-blue-600 focus:outline-none'
            onClick={onView}
          >
            查 看
          </button>
        </>
      )}
    </div>
  )
}

export default RecordControl
