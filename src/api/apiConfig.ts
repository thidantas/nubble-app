import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJSUzI1NiJ9.eyJkYXRhIjp7InVzZXJJZCI6MSwidXNlciI6eyJlbWFpbCI6Im1hcmlhanVsaWFAY29mZnN0YWNrLmNvbSJ9fSwiaWF0IjoxNzYxNzY1MjI1LCJleHAiOjE3NjE3NjcwMjV9.D0rJ09l4kAGLLTn7dk9hMZewYOPCkMp4eekxzXHPpS9SPqyP835Av6aAYuuAz7jEXnZXdC04x5N5w_Wp13-_ed4hbHd_fs6Oo9UnabP-NGnytQD1S6fTYg10lkUHtS8Hv3IG1du-l1xuwV20XlQZr7vO7wcdXNU4e25E_Pa1MzF--ZIadiwbBDrRoiz83XmWiOzH9tAoXZu9kbtWmEgsUfjOUkp3AS3d_yFzHyotrkxtjL3-ab3BeF-0Fw2fhI-x3Z1cjAlmFSw38HcKoxn0NH7mAVynsolnpxXUtak0DpsqPpk1bKM100Pj0Fp1BhAGxcgZ2zxHp21I1mZ7tFOqZg'
  }
})
