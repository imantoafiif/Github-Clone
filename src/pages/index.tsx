import Navbar from '@/components/Navbar';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const index = () => {

  const route = useRouter()
  const [auth_token, setToken] = useState<string | string[] | null>(null)

  useEffect(() => {
    
    if(route.isReady) {

      const token = localStorage.getItem('auth.token')
      const { code } = route.query

      if(code) {
        setToken(code)
        localStorage.setItem('auth.token', code as string)
        route.push('/')
        return
      }

      if(!token) {
        window.location.href = `https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_CLIENT_ID}`
        return
      }

      setToken(token)

    }

  }, [route])

  return (
    auth_token ? (
      <Navbar></Navbar>
    ) 
    : <p>no auth</p>
  )

}

export default index