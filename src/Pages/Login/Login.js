import React from 'react';
import { BrowserRouter } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="card md:w-1/3 bg-base-100 shadow-xl mx-auto my-20">
                <div className="card-body">
                    <form>

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email *</span>
                            </label>
                            <input type="email" placeholder="example@gmail.com" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password *</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered w-full max-w-xs" />
                        </div>




                        <input className='btn btn-success mt-2 w-1/3' type="submit" value="Log In"></input>

                        <br/>

                        <button className='btn btn-link'>forget password</button>


                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;