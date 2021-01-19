import React, { Suspense, lazy } from 'react';
import { ToastContainer, Slide } from 'react-toastify';

import Hero from './components/Hero';
import Fallback from './components/Fallback'

const Header = lazy(()=> import('./components/Header'));
const About = lazy(()=> import('./components/About'));
const Features = lazy(()=> import('./components/Features'));
const Gallery = lazy(()=> import('./components/Gallery'));
const Contact = lazy(()=> import('./components/Contact'));
const Footer = lazy(()=> import('./components/Footer'));

const App = () => {

  return (
    <div className="App">
      <Suspense fallback={<div style={{height: '80px', width: '100%', backgroundColor: '#fafafa'}}></div>}>
        <Header />
      </Suspense>
      
      <main className="main">
        <Hero></Hero>
        <Suspense fallback={<Fallback />}>
          <About />
        </Suspense>
        <Suspense fallback={<Fallback />}>
          <Features />
        </Suspense>
        <Suspense fallback={<Fallback />}>
          <Gallery />
        </Suspense>
        <Suspense fallback={<Fallback />}>
          <Contact />
        </Suspense>
        <Suspense fallback={<Fallback />}>
          <Footer />
        </Suspense>
        <ToastContainer
          position="top-center"
          autoClose={2500}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          transition={Slide}
        />
      </main>
    </div>
  );
}

export default App;
