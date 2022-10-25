import React, { useState } from "react";
import '../SignIn/SignIn.css';
import { Link } from 'react-router-dom';

export default function SignIn(): JSX.Element {
    const [access, setAccess] = useState('email');
    const [isUser, setAuth] = useState(false);
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [user, setUser] = useState(null)

    const emailAccess = (): JSX.Element => {
        return (
            <>
                <label htmlFor="email">Email Address</label><br />
                <input
                    name="email"
                    type="email"
                    maxLength={50}
                    placeholder="Enter Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required /><br />
            </>
        )
    }
    const phoneAccess = (): JSX.Element => {
        return (
            <div className="phone_wrap">
                <span>+234</span>
                <input
                    id="phone_number"
                    type="tel"
                    maxLength={11}
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)} required />
                    <br />
            </div>
        )
    }


    return (
        <div id="signin">
            {isUser && email
                ? (
                    <div>
                        Verify email
                    </div>
                )
                : isUser && phoneNumber ? (
                    <div>
                        verify phone number
                        </div>
                )
                : (
                    <div className='wrapper' >
                        <div className="mini_container signin">
                            <p className="heading capitalize">Sign up To Property</p>
                            <p className="subtitle capitalize">let's get to know you</p>
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
                                <form id={access === 'email' ? 'email' : 'phone'} onSubmit={(e) => { e.preventDefault(); setAuth(true) }} >
                                    {(access === 'email')
                                        ? emailAccess()
                                        : phoneAccess()
                                    }
                                    <button id="signin_btn" className="btn filled_btn" type="submit">Continue</button>

                                    <div className="btn_group">
                                        <button><span><img src={require("../../assets/google.png")} alt='google_icon' />Continue with Google</span></button>
                                        <button><span><img src={require("../../assets/fb.png")} alt='fb_icon' />Continue with Facebook</span></button>


                                    </div>
                                    <p className="register_link">Already have an account? <Link className='link' to="/signin" >Sign in</Link></p>

                                </form>


                            </>



                        </div>

                    </div>
                )
            }

        </div>
    )
}

