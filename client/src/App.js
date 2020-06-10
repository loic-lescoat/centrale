import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import PokemonDisplayer from "./components/PokemonDisplayer";
import ListeDeFilms from "./components/ListeDeFilms";
import HomePage from "./components/HomePage";
import Tmp from './components/Tmp';


import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';

import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    // <Router>
    //   <div>
    //     <nav>
    //       <ul>
    //         <li>
    //           <Link to="/">Home</Link>
    //         </li>
    //         <li>
    //           <Link to="/demo">API Fetch demo</Link>
    //         </li>
    //         <li><Link to='/tmp'>tmp</Link></li>
    //       </ul>
    //     </nav>
    //     {/* A <Switch> looks through its children <Route>s and
    //         renders the first one that matches the current URL. */}
    //     <Switch>
    //       <Route path="/demo">
    //         <PokemonDisplayer />
    //       </Route>
    //       <Route path='/tmp'>
    //         <p>tmp</p>
    //       </Route>
    //       <Route path="/">
    //         <HomePage />
    //       </Route>
          
    //     </Switch>
    //   </div>
    // </Router>

    <Router>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="/">Le super site de David et Loïc</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/liste_de_films">Liste de films</Nav.Link>
      <Nav.Link href="/film_au_hasard">Film au hasard</Nav.Link>
      <NavDropdown title="Quel sentiment décrit le mieux ce que vous ressentez pour David et Loïc?" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Une indifférence profonde</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Une haine accablante</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Une admiration sans bornes</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Une soudaine envie de les embaucher chez Theodo</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Encore autre chose</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="/demo">exemple pokemon</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="/recommandation">Recommande moi un film</Nav.Link>

    </Nav>
  </Navbar.Collapse>
</Navbar>



      <Switch>
           <Route path="/demo">
             <PokemonDisplayer />
           </Route>
           <Route path='/tmp'>
             
             <Tmp />
             <p>tmp de app.js</p>
           </Route>


           <Route path='/liste_de_films'>
            <ListeDeFilms />
           </Route>



           <Route path='/film_au_hasard'>
              {/* <FilmAuHasard /> */}
              <p>a faire</p>
           </Route>
           <Route path='/recommandation'>
            {/* <Recommandation /> */}
            <p>a faire</p>
           </Route>


           <Route path="/">
             <HomePage />
           </Route>
          
         </Switch>
    </Router>


  );
}

export default App;
