import React, { useState, Suspense, lazy } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Fallback from './components/Fallback'

const About = lazy(()=> import('./components/About'));
const Features = lazy(()=> import('./components/Features'));
const Gallery = lazy(()=> import('./components/Gallery'));

const App = () => {

  return (
    <div className="App">
      <Header></Header>
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
      </main>
    </div>
  );
}

export default App;
