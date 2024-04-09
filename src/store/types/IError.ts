export default interface IError {
  status: number
  data: {
    success: boolean
    error: {
      code: number
      message: string
      details: {
        [key: string]: string[]
      }[]
    }
  }
}
