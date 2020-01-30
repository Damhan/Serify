import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.scss';
import { Container} from 'react-bootstrap';
import {Provider} from 'react-redux';
import store from './store';
import ListTable from './components/ListTable'
import Navb from './components/Navb';

function App() {

  return (        
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Navb/>
          {/* TODO: implement switches */}
          {/* <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={} />
          </Switch> */}
          <Container fluid={"true"} className="px-0">
                <ListTable/>
          </Container>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
