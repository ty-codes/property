import './Home.css';
import React from 'react';

export default function Home(): JSX.Element {
  return (
            <div id="home">
                <div className="wrapper" >
                <div className="mini_container">
                    <h1 className="heading capitalize"> We are<br /> the competition</h1>
                    <p className="subtitle capitalize">bridging the real estate capital barrier</p>
                    <button className='btn filled_btn'><a href='/register'>Get started</a></button>
                    <button className='btn outlined_btn'><a href='/signin'>Log In</a></button>
                    <p className='policy'>By selecting one or the other, you are agreeing to the</p>
                    <p className='policy_link capitalize'>
                        <a href='#'>terms of services </a>
                        <span>&</span>
                        <a href='#'> privacy policy</a>
                    </p>
                </div>
            </div>
            </div>
            
        )
  }
