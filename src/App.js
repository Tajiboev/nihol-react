import React, { Suspense, lazy, useState } from 'react';
import { ToastContainer, Slide } from 'react-toastify';
import LocaleContext from './contexts/LocaleContext'

import Hero from './components/Hero';

const Header = lazy(()=> import('./components/Header'));
const About = lazy(()=> import('./components/About'));
const Features = lazy(()=> import('./components/Features'));
const Gallery = lazy(()=> import('./components/Gallery'));
const Contact = lazy(()=> import('./components/Contact'));
const Footer = lazy(()=> import('./components/Footer'));

const App = () => {
  const [locale, setLocale] = useState('uz')

  return (
    <div className="App">
      <LocaleContext.Provider value={locale}>
        <Suspense fallback={<p>Loading...</p>}>
          <Header />
        </Suspense>
      
        <main className="main">
            <Hero></Hero>           
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
      </LocaleContext.Provider>
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
