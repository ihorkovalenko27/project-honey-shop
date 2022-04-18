import React from 'react';
import Container from './components/container/Container';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Cards from './components/cards/Cards';
import About from './components/about/About';
import Info from './components/info/Info';
import Form from './components/form/Form';
import Products from './components/products/Products';
import Footer from '../src/components/footer/Footer';
import ScrollUp from './components/scroll/Scroll';

const App = () => {
  return (
    <>
      <Container>
        <Header />
        <Hero />
        <Cards />
        <Form />
        <About />
        <Products />
        <Info />
        <ScrollUp />
      </Container>
      <Footer />
    </>
  );
};

export default App;
