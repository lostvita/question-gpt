import * as http from '../http'

interface InputFormParams {
  title: string
  context: string
}

interface InputFormResponse {
  status: boolean
  res: string
  errorCode?: string
  errorMsg?: string
}

export interface QuestionItem {
  question: string
  choice: string[]
  answer: number
}

interface RecordItem {
  id: string
  title: string
  context: string
  status: number
  questionList: QuestionItem[]
}

interface RecordsResponse {
  status: boolean
  res: RecordItem[]
  errorCode?: string
  errorMsg?: string
}

interface QuestionsParams {
  id: string
}

interface QuestionsResponse {
  status: boolean
  res: RecordItem | null
  errorCode?: string
  errorMsg?: string
}

export const baseUrl = 'https://www.bigbrain.work/api3'

export const fetchInputForm = async (
  params: InputFormParams
): Promise<InputFormResponse> => {
  const res = await http.post('/api3/form/input', params).catch(console.error)
  if (!res) {
    return {
      status: false,
      res: '',
      errorCode: '',
      errorMsg: '网络错误',
    }
  }
  return res as unknown as InputFormResponse
}

export const fetchRecords = async (): Promise<RecordsResponse> => {
  const res = await http.get('/api3/form/list').catch(console.error)
  if (!res) {
    return {
      status: false,
      res: [],
      errorCode: '',
      errorMsg: '网络错误',
    }
  }
  return res as unknown as RecordsResponse
}

export const fetchQuestions = async (
  params: QuestionsParams
): Promise<QuestionsResponse> => {
  const res = await http.get('/api3/form/one', params).catch(console.error)
  if (!res) {
    return {
      status: false,
      res: null,
      errorCode: '',
      errorMsg: '网络错误',
    }
  }
  return res as unknown as QuestionsResponse
}
