import React, { useState } from "react";
import './SignIn.css';
import { Link } from 'react-router-dom';

export default function SignIn(): JSX.Element {
    const [access, setAccess] = useState('email');

    const emailAccess = (): JSX.Element => {
        return (
            <>
                <label htmlFor="email">Email Address</label><br />
                <input name="email" type="email" placeholder="Enter Email Address" required /><br />
            </>
        )
    }
    const phoneAccess = (): JSX.Element => {
        return (
            <div className="phone_wrap">
                <span>+234</span>
                <input id="phone_number" type="tel" maxLength={11} required /><br />
            </div>
        )
    }
    return (
        <div id="signin">
            <div className='wrapper' >
                <div className="mini_container signin">
                    <p className="heading">Sign in To Property</p>
                    <p className="subtitle capitalize">Hey there, welcome back</p>
                    <span className="access_wrap">
                        <span className="access">
                            <span
                                onClick={() => setAccess('email')}
                                id={access === 'email' ? 'active' : "inactive"}
                            >Email</span>
                            <span
                                onClick={() => setAccess('phone')}
                                id={access === 'email' ? 'inactive' : "active"}
                            >Phone Number</span>
                        </span>
                    </span>

                    <>
                        <form id={access === 'email' ? 'email' : 'phone'} >
                            {(access === 'email')
                                ? emailAccess()
                                : phoneAccess()
                            }
                            <button id="signin_btn" className="btn filled_btn" type="submit"><a href="#">Sign in</a></button>

                            <div className="btn_group">
                                <button><span><img src={require("../../assets/google.png")} alt='google_icon' />Continue with Google</span></button>
                                <button><span><img src={require("../../assets/fb.png")} alt='fb_icon' />Continue with Facebook</span></button>


                            </div>
                            <Link to='/register' className="link capitalize">forgot password?</Link>
                        </form>
                        <p className="register_link">Haven't signed up yet? <Link className='link' to="/register" >Create an account</Link></p>


                    </>



                </div>

            </div>
        </div>
    )
}

