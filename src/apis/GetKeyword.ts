import axios from 'axios'
import HttpService from './HttpService'

export const GeyKeyword = async ({ search }: string) => {
  try {
    const response = await HttpService.get('/sick', { params: { q: search } })

    return response
  } catch (error) {
    if (axios.isAxiosError<{ message: string }>(error)) {
      console.error(error.response?.data.message)
    }
  }
}
