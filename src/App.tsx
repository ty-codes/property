import React, {Suspense} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Building from './components/Building/Building';
import Home from './components/Home/Home';
// import SignIn from './components/SignIn/SignIn';

const SignIn = React.lazy(() => import('./components/SignIn/SignIn'));


export default function App(): JSX.Element {
  return (
    <>

      <Router>
        <div className='app'>
          <Building />
          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='signin' element={
              <Suspense fallback={<div>Loading....</div>}>
                <SignIn />
              </Suspense>
            }
            />
            

          </Routes>

        </div>
      </Router>
    </>
  );
}


