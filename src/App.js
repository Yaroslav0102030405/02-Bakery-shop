import React from 'react';
// import Container from './components/container/Container';
import Header from './pages/Home/Header/Header';
import Hero from './pages/Home/Header/Hero/Hero';
import Advantages from './pages/Home/Advantages/Advantages';
import Traditions from './pages/Home/Traditions/Traditions';
import Chefs from './pages/Chefs/Chefs';

const App = () => {
  return (
    // реакт фрмагмент
    // передача динамических props // XML разметка
    <>
      <Header />
      <main>
        <Hero />
        <Advantages />
        <Traditions />
        <Chefs />
      </main>
    </>
  );
};

export default App;
