import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';





import {Header,Topheader,Section,Priceing,Curious,Countact,Footer,Testimonial,Addtestimonial,Edittestimonials} from './component';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        
        <Route exact path="/">
          <Header />
          <Section/>
          <Priceing/>
          <Curious/>
          <Countact/>
          <Footer/>
        </Route>
        <Route exact path="/testimonial">
          <Topheader />
          <Testimonial/>
        </Route>
        <Route exact path="/add-testimonial">
          <Topheader />
          <Addtestimonial/>
        </Route>
        <Route exact path="/edit-testimonials">
          <Topheader />
          <Edittestimonials/>
        </Route>
      </Switch>
    </BrowserRouter>
    
  );
}

export default App;
