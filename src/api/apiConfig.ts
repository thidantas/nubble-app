import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333',
  headers: {
    // TODO: temporary token in use, replace with securely stored token and apply masking
    Authorization:
      'Bearer eyJhbGciOiJSUzI1NiJ9.eyJkYXRhIjp7InVzZXJJZCI6MSwidXNlciI6eyJlbWFpbCI6Im1hcmlhanVsaWFAY29mZnN0YWNrLmNvbSJ9fSwiaWF0IjoxNzYxNzY4NDg1LCJleHAiOjE3NjE3NzAyODV9.BOWXtgvSvVFpp_DsCqcPFVBvZu0o0WAfp-ymDFPsNAZUF1b_xZq9kMrvQXWYV4DuRoNqjCYTMosgB-NnCM_ugH2s24Yns0kkkpV-5rTD8oP6Nq4B8JrG0GArNn-9R8II7d0rtUteitWVtDbP-505Wo_cD5ant5Cm29W6hCrEbgXd8FJ6mRmChy3JvFj7Je0IapFeS6TnoNwFzXTfA4-swBc-iDMG6sPmvAiXgsh4At6x8WYKFFQ9I6r4AdBTOvT_uhSOGWQ-rEro6X5BhatRlEN0_Gu7-BvjadfMvVpioJ5sKS-Cj13_u7u5HTm8dQ_tevaLCFZThL4sEhfCJRlEUw'
  }
})
