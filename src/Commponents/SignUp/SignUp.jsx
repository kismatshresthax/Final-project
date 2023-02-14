import React from 'react'
import { Link } from 'react-router-dom'
export const SignUp = () => {
  return (
<>
<div className="login-wrapper py-5 home-wrapper-2">
    <div className="row">
        <div className="col-12">
            <div className="auth-card">
                <h3 className='text-center mb-3'>Sign Up</h3>
                <form action="" className='d-flex flex-column gap-15'>
                    <div>
                        <input type="text"name='name'placeholder='Name'className='form-control'  />
                    </div>
                    <div className='mt-1'>
                        <input type="email"name='email'placeholder='Email'className='form-control' />
                    </div>
                    
                    <div className='mt-1'>
                        <input type="password"name='password' placeholder='Password' className="form-control" />
                    </div>
                    <div className='mt-1'>
                        <input type="password"name='confpassword' placeholder='Confirm Password' className="form-control" />
                    </div>
                    <div className="mt-3 d-flex justify-content-center flex-column gap-15 align-items-center">
                      <button className="button border-0">Sign Up</button>
                        <Link to="/login">Cancel</Link>

                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

</>  )
}
