import React, { useState } from "react";
import './SignIn.css';

export default function SignIn(): JSX.Element {
    const [access, setAccess] = useState('email');

    const emailAccess = () => {
        return (
            <form id="email">
                <label htmlFor="email">Email Address</label><br />
                <input name="email" type="email" placeholder="Enter Email Address" required /><br />
                <button id="signin_btn" className="btn filled_btn" type="submit"><a href="#">Sign in</a></button>

                <div className="btn_group">
                    <button><span><img src={require("../../assets/apple.png")} alt='apple_icon' />Continue with Apple</span></button>
                    <button><span><img src={require("../../assets/google.png")} alt='google_icon' />Continue with Google</span></button>
                    <button><span><img src={require("../../assets/fb.png")} alt='fb_icon' />Continue with Facebook</span></button>


                </div>
                <p className="phone_link">Or sign in with <span onClick={() => setAccess('phone')}>Phone Number</span></p>
            </form>

        )
    }

    const phoneAccess = () => {
        return (
            <form id="phone">
                <div className="phone_wrap">
                    <span>+234</span>
                    <input id="phone_number" type="tel" maxLength={11} required /><br />
                </div>
                <button id="signin_btn" className="btn filled_btn" type="submit"><a href="#">Sign in</a></button>

                <div className="btn_group">
                    <button><span><img src={require("../../assets/apple.png")} alt='apple_icon' />Continue with Apple</span></button>
                    <button><span><img src={require("../../assets/google.png")} alt='google_icon' />Continue with Google</span></button>
                    <button><span><img src={require("../../assets/fb.png")} alt='fb_icon' />Continue with Facebook</span></button>


                </div>
                <p className="phone_link">Haven't signed up yet? <a href="/register" >Create an account</a></p>
            </form>
        )
    }
    return (
        <div id="signin">
            <div className='wrapper' >
                <div className="mini_container signin">
                    <p className="heading">Sign in To Property</p>
                    <p className="subtitle capitalize">Hey there, welcome back</p>

                    {(access === 'email')
                        ? emailAccess()
                        : phoneAccess()
                    }


                </div>

            </div>
        </div>



    )
}

