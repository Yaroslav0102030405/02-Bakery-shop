import React from 'react';
// import Container from './components/container/Container';
import Header from './pages//Header/Header';
import Hero from './pages/Hero/Hero';
import Advantages from './pages/Advantages/Advantages';
import Traditions from './pages/Traditions/Traditions';
import Chefs from './pages/Chefs/Chefs';
import Formats from './pages/Formats/Formats';
import Contacts from './pages/Contacts/Contacts';
import Footer from './pages/Footer/Footer';

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
        <Formats />
        <Contacts />
      </main>
      <Footer />
    </>
  );
};

export default App;
