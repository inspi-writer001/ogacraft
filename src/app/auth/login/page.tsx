import React from 'react'
import { LoginFormWrapper } from './_components/login-form-wrapper'

const Login = () => {
  return (
    <div className='h-screen w-full px-4 flex items-start pt-24 md:32 justify-center'>
      <LoginFormWrapper />
    </div>
  )
}

export default Login