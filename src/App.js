import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Premhistory } from './Elements/premhistory';
import { Premstats } from './Elements/premstats';
import { Info } from './Elements/info';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar, Nav } from 'react-bootstrap';
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Edit } from './Elements/edit';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/PremierLeagueHistory">PremierLeagueHistory</Nav.Link>
            <Nav.Link href="/PremierLeagueStats">PremierLeagueStats</Nav.Link>
            <Nav.Link href="/PremierLeagueInfo">AddInfo</Nav.Link>
          </Nav>
        </Navbar>

        <br />
        <Switch> 
          <Route path='/PremierLeagueHistory' component={Premhistory} exact/>
          <Route path='/PremierLeagueStats' component={Premstats} exact/>
          <Route path='/PremierLeagueInfo' component={Info} exact/>
          <Route path='/edit/:id' component={Edit}></Route>
        </Switch>
        
      </div>
      </Router>
    );


  }
}

export default App;
