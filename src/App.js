import React, {useState} from 'react';
import './App.css';
import MaterialTable from 'material-table'
import { Container, Row, Col } from 'react-bootstrap';

function App() {

  const initialState = {
    books: [{name:"book1", genre:"horror", author:"J.K Rowling"},{name:"book2"}]
  }

  const [books,setBooks] = useState(initialState);

  return (        
    <div className="App">
      <Container>
        <Row>
          <Col>
            <h1 style={{color:"charcoal", fontSize:"2em", textAlign:"center"}}>Serify</h1>
            <MaterialTable
              columns={[
                    { title: 'Name', field: 'name' },
                    { title: 'Genre', field: 'genre' },
                    { title: 'Author', field: 'author' }
                  ]}
              data={books.books}
              title="Demo Table"
              options={{
                search:true
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
