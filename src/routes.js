import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// components
import Home from './components/index';
import Header from './components/header';
import Footer from './components/footer';
import Cars from "./components/cars";
import Forms from "./components/cars/forms";
import {ModalContextProvider} from "./context";

const Routes = () => (
    <ModalContextProvider>
        <BrowserRouter>
            <Header/>
            <main role="main" className="container">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/cars" component={Cars}/>
                    <Route exact path="/addCar" component={Forms}/>
                </Switch>
            </main>
            <Footer />
        </BrowserRouter>
    </ModalContextProvider>
)

export default Routes;
