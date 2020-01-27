import React from 'react';
import './App.scss';
import { Container} from 'react-bootstrap';
import {Provider} from 'react-redux';
import store from './store';
import ListTable from './components/ListTable'

function App() {

  return (        
    <Provider store={store}>
      <div className="App">
        <Container fluid={"true"} className="px-0">
              <ListTable/>
        </Container>
      </div>
    </Provider>
  );
}

export default App;
