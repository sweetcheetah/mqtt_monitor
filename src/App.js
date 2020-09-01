import React, { useState} from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

  const [temp, setTemp] = useState("Loading...")
//var temp = '0.00F'
//var temp = '';
fetch('http://localhost:3000/topic/bus-1-temp/current')
  .then( res => res.json() )
  .then( (result) => {
    setTemp(result.value);
  },
  (error) => {
    console.log(error);
  })
 
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Card border='dark' bg='success' text='white'><Card.Body>
              <Card.Header>Bus Temp</Card.Header>
              <Card.Text>{temp}</Card.Text>
            </Card.Body></Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
