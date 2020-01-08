import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';
import {Provider} from 'react-redux';
import store from './store';
import ListTable from './components/ListTable'

function App() {

  return (        
    <Provider store={store}>
      <div className="App">
        <Container>
          <Row>
            <Col>
              <ListTable/>
            </Col>
          </Row>
        </Container>
      </div>
    </Provider>
  );
}

export default App;
