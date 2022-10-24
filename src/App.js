import React, {Suspense} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Building from './components/Building/Building';
import Home from './components/Home/Home.tsx';
// import SignIn from './components/SignIn/SignIn';

const SignIn = React.lazy(() => import('./components/SignIn/SignIn'));


function App() {
  return (
    <>

      <Router>
        <div className='app'>
          <Building />
          <Routes>

            <Route exact path='/' element={<Home />} />
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

export default App;
