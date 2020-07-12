import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './containers/Home'
import { Switch, Route, Redirect } from 'react-router-dom';
import ContactForm from './components/ContactForm'
import Products from './containers/Products'
import About from './containers/About'
import Footer from './components/Footer'
import Header from './components/Header'


function App() {
  return (
    <>
          <Header/>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/products' component={Products} />
      <Route exact path='/contact' component={ContactForm} />
      <Redirect to='/' />
    </Switch>
    <Footer />
    </>
  );
}

export default App;
