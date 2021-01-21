import React, { Suspense, lazy } from 'react';
import { ToastContainer, Slide } from 'react-toastify';
import { Helmet } from 'react-helmet';
import { useLocale } from './contexts/LocaleContext'

import Header from './components/Header';
import Hero from './components/Hero';

const About = lazy(()=> import('./components/About'));
const Features = lazy(()=> import('./components/Features'));
const Gallery = lazy(()=> import('./components/Gallery'));
const Contact = lazy(()=> import('./components/Contact'));
const Footer = lazy(()=> import('./components/Footer'));

const App = () => {
  const { locale } = useLocale()
  return (
    <div className={locale === 'ru' ? "App russian" : "App" }>
        <Helmet htmlAttributes={{ lang : locale }}>
            <title>
                { locale === 'uz' ? "«Nihol» salomatlik sihatgohi" : "Санаторий «Нихол»" }
            </title>
        </Helmet>
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
