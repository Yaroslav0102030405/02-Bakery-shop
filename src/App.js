import React from 'react';
// import Container from './components/container/Container';
import Header from './pages/Home/Header/Header';
import Hero from './pages/Home/Header/Hero/Hero';
import Advantages from './pages/Home/Advantages/Advantages';

const App = () => {
  return (
    // реакт фрмагмент
    // передача динамических props // XML разметка
    <>
      <Header />
      <main>
        <Hero />
        <Advantages />
      </main>
    </>
  );
};

export default App;
