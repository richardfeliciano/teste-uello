import axios from 'axios'

const options = {
  baseURL: process.env.VUE_APP_API_URL,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
}

const http = axios.create(options)

http.interceptors.request.use(
  async (config) => {
    if (config.url !== '/login') {
      const userToken = await localStorage.getItem('token')
      config.headers.Authorization = `Bearer ${userToken}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

http.interceptors.response.use(
  async (response) => {
    return response
  },
  (error) => {
    const status = error.response.status

    if (status === 400 || status === 402 || status === 403 || status === 422) {
      const msg = Object.values(error.response.data.errors).flat().join('\n')
      alert(msg)
    }

    if (status >= 500 || status === 401) {
      localStorage.clear()
      window.location.reload(true)
    }

    return Promise.reject(error)
  }
)

export default http
