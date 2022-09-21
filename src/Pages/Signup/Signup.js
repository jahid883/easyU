import React from 'react';

const Signup = () => {
    return (
        <div>
            <div className="card md:w-1/3 bg-base-100 shadow-xl mx-auto my-20">
                <div className="card-body">
                    <form>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Full Name</span>
                            </label>
                            <input type="text" placeholder="full name" className="input input-bordered w-full max-w-xs" />
                        </div>
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
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Confrim Password *</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered w-full max-w-xs" />
                        </div>

                        <input className='btn btn-primary mt-2 w-1/3' type="submit" value="Sign Up"></input>


                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;