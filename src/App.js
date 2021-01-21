import React, { Suspense, lazy } from 'react';
import { ToastContainer, Slide } from 'react-toastify';
import { LocaleProvider } from './contexts/LocaleContext'

import Header from './components/Header';
import Hero from './components/Hero';
import HelmetWrap from './components/HelmetWrap';

const About = lazy(()=> import('./components/About'));
const Features = lazy(()=> import('./components/Features'));
const Gallery = lazy(()=> import('./components/Gallery'));
const Contact = lazy(()=> import('./components/Contact'));
const Footer = lazy(()=> import('./components/Footer'));

const App = () => {
  return (
    <div className="App">
      <LocaleProvider>
          <HelmetWrap />
          <Header />
        
          <main className="main">
              <Hero />           
              <Suspense fallback={<p>Loading...</p>}>
                <About />     
                <Features /> 
                <Gallery />
                <Contact /> 
              </Suspense>  
          </main>

          <Suspense fallback={<p>Loading...</p>}>
            <Footer />
          </Suspense> 
      </LocaleProvider>

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
    </div>
  );
}

export default App;
