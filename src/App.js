import React, { Component, } from 'react';
import ReactDOMServer from 'react-dom/server';
import { Route, BrowserRouter as Router, Link, Switch } from 'react-router-dom';
import logo from './logo.svg';
import { CreateComponent } from './create/CreateComponent';
import { GetComponent } from './read/GetComponent';
import { UpdateComponent } from './update/UpdateComponent';
import { DeleteComponent } from './delete/DeleteComponent';
import './App.css';

const routes = (
  <Switch>
    <Route exact path="/create" component={CreateComponent} />
    <Route path="/update/:id" component={UpdateComponent} />
    <Route exact path="/" component={GetComponent} />
    <Route path="/delete/:id" component={DeleteComponent} />
  </Switch>
);
class App extends Component {
  constructor(props) {
    super(props);


  }


  render() {
    //const {CreateComponent,GetComponent,UpdateComponent,DeleteComponent }=this.props;
    return (
      <Router>
        <div className="App">
          <header>
            <nav class="nav-wrapper black">
              <ul class="center">
                <li><Link to="create">Create</Link></li>
                <li><Link to="/">Read</Link></li>
              </ul>
            </nav>
          </header>
          <Switch>
            <Route exact path="/create" component={CreateComponent} />
            <Route path="/update/:id" component={UpdateComponent} />
            <Route exact path="/" component={GetComponent} />
            <Route path="/delete/:id" component={DeleteComponent} />
          </Switch>
        </div>
      </Router>
    );
  }
}
function createMarkup(htmlString) { return { __html: htmlString }; };
export default App;
