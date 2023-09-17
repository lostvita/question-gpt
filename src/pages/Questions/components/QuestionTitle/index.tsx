interface IProps {
  index: number
  title: string
}

function QuestionTitle(props: IProps) {
  const { index, title } = props
  return (
    <div className='w-full flex items-center py-2 font-semibold text-base'>
      <span className='mr-2'>{`${index}.`}</span>
      <div>{title}</div>
    </div>
  )
}

export default QuestionTitle
