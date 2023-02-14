import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'
export const Login = () => {
  return (
<>
<div className="login-wrapper py-5 home-wrapper-2">
    <div className="row">
        <div className="col-12">
            <div className="auth-card">
                <h3 className='text-center mb-3'>Login</h3>
                <form action="" className='d-flex flex-column gap-15'>
                    <div>
                        <input type="email"name='email'placeholder='Email'className='form-control' />
                    </div>
                    <div className='mt-1'>
                        <input type="password"name='password' placeholder='Password' className="form-control" />
                    </div>
                    <Link to="/forgot-password">Forgot Password?</Link>
                    <div id='btn-bt'  className="mt-3 d-flex justify-content-center gap-15 align-items-center ">
                        <button className="button border-0">Login</button>
                        <Link to='/sign-up'><button>Sign up </button></Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

</>  )
}
